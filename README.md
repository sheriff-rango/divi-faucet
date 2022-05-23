# Testnet Faucet

A simple web application that is used to distribute Divi to testnet wallets on the network.

## Running in Dev mode

1. run `yarn server`.

2. In a separate tab run `yarn start`.

**Please make sure environment variables are properly configured for the API.**

## Running the REST Server

### `yarn server`

Runs the REST API server on `process.env.port` or `http://localhost:3001`.

### `yarn server-test`

Runs the REST API unit tests.

### `yarn build-server`

Builds the dist for the REST API.

## Running the Web App

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn gh-pages`

Deploys the web app to Github pages.

## Configuring NGINX for the API

1. First install NGINX on the server and run the API server.

2. Create a file `/etc/nginx/conf.d/faucet.conf`.

3. Copy and Paste `nginx.conf` to the `faucet.conf`

4. Run `systemctl restart nginx`.

5. `ping` faucet-api.diviproject.org to confirm it works!
