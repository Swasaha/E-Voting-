// Initialize votes from local storage or set default values
let votes = JSON.parse(localStorage.getItem("votes")) || { "Swasthika": 0, "Khushal": 0 };

// Function to vote
function vote(candidate) {
    votes[candidate] += 1;
    localStorage.setItem("votes", JSON.stringify(votes));
    updateResults();
}

// Function to update results dynamically
function updateResults() {
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p><strong>Swasthika:</strong> ${votes["Swasthika"]} votes</p>
        <p><strong>Khushal:</strong> ${votes["Khushal"]} votes</p>
    `;
}

// Function to reset votes
function resetVotes() {
    votes = { "Swasthika": 0, "Khushal": 0 };
    localStorage.setItem("votes", JSON.stringify(votes));
    updateResults();
}

// Load the initial results when the page loads
document.addEventListener("DOMContentLoaded", updateResults);
