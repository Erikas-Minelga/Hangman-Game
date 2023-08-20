export async function getWord() : Promise<String>
{
    try
    {
        const response : Response = await fetch('https://random-word-api.herokuapp.com/word');
        const data : String = await response.json();
        const word : String = data[0];
    
        return word.toUpperCase();
    }
    catch(error)
    {
        return error;
    }
}

export async function getDefinition(word:string) : Promise<String>
{
    const options = {
        method: 'GET',
        headers: {	
            'X-RapidAPI-Key': 'KEY',
		    'X-RapidAPI-Host': 'HOST'
        }	//Key and Host ommitted as they are sensitive data
    }
    const response : Response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`,options);
    const data : JSON = await response.json();

    return data["definitions"][0].definition;
}
