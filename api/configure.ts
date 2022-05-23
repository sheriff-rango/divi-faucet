import * as morgan from 'morgan';

/*
* The port to listen for requests on. Defaults to 3001.
*/
export const PORT = process.env.PORT || 3001;

/*
* Configures the express API for logging and CORS.
* @param app - The express application
*/
export function Configure(app) {
    app.use(morgan('tiny'));

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', req.get('origin'));
        next();
    });
}
