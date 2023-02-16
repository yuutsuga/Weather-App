const KEY = 'b756d510cd224fd8a4f40502231402';

const fetchData = async(city) => {

const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

const fetchResponse = await fetch(url);
const data = await fetchResponse.json();

return data
};

export default fetchData;