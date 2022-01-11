const axios = require ('axios');

const getAxios = async () => {
	try {	
		const  { data }  = await axios.get("https://dog.ceo/api/breeds/image/random")
		console.log(data.message);
		// console.log(await axios.get("https://dog.ceo/api/breeds/image/random"));
	} catch (error) {
		console.error(error);
	}
}







getAxios();