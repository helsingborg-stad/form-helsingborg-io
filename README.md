# form-helsingborg-io
Repository for requesting forms with questions ans logics.

This microservice is built on nodejs and express.

## Development
Prerequisite: local MySQL server running

1. Clone repository
2. Install dependencies with npm install
3. run ```npm run setup``` (this will create .env and .env.test files)
4. Change the variabels in .env to match your development enviorment
````
   PORT=3010 #(or any other port you prefer)
   LOG_LEVEL=trace #(trace, debug, info, warn, error, fatal, silent)
   MYSQL_CONNECTION_STRING=mysql://usr:pwd@host:port/dbname #(enter your local db credentials)
   MYSQL_CONNECTION_LIMIT=10
````
4. run ```knex migrate:latest``` (this will migrate your mysql schemas to the latest version)
4. run ```knex seed:run``` (this will populate your mysql databse with mock data)
5. Run project with ```npm run dev```

## Documentation

Documentation for apis built from this boilerplate should be split into two sections. Project related information should be written in the README-file for the repository, and specific instructions for calling the api should be documented with Swagger which is included in the project by default.

### Tests

The project uses [mocha](https://mochajs.org/) + [chai](https://www.chaijs.com/) for testing.

Running tests:

1. Create .env.test-file in the root folder with same settings as the regular .env but with a different port.
2. Run the command ```npm run test```

To run the tests on code-changes, use ```npm run test:watch```

All files following the *.test.js-syntax will be included.

## Deployment
TODO

## Docker

This app can be built using [docker](https://www.docker.com/). To do so, simply navigate to the root of the project and run:

```
docker build . -t [tag] && \
docker run -d \
-p [host-port]:[server-port] \
-e PORT=[server-port] \
-e SERVER_KEY=./assets/certificates/server.key \
-e SERVER_CERT=./assets/certificates/server.cert \
[tag]
```

Further, you can thus use [docker-compose](https://docs.docker.com/compose/) to orchestrate containers created from this repository (and other dockerized apps). When developing, we use [this](https://github.com/helsingborg-stad/labs-docker-compose) specific docker-compose file.
