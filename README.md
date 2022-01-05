# Server Testing Module Project

## Instructions

### Minimum Viable Product

For this project you will create a RESTful API using Node and Express, containing endpoints to perform some CRUD operations on a resource of your choosing. Two or three endpoints are enough. Data should be persisted in a SQLite database.

## Requirements

- Write a minimum of ten tests using supertest.

## Checklist

Here is a checklist of tasks to help you put your project together:

- Generate a `.gitignore` file. 
    - `npx gitignore node`

- Install express, knex, sqlite3 as plain dependencies. 
    - also added dotenv, cors
        - investigate cors config

- Install jest, eslint, nodemon, supertest, cross-env as dev-dependencies.

- Configure jest and eslint using `npx <libname> --init`.
    - don't forget to add `"test":true` to eslint config

- Create a `knexfile.js` with "development" and "testing" configurations.
    - new knexfile.js - `(npx?) knex init`

- Create a `db-config.js` file that selects the correct configuration using the value of `process.env.NODE_ENV`.

- Create migration and seed files.
    - new migrate file - `npx knex migrate:make migration-name`
    - new seed file - `npx knex seed:make 00-seed-name` 

- Put together "start", "server", "rollback", "migrate" and "seed" scripts in your `package.json`.
    - also made `resetdb` script

- Create a "test" script in your `package.json` using cross-env to inject a `NODE_ENV` of "testing".
    - could add `--watchAll` flag to rerun on changes

- Create a basic express application with a few database access functions and a few endpoints.

- Test your endpoints manually using Postman, HTTPie or similar.
- Test your endpoints with supertest.
