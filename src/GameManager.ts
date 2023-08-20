import { DOMManager } from "./DOMManager.js";
import { getWord,getDefinition } from "./GetWord.js";

export class GameManager
{
    private static _instance : GameManager;
    lives : number;
    word : Array<string>;
    definition: String;
    guessedLetters : Array<string>;

    private constructor()
    {
        this.lives = 0;
        this.word = [];
        this.definition = "";
        this.guessedLetters = [];
    }

    static Instance() : GameManager
    {
        if(this._instance == null)
            this._instance = new GameManager();

        return this._instance;
    }

    private onLetterClick(letter : string) : void
    {
        let indexes : Array<Number> = [];
        for(let i : number = 0; i < this.word.length; i++)
        {
            if(this.word[i] == letter)
            {
                indexes.push(i);
            }
        }

        if(indexes.length > 0)
        {
            indexes.forEach(index => {
                this.guessedLetters[(<number>index)] = letter;
            });

            DOMManager.Instance().renderWord(this.guessedLetters);

            if(this.guessedLetters.toString() == this.word.toString())
                DOMManager.Instance().renderGameWon(this.word,this.definition);
        }
        else
        {
            this.lives--;

            DOMManager.Instance().renderLifeLoss(this.lives);

            if(this.lives == 0)
                DOMManager.Instance().renderGameOver(this.word,this.definition);
        }
    }

    init() : void
    {
        if(DOMManager.Instance().init(this.onLetterClick.bind(this),this.replay.bind(this)))
            this.newGame();
    }

    replay()
    {
        DOMManager.Instance().resetAllElems();
        this.newGame();
    }

    private cleanUpWord(wordArr : Array<string>) : string
    {
        let word : string = "";

        wordArr.forEach(letter => {
            word += letter;
        })

        return word;
    }

    private 

    newGame() : void
    {
        getWord().then(data => {

            this.lives = 6;
            this.word = [...data];
            this.guessedLetters = Array.from(Array(this.word.length));
            this.guessedLetters.fill("_");
            console.log(this.word);
            DOMManager.Instance().renderWord(this.guessedLetters);

            getDefinition(this.cleanUpWord(this.word)).then(data => {
                this.definition = data;
                console.log(this.definition); 
            },error => {
                this.definition = "definition of the word could not be found";
                console.log(this.definition);
            });
        });
    }
}