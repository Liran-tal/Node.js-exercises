import axios from 'axios';
import got from 'got';

// const getAxios = async () => {
// 	try {	
// 		const  { data }  = await axios.get("https://dog.ceo/api/breeds/image/random")
// 		console.log(data.message);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

const getGot = async () => {
	try {	
		const  { body }  = await got.get("https://dog.ceo/api/breeds/image/random")
		console.log(JSON.parse(body).message);
		// console.log(await got.get("https://dog.ceo/api/breeds/image/random"));
	} catch (error) {
		console.error(error);
	}
}

// getAxios();
getGot();