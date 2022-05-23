import * as express from 'express';

import {
    PORT,
    Configure,
} from './configure';

import {
    IndexRoute,
    SupplyRoute,
    BlocksRoute,
    PrintRoute,
} from './routes';

/*
* The express API application
*/
export const app = express();

Configure(app);

app.get('/', IndexRoute);
app.get(`/supply`, SupplyRoute);
app.get(`/blocks`, BlocksRoute);
app.get(`/print`, PrintRoute);

app.listen(PORT, () => console.log('Faucet API Running on port', PORT));
