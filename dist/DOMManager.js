export class DOMManager {
    constructor() {
        this.letterButtons = document.querySelector(".button-wrap");
        this.wordWrap = document.querySelector(".word-wrap");
        this.gameEndDialog = document.querySelector(".game-end");
        this.resultHeading = this.gameEndDialog.querySelector("#heading");
        this.wordSpan = this.gameEndDialog.querySelector("#word");
        this.playAgainBtn = this.gameEndDialog.querySelector("#play-again");
        this.lifeCards = document.querySelectorAll(".life-card-container > div");
        this.wordDef = document.querySelector("#definition");
    }
    static Instance() {
        if (this._instance == null)
            this._instance = new DOMManager();
        return this._instance;
    }
    init(onLetterClick, replay) {
        const buttonsFrag = document.createDocumentFragment();
        if (buttonsFrag != null) {
            for (let i = 0; i < 26; i++) {
                const letter = String.fromCharCode(65 + i);
                const letterBtn = document.createElement("button");
                letterBtn.id = letter;
                letterBtn.innerText = letter;
                letterBtn.addEventListener("click", e => {
                    e.preventDefault();
                    onLetterClick((letterBtn.id));
                    this.disableButton(letterBtn);
                });
                buttonsFrag.appendChild(letterBtn);
            }
            this.letterButtons.appendChild(buttonsFrag);
            this.playAgainBtn.addEventListener("click", e => {
                e.preventDefault();
                replay();
                this.gameEndDialog.close();
            });
            return true;
        }
        return false;
    }
    renderWord(word) {
        this.wordWrap.innerText = word.toString();
    }
    disableButton(button) {
        button.disabled = true;
    }
    resetAllElems() {
        this.letterButtons.childNodes.forEach(button => {
            button.disabled = false;
        });
        this.lifeCards.forEach(card => { card.classList.remove("life-lost"); });
    }
    renderLifeLoss(lives) {
        this.lifeCards[(6 - lives) - 1].classList.add("life-lost");
    }
    //Remove ','s from the word, which is stored in an array of characters. Done purely for visual aesthetics
    cleanUpWord(wordArr) {
        let word = "";
        wordArr.forEach(letter => {
            word += letter;
        });
        return word;
    }
    renderGameWon(word, definition) {
        this.gameEndDialog.showModal();
        this.resultHeading.innerText = "You win";
        this.wordSpan.innerText = this.cleanUpWord(word);
        this.wordDef.innerText = definition;
    }
    renderGameOver(word, definition) {
        this.gameEndDialog.showModal();
        this.resultHeading.innerText = "Game Over";
        this.wordSpan.innerText = this.cleanUpWord(word);
        this.wordDef.innerText = definition;
    }
}
//# sourceMappingURL=DOMManager.js.map