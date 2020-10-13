function getQuestions() {
    const questionsQuantity = document.getElementById('questions-number').value
    fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}`)
        .then(response => response.json())
        .then(data => printCards(data.results))
}