export default class Questions {

    constructor(getQuestionsForResult = []) {
        this.getQuestionsForResult = getQuestionsForResult
    }

    getQuestions() {
        const questionsQuantity = document.getElementById("questions-number").value;
        const questionsCategory = document.getElementById("category").value;
        const questionsDificulty = document.getElementById("difficulty").value;
        const questionsType = document.getElementById("type").value;
        switch (true) {
            case questionsCategory === "all" && questionsDificulty === "all" && questionsType === "all":
                fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}`)
                    .then((response) => response.json())
                    .then((data) => this.printCardsQuestions(data.results));
                break;
            case questionsCategory === "all" && questionsDificulty === "all":
                fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&type=${questionsType}`)
                    .then((response) => response.json())
                    .then((data) => this.printCardsQuestions(data.results));
                break;
            case questionsCategory === "all" && questionsType === "all":
                fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&difficulty=${questionsDificulty}`)
                    .then((response) => response.json())
                    .then((data) => this.printCardsQuestions(data.results));
                break;
            case questionsDificulty === "all" && questionsType === "all":
                fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${questionsCategory}`)
                    .then((response) => response.json())
                    .then((data) => this.printCardsQuestions(data.results));
                break;
            case questionsCategory === "all":
                fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&difficulty=${questionsDificulty}&type=${questionsType}`)
                    .then((response) => response.json())
                    .then((data) => this.printCardsQuestions(data.results));
                break;
            case questionsDificulty === "all":
                fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${questionsCategory}&type=${questionsType}`)
                    .then((response) => response.json())
                    .then((data) => this.printCardsQuestions(data.results));
                break;
            case questionsType === "all":
                fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${questionsCategory}&difficulty=${questionsDificulty}`)
                    .then((response) => response.json())
                    .then((data) => this.printCardsQuestions(data.results));
                break;
            default:
                fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${questionsCategory}&difficulty=${questionsDificulty}&type=${questionsType}`)
                    .then((response) => response.json())
                    .then((data) => this.printCardsQuestions(data.results));
        }
    }

    printCardsQuestions(questions) {
        this.getQuestionsForResult = questions
        console.log(this.getQuestionsForResult)
        const container = document.getElementById("container");
        container.innerHTML = "";
        questions.forEach((question, index) => {
            question.id = index;
            const card = this.returnCard(question);
            container.innerHTML += card;
        });
        const button = document.getElementById("button-results");
        button.classList.toggle("d-inline-block")
    }
    returnAnswersHTML(correct, incorrects, ids) {
        incorrects.push(correct);
        let incorrectHTML = "";
        for (let i = 0; i < incorrects.length; i++) {
            let al = Math.floor(Math.random() * incorrects.length);
            incorrectHTML += `<div class="form-check">
                                    <input class="form-check-input" type="radio" name="answer ${ids}" id="${ids}-${i}" value="${incorrects[i]}">
                                    <label class="form-check-label" for="${ids}-${i}">
                                    ${incorrects[i]}
                                    </label>
                                </div>`;
    
            
        }
        return incorrectHTML;
    }
    returnCard(x) {
        const card = `<div class="card mb-5">
                        <div class="card-body">
                        <h4 class="card-title">${x.category}</h4>
                        <h5 class="card-subtitle mb-2 text-muted">${x.question}</h5>
                        <form name="formulario" id="answer ${x.id}" action="" method="POST">
                        ${this.returnAnswersHTML(
                                        x.correct_answer,
                                        x.incorrect_answers,
                                        x.id
                                    )}
                            </form>   
                        </div>
                    </div>`;
        return card;
    }
}