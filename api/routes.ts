import { Supply, Blocks, Print } from './rpc.calls';

/*
* The index route which indicates the server is live.
*
* @param req - The express request object
* @param res - the express response object
* @returns the express response object
*/
export async function IndexRoute(req, res) {
    return res.status(200).send({
        status: 'OK',
        time: Number(new Date()),
    });
}

/*
* The supply route indicates how many coins the faucet has currently.
*
* @param req - The express request object
* @param res - the express response object
* @returns the express response object
*/
export async function SupplyRoute(req, res) {
    try {
        const supply = await Supply();
        return res.status(200).send({ supply });
    } catch (error) {
        return res.status(500).send(error);
    }
}

/*
* The blocks route indicates how many blocks hae been mined
*
* @param req - The express request object
* @param res - the express response object
* @returns the express response object
*/
export async function BlocksRoute(req, res) {
    try {
        const blocks = await Blocks();
        return res.status(200).send({ blocks });
    } catch (error) {
        return res.status(500).send(error);
    }
}

/*
* The print route prints Divi to a specified address
*
* @param req - The express request object
* @param res - the express response object
* @returns the express response object
*/
export async function PrintRoute(req, res) {
    try {
        if (req.query.address.length === 0) {
            return res.status(400).send({ error: 'Please provide a valid address' });
        }

        if (req.query.amount <= 0) {
            return res.status(400).send({ error: 'Please provide a valid amount' });
        }

        if (req.query.amount > 100) {
            return res.status(400).send({ error: 'Please provide an amount under 100' });
        }

        const success = await Print(req.query.address, req.query.amount);
        return res.status(200).send({ success });
    } catch (error) {
        return res.status(500).send(error);
    }
}
