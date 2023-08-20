export class Renderer {
    constructor() {
        this.letterButtons = document.querySelector(".button-wrap");
        this.wordWrap = document.querySelector(".word-wrap");
        this.gameEndDialog = document.querySelector("dialog");
        this.resultHeading = document.querySelector("#heading");
        this.wordSpan = document.querySelector("#word");
        this.playAgainBtn = document.querySelector("play-again");
    }
    static Instance() {
        if (this._instance == null)
            this._instance = new Renderer();
        return this._instance;
    }
    init() {
        const buttonsFrag = document.createDocumentFragment();
        if (buttonsFrag != null) {
            for (let i = 0; i < 26; i++) {
                const letter = String.fromCharCode(65 + i);
                const letterBtn = document.createElement("button");
                letterBtn.id = letter;
                letterBtn.innerText = letter;
                buttonsFrag.appendChild(letterBtn);
            }
            this.letterButtons.appendChild(buttonsFrag);
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
    renderLifeLoss() {
        console.log("Lost a life");
    }
    cleanUpWord(wordArr) {
        let word = "";
        wordArr.forEach(letter => {
            word += letter;
        });
        return word;
    }
    renderGameWon(word) {
        this.gameEndDialog.showModal();
        this.resultHeading.innerText = "You win";
        this.wordSpan.innerText = this.cleanUpWord(word);
    }
    renderGameOver(word) {
        this.gameEndDialog.showModal();
        this.resultHeading.innerText = "Game Over";
        this.wordSpan.innerText = this.cleanUpWord(word);
    }
}
//# sourceMappingURL=Renderer.js.map