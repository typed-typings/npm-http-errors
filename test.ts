/// <reference path="bundle.d.ts" />

import createError = require('http-errors')
import assert = require('assert')

const error = createError(404, 'Entry not found')

assert.equal(error.status, 404)
assert.equal(error.status, error.statusCode)
assert.ok(typeof error.stack === 'string')
assert.equal(error.name, 'NotFoundError')

const unauthorized = new createError.Unauthorized()

assert.equal(unauthorized.status, 401)