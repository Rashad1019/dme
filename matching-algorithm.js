// Enhanced Candidate Matching Algorithm
class CandidateMatcher {
  constructor(candidates, policyWeights, policyStances) {
    this.candidates = candidates;
    this.policyWeights = policyWeights;
    this.policyStances = policyStances;
  }

  // Main matching function
  matchCandidates(userInput, userPreferences = {}) {
    // Reset all candidate scores
    this.candidates.forEach(candidate => candidate.score = 0);

    // Process user input
    const processedInput = this.processUserInput(userInput);
    
    // Calculate scores for each candidate
    this.candidates.forEach(candidate => {
      candidate.score = this.calculateCandidateScore(candidate, processedInput, userPreferences);
      candidate.matchDetails = this.generateMatchDetails(candidate, processedInput, userPreferences);
    });

    // Sort candidates by score (lowest to highest as requested)
    return this.candidates.sort((a, b) => a.score - b.score);
  }

  // Process user text input to extract policy preferences
  processUserInput(userInput) {
    const text = userInput.toLowerCase();
    const words = text.split(/\W+/).filter(word => word.length > 2); // Use \W+ to split by non-alphanumeric characters
    
    const policyMatches = {};
    
    // Initialize policy categories
    Object.keys(this.policyWeights).forEach(category => {
      policyMatches[category] = {
        keywords: new Set(), // Use Set to avoid duplicate keywords
        stanceIndicators: new Set(), // Use Set to avoid duplicate stance indicators
        importance: 1 // Default importance
      };
    });

    // Define a more comprehensive keyword mapping for each category
    const categoryKeywords = {
        publicSafety: ["safety", "crime", "police", "security", "justice", "law enforcement", "mental health support", "community policing"],
        economicDevelopment: ["job", "jobs", "business", "economy", "economic", "growth", "development", "training", "employment", "small business", "local business", "corporations", "tax breaks"],
        housing: ["housing", "home", "homeless", "rent", "affordable housing", "tenant", "development", "stability"],
        education: ["education", "school", "schools", "teacher", "teachers", "student", "students", "funding", "class size", "curriculum"],
        government: ["government", "transparency", "accountability", "city hall", "corruption", "tax dollars", "public funds"],
        transportation: ["transport", "transit", "bus", "road", "infrastructure", "public transport"],
        foodSecurity: ["food", "hunger", "garden", "grocery", "food desert", "nutrition"],
        youth: ["youth", "kids", "children", "young people", "future"],
        neighborhoods: ["neighborhood", "community", "local", "district", "residents"]
    };

    // Extract keywords and stance indicators from user input
    Object.keys(categoryKeywords).forEach(category => {
        categoryKeywords[category].forEach(keyword => {
            if (text.includes(keyword)) {
                policyMatches[category].keywords.add(keyword);
            }
        });
    });

    // Extract stance indicators from user input
    Object.keys(this.policyStances).forEach(category => {
        Object.keys(this.policyStances[category]).forEach(stance => {
            this.policyStances[category][stance].forEach(keyword => {
                if (text.includes(keyword.toLowerCase())) {
                    policyMatches[category].stanceIndicators.add(stance);
                }
            });
        });
    });

    // Calculate importance based on keyword and stance indicator count
    Object.keys(policyMatches).forEach(category => {
      const keywordCount = policyMatches[category].keywords.size;
      const stanceCount = policyMatches[category].stanceIndicators.size;
      
      // Higher importance for categories with more mentions
      policyMatches[category].importance = Math.min(5, 1 + (keywordCount + stanceCount) * 0.75); // Increased multiplier
    });

    return policyMatches;
  }

