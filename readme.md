# Example Koa Application
This is a simple Koa application (middleware for Node.js). It demonstrates GET and POST requests, serving static content, and use of the Handlebars template engine.

## Requirements
Node.js >= 0.11.9 with Harmony.

## Usage
    npm install
    node --harmony app.js

## Example Requests
    GET /
    # This is stuff.

    GET /index.html
    # This is static.

    POST / (input: cool)
    # This is cool.