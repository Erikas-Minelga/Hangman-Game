# Hangman-Game

## About

This is a classic Hangman game made using HTML5, CSS3 and TypeScript. The goal of this game is to correctly guess a random word retrieved from the Random Word API, by guessing it letter by letter. If a letter is guessed correctly, the position(s) where the letter occurrs are revealed, giving further clues as to what the word may be. Incorrect guesses of the letter will result in a life loss. Player has 6 lives to guess the word correctly. At the end of each round, the word is revealed as well as its definition, if one can be found on the WordsAPI. Player can replay this game as many times as desired.

## Notes

WordsAPI requires a secret key in order to be used. The secret key has been ommitted from the code in the main branch as it is sensitive data.

## Credits

Random Word API: http://random-word-api.herokuapp.com/home

WordsAPI: https://www.wordsapi.com/
