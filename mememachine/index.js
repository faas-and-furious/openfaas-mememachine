// Copyright (c) Alex Ellis 2017. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

const getStdin = require('get-stdin')

const handler = require('./function/handler')

getStdin().then(val => {
  handler(val, (err, res) => {
    if (err) return console.error(err)

    if (isArray(res) || isObject(res)) return console.log(JSON.stringify(res))

    process.stdout.write(res)
  })
}).catch(console.error)

const isArray = a => !!a && a.constructor === Array

const isObject = a => !!a && a.constructor === Object
