import * as superagent from 'superagent';

/*
* The API URL to query information from
*/
export const API_URL = process.env.API_URL || 'https://faucet-api.diviproject.org'; // 'http://localhost:3001'

/*
* The supply API call.
* @returns the supply available on the faucet
*/
export async function Supply() {
    try {
        const payload = await superagent.get(`${API_URL}/supply`);
        return payload.body.supply;
    } catch (error) {
        if (error.response) {
            return error.response.body.error;
        } else {
            return '~';
        }
    }
}

/*
* The blocks API call.
* @returns the amount of blocks mined on the network
*/
export async function Blocks() {
    try {
        const payload = await superagent.get(`${API_URL}/blocks`);
        return payload.body.blocks;
    } catch (error) {
        if (error.response) {
            return error.response.body.error;
        } else {
            return '~';
        }
    }
}

/*
* The print API call.
* @returns whether or not Divi was printed to an address
*/
export async function Print(address: string, amount: number) {
    try {
        const payload = await superagent.get(`${API_URL}/print?address=${address}&amount=${amount}`);
        return true;
    } catch (error) {
        if (error.response) {
            return error.response.body.error;
        } else {
            return 'Something went wrong';
        }
    }
}
