import * as superagent from 'superagent';

/*
* The API URL to query RPC calls from.
*/
export const API_URL = process.env.API_URL || 'http://127.0.0.1:51475';

/*
* The supply RPC call. Which gets the total Divis in the faucet.
* @returns the amount of Divis available in the faucet.
*/
export async function Supply() {
    try {
        const payload = await superagent
            .post(`${API_URL}`)
            .set('Content-Type', 'application/json')
            .send({
                id: 'faucet',
                jsonrpc: '2.0',
                method: 'getwalletinfo',
                params: [],
            });

        return payload.body.result.balance;
    } catch (error) {
        return error;
    }
}

/*
* The blocks RPC call. Gets the total blocks mined on the network.
* @returns the amount of blocks that have been mined so far.
*/
export async function Blocks() {
    try {
        const payload = await superagent
            .post(`${API_URL}`)
            .set('Content-Type', 'application/json')
            .send({
                id: 'faucet',
                jsonrpc: '2.0',
                method: 'getblockcount',
                params: [],
            });

        return payload.body.result;
    } catch (error) {
        return error;
    }
}

/*
* The print RPC call sends funds to a specified address.
* @returns whether or not blocks were printed to an address
*/
export async function Print(address, amount) {
    try {
        const payload = await superagent
            .post(`${API_URL}`)
            .set('Content-Type', 'application/json')
            .send({
                id: 'faucet',
                jsonrpc: '2.0',
                method: 'sendtoaddress',
                params: [address, amount],
            });

        return true;
    } catch (error) {
        return error;
    }
}
