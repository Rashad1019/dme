
# Detroit Mayoral Candidate Matching Algorithm Plan

## Current Algorithm Analysis
The existing algorithm in `script.js` uses a simple keyword matching approach:
1. Takes user input text and splits it into keywords (words longer than 3 characters)
2. Searches for these keywords in candidate platform text
3. Calculates a percentage match based on keyword frequency

## Improved Algorithm Design

### 1. Policy Category Weighting System
Instead of simple keyword matching, implement a weighted scoring system based on policy categories:

**Core Policy Categories:**
- Public Safety (25% weight)
- Economic Development (20% weight) 
- Housing (15% weight)
- Education (15% weight)
- Government Accountability (10% weight)
- Transportation (5% weight)
- Food Security (5% weight)
- Youth Programs (3% weight)
- Neighborhoods (2% weight)

### 2. User Input Processing
**Option A: Structured Questionnaire**
- Present users with specific questions for each policy category
- Use slider scales (1-10) for importance rating
- Include multiple choice options for policy preferences

**Option B: Natural Language Processing (Enhanced)**
- Analyze user text input for policy category keywords
- Use sentiment analysis to determine stance (pro/anti)
- Map keywords to specific policy positions

### 3. Candidate Scoring Algorithm
For each candidate:
1. **Category Alignment Score:** Compare user preferences to candidate positions in each category
2. **Weighted Score:** Multiply alignment score by category weight
3. **Total Match Score:** Sum all weighted scores
4. **Ranking:** Sort candidates from lowest to highest match percentage

### 4. Enhanced Matching Features
- **Policy Stance Matching:** Not just keyword presence, but alignment with specific policy positions
- **Deal Breaker Detection:** Identify major policy conflicts
- **Explanation Generation:** Provide reasons for matches/mismatches
- **Alternative Suggestions:** Show candidates with different strengths

## Implementation Strategy

### Phase 1: Update Data Structure
- Restructure candidate data with detailed policy positions
- Add policy category tags and stance indicators
- Include more comprehensive candidate information

### Phase 2: Improve User Interface
- Add structured input options alongside free text
- Implement importance weighting sliders
- Create policy category sections

### Phase 3: Enhanced Algorithm
- Implement weighted scoring system
- Add policy stance detection
- Create explanation generation

### Phase 4: Results Enhancement
- Improve results visualization
- Add detailed match explanations
- Include candidate comparison features

## Technical Implementation Notes
- Maintain backward compatibility with existing simple text input
- Use JavaScript for client-side processing (no backend required)
- Implement progressive enhancement for better user experience
- Add data validation and error handling

