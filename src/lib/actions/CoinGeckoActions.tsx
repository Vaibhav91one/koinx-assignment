import axios from "axios";

export async function GetPrice() {
    const options = {
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/simple/price',
        params: {
            ids: 'bitcoin',
            vs_currencies: 'inr,usd',
            include_24hr_change: 'true'
        },
    };

    try {
        const response = await axios.request(options);
        return response.data
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
        return response.data.coins
    } catch (error) {
        console.error(error);
    }

}