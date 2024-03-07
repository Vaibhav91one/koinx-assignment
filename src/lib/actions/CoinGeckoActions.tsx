import axios from "axios";

export async function GetPrice() {
    const options = {
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/simple/price',
        params: {
            ids: 'bitcoin',
            vs_currencies: 'inr,usd',
            include_24hr_change: 'true'
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_GECKO_KEY,
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export async function GetTrending() {
    const url = 'https://api.coingecko.com/api/v3/search/trending';
    const options = {
        method: 'GET',
        url: url,
        params: {
            ids: 'bitcoin',
            vs_currencies: 'inr,usd',
            include_24hr_change: 'true'
        },
    }

    try {
        const response = await axios.request(options);
        console.log(response.data.coins[0].item.data);
    } catch (error) {
        console.error(error);
    }

}