  // Calculate overall score for a candidate
  calculateCandidateScore(candidate, processedInput, userPreferences) {
    let totalScore = 0;
    let totalWeight = 0;

    Object.keys(this.policyWeights).forEach(category => {
      const categoryWeight = this.policyWeights[category];
      const userImportance = processedInput[category]?.importance || 1;
      const adjustedWeight = categoryWeight * userImportance;
      
      const categoryScore = this.calculateCategoryScore(
        candidate, 
        category, 
        processedInput[category] || { keywords: [], stanceIndicators: [] }
      );
      
      totalScore += categoryScore * adjustedWeight;
      totalWeight += adjustedWeight;
    });

    // Normalize score to percentage, ensuring a minimum base score and scaling
    const baseScore = 20; // Minimum base score to make percentages feel more substantial
    const scaledScore = totalWeight > 0 ? (totalScore / totalWeight) * 80 : 0; // Scale to 80% of max
    return Math.min(100, baseScore + scaledScore);
  }

  // Calculate score for a specific policy category
  calculateCategoryScore(candidate, category, userCategoryData) {
    if (!candidate.policies[category]) {
      return 0;
    }

    const candidatePolicy = candidate.policies[category];
    let score = 0;
    let maxScore = 0;

    // Keyword matching
    const candidateText = (candidatePolicy.details + ' ' + candidatePolicy.keywords.join(' ')).toLowerCase();
    userCategoryData.keywords.forEach(keyword => {
      maxScore += 1;
      if (candidateText.includes(keyword.toLowerCase())) {
        score += 1;
      }
    });

    // Stance matching
    userCategoryData.stanceIndicators.forEach(userStance => {
      maxScore += 2; // Stance matching is worth more than keyword matching
      if (candidatePolicy.stance === userStance) {
        score += 2;
      } else if (this.areStancesCompatible(candidatePolicy.stance, userStance, category)) {
        score += 1;
      }
    });

    // If no specific user input for this category, use general keyword matching
    if (maxScore === 0) {
      maxScore = 1;
      // Basic compatibility score based on general policy presence
      score = candidatePolicy.details ? 0.5 : 0;
    }

    return maxScore > 0 ? score / maxScore : 0;
  }

  // Check if two policy stances are compatible
  areStancesCompatible(candidateStance, userStance, category) {
    const compatibilityMap = {
      publicSafety: {
        'community-focused': ['holistic', 'justice-reform'],
        'holistic': ['community-focused', 'public-health-focused'],
        'justice-reform': ['public-health-focused', 'community-focused']
      },
      economicDevelopment: {
        'business-friendly': ['pro-development', 'innovation-focused'],
        'pro-development': ['business-friendly', 'innovation-focused'],
        'innovation-focused': ['business-friendly', 'inclusive-growth'],
        'inclusive-growth': ['grassroots-focused', 'innovation-focused'],
        'grassroots-focused': ['inclusive-growth', 'resident-led']
      }
    };

    return compatibilityMap[category]?.[candidateStance]?.includes(userStance) || false;
  }

  // Generate detailed match explanation
  generateMatchDetails(candidate, processedInput, userPreferences) {
    const details = {
      strongMatches: [],
      weakMatches: [],
      concerns: [],
      highlights: []
    };

    Object.keys(processedInput).forEach(category => {
      if (processedInput[category].keywords.length > 0 || processedInput[category].stanceIndicators.length > 0) {
        const categoryScore = this.calculateCategoryScore(candidate, category, processedInput[category]);
        
        if (categoryScore > 0.7) {
          details.strongMatches.push({
            category: category,
            score: categoryScore,
            reason: `Strong alignment on ${category} policies`
          });
        } else if (categoryScore > 0.3) {
          details.weakMatches.push({
            category: category,
            score: categoryScore,
            reason: `Partial alignment on ${category} policies`
          });
        } else {
          details.concerns.push({
            category: category,
            reason: `Limited alignment on ${category} priorities`
          });
        }
      }
    });

    // Add candidate highlights
    if (candidate.endorsements && candidate.endorsements.length > 0) {
      details.highlights.push(`Endorsed by: ${candidate.endorsements.slice(0, 2).join(', ')}`);
    }

    return details;
  }

  // Get top policy areas for a candidate
  getCandidateTopPolicies(candidate) {
    const policies = [];
    Object.keys(candidate.policies).forEach(category => {
      policies.push({
        category: category,
        stance: candidate.policies[category].stance,
        details: candidate.policies[category].details
      });
    });
    return policies;
  }
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CandidateMatcher;
}

