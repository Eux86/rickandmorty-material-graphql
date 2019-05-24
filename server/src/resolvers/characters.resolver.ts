const axios = require('axios');

const getCharacters = async () => {
    try {
        return await axios.get('https://rickandmortyapi.com/api/character/');
    } catch (error) {
        console.error(error);
    }
}

const charactersResolver = {
	Query: {
		characters: async () => {
            const result =  await getCharacters();
            console.log(result.data.results);
            return result.data.results;
		}
	}
};

export default charactersResolver;