import MD5 from "crypto-js/md5"

let API_URL = "https://gateway.marvel.com/";
console.log(API_URL)

const getHash = (ts, secretKey, publicKey) => {
    return MD5(ts + secretKey + publicKey).toString();
};

const fetchHeroes = async (value) => {
    let baseUrl = `${API_URL}/v1/public/characters`;

    let ts = Date.now().toString();
    let apiKey = "fe09277a89c64fa3d5db7f0f716bb8c0";
    let privateKey = "7d5dee62c69dd2fd3052e2856e166dc0c43e3e9a";
    let hash = getHash(ts, privateKey, apiKey);

    let url= `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.data.results);
        return data.data.results;
    } catch (err) {
        console.error(err);
        return;
    }

}

const fetchHero = async (id) => {
    let baseUrl = `${API_URL}/v1/public/characters/${id}`;

    let ts = Date.now().toString();
    let apiKey = "fe09277a89c64fa3d5db7f0f716bb8c0";
    let privateKey = "7d5dee62c69dd2fd3052e2856e166dc0c43e3e9a";
    let hash = getHash(ts, privateKey, apiKey);

    let url= `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.data.results);
        return data.data.results;
    } catch (err) {
        console.error(err);
        return;
    }

}

export {fetchHeroes, fetchHero}