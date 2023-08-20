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
            'X-RapidAPI-Key': 'c6dc6bfb59msh7168572e9f366cdp15f930jsn5f5ca1397bfb',
		    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    }
    const response : Response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`,options);
    const data : JSON = await response.json();

    return data["definitions"][0].definition;
}