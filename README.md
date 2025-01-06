# Express.js: Unhandled Error on Empty POST Request Body

This repository demonstrates a common error in Express.js applications where an unhandled error occurs when an empty JSON payload is sent to a POST request.  The code attempts to access properties of `req.body` before checking if it's defined, leading to a crash.

The `bug.js` file shows the problematic code.  The `bugSolution.js` file provides a corrected version that includes proper error handling.

## How to Reproduce

1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install` to install the required dependencies.
4. Run `node bug.js`.
5. Send a POST request to `http://localhost:3000/user` with an empty JSON body (e.g., using curl or Postman).

## Solution

The solution involves checking if `req.body` is defined and contains the expected properties before accessing them. This prevents the application from crashing.