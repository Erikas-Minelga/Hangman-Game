export async function getWord() {
    try {
        const response = await fetch('https://random-word-api.herokuapp.com/word');
        const data = await response.json();
        const word = data[0];
        return word.toUpperCase();
    }
    catch (error) {
        return error;
    }
}
export async function getDefinition(word) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'KEY',
            'X-RapidAPI-Host': 'HOST'
        }    //Key and Host ommitted as they are sensitive data
    };
    const response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`, options);
    const data = await response.json();
    return data["definitions"][0].definition;
}
//# sourceMappingURL=GetWord.js.map
