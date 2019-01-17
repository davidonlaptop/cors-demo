# CORS: Cross-Origin Resource Sharing

## How to use this repo to understand how CORS works?

There is 2 files:
- `server.js`: starts a webserver on port `1111` and another on port `9999`
	- port `9999` can serve AJAX requests AND `client.html`
	- port `1111` serves only `client.html`
- `client.html`: opens a webpage which performs an AJAX request to `PUT http://localhost:9999`

### Observe that same origin does not cause problems
1. Edit server.js and disable the cors filter, like this: `// apiApp.use(corsFilter);`
2. Run the server `node server.js`.
3. Point browser to http://localhost:9999/client.html
4. No CORS problems

### Observe CORS problem
1. Point browser to http://localhost:1111/client.html
2. CORS error!!!

### Fix CORS issue
1. Edit server.js and enable the cors filter
2. Try again - you might need to clear the browser's cache!!!


## Links

- [Manning Book - CORS in Action](https://www.manning.com/books/cors-in-action)
	- Example in this repo is based on [Chapter 3](https://livebook.manning.com/#!/book/cors-in-action/chapter-3/57)
- [Stack Overflow - Why CORS?](https://stackoverflow.com/a/41687744/359793)
- [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- Other webpack issues:
	- https://stackoverflow.com/questions/31602697/webpack-dev-server-cors-issue
	- https://stackoverflow.com/questions/45575713/webpack-dev-server-cors-error-with-credentials

