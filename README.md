# Verify JWT

A library to help parse a JSON web token.

[![Build Status](https://travis-ci.org/PengWang0316/VerifyJWT.svg?branch=master)](https://travis-ci.org/PengWang0316/VerifyJWT)
[![Coverage Status](https://coveralls.io/repos/github/PengWang0316/VerifyJWT/badge.svg?branch=master)](https://coveralls.io/github/PengWang0316/VerifyJWT?branch=master)

# Dependencies requirement

Due to this library is a wrapper for jsonwebtonken, the jsonwebtonken package is required.
Please check your package.json file.

- jsonwebtonken

# Installing

```
npm install --save @kevinwang0316/verify-jwt jsonwebtonken
```

# Usage

```javascript
import verifyJWT from '@kevinwang0316/verify-jwt';
// For NodeJS
// const verifyJWT = require(''@kevinwang0316/verify-jwt'');

// jwtInfo will be false if it fails the verification.
const jwtInfo = verifyJWT('jwtMessage', 'jwtSecret');
```


# Log Configuration

The [@kevinwang0316/log](https://www.npmjs.com/package/@kevinwang0316/log) library is using

If you want to change the defual log level (debug):

Add a log_level variable to your .env file.
Or if you are using Fass solution such as AWS Lambda, set up the log_level to your environment.

Log all level of information (debug, info, warn, error)
log_level=DEBUG

Log info and above levels of information (info, warn, error)
log_level=INFO

Log warn and above levels of information (warn, error)
log_level=WARN

Log just error level of information (error)
log_level=ERROR

# License

Log is licensed under MIT License - see the [License file](https://github.com/PengWang0316/VerifyJWT/blob/master/LICENSE).
