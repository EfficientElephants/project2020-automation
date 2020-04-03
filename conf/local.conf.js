require('dotenv').config()

exports.config = {
  user: process.env.LT_USERNAME || 'USERNAME_HERE',
  key: process.env.LT_ACCESS_KEY || 'LT_ACCESS_KEY_HERE',
  server: 'hub.lambdatest.com',

  capabilities: [{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: '70.0',
    name: "local_test",
    build: "cucumber-js-LambdaTest",
    tunnel: 'true',
  }]
}
