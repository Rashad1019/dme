// script.js (Version 3.0 - The Complete Dossier)

document.addEventListener('DOMContentLoaded', () => {

    const analyzeButton = document.getElementById('analyze-button');
    const userInput = document.getElementById('user-priorities');
    const resultsContainer = document.getElementById('results-container');
    const loadingSpinner = document.getElementById('loading-spinner');

    analyzeButton.addEventListener('click', () => {
        const prioritiesText = userInput.value.toLowerCase();
        if (prioritiesText.trim() === "") {
            alert("Please tell us what's important to you!");
            return;
        }
        loadingSpinner.classList.remove('hidden');
        resultsContainer.innerHTML = '';
        setTimeout(() => {
            calculateScores(prioritiesText);
            displayResults();
            loadingSpinner.classList.add('hidden');
        }, 2000);
    });

    function calculateScores(prioritiesText) {
        const userKeywords = prioritiesText.split(' ').filter(word => word.length > 3);
        candidates.forEach(candidate => {
            let matchCount = 0;
            let candidatePlatformText = "";
            for (const issue in candidate.platforms) {
                candidatePlatformText += candidate.platforms[issue].toLowerCase() + " ";
            }
            userKeywords.forEach(keyword => {
                if (candidatePlatformText.includes(keyword)) {
                    matchCount++;
                }
            });
            candidate.score = (userKeywords.length > 0) ? (matchCount / userKeywords.length) * 100 : 0;
        });
    }

    // --- THIS IS THE UPGRADED DISPLAY FUNCTION ---
    function displayResults() {
        const sortedCandidates = candidates.sort((a, b) => a.score - b.score);
        const resultsTitle = document.createElement('h2');
        resultsTitle.textContent = "Your Candidate Alignment (Lowest to Highest)";
        resultsTitle.style.textAlign = "center";
        resultsTitle.style.marginBottom = "20px";
        resultsContainer.appendChild(resultsTitle);

        sortedCandidates.forEach((candidate, index) => {
            const resultWrapper = document.createElement('div');
            const resultDiv = document.createElement('div');
            resultDiv.className = 'candidate-result';
            const percentage = Math.round(candidate.score);

            resultDiv.innerHTML = `
                <div class="candidate-name" title="${candidate.bio}">${candidate.name}</div>
                <div class="percentage-bar">
                    <div class="bar-fill" style="width: ${percentage}%;"></div>
                </div>
                <div class="percentage-text">${percentage}%</div>
                <button class="dossier-button" data-target="dossier-${index}">Show Dossier</button>
            `;
            
            // Create the hidden dossier content
            const dossierDiv = document.createElement('div');
            dossierDiv.id = `dossier-${index}`;
            dossierDiv.className = 'dossier-content';
            dossierDiv.innerHTML = `
                <h4>Endorsements:</h4>
                <ul>${candidate.endorsements.map(e => `<li>${e}</li>`).join('')}</ul>
                <h4 style="color: #dc3545; margin-top: 10px;">Potential Negatives:</h4>
                <ul>${candidate.potentialNegatives.map(n => `<li>${n}</li>`).join('')}</ul>
            `;

            resultWrapper.appendChild(resultDiv);
            resultWrapper.appendChild(dossierDiv);
            resultsContainer.appendChild(resultWrapper);
        });

        // Add event listeners for all the new dossier buttons
        document.querySelectorAll('.dossier-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const targetId = e.target.getAttribute('data-target');
                const dossierContent = document.getElementById(targetId);
                const isHidden = dossierContent.style.display === 'none' || dossierContent.style.display === '';
                
                dossierContent.style.display = isHidden ? 'block' : 'none';
                e.target.textContent = isHidden ? 'Hide Dossier' : 'Show Dossier';
            });
        });
    }
});