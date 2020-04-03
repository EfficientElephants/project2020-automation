exports.config = {
  user: process.env.LT_USERNAME || '',
  key: process.env.LT_ACCESS_KEY || '',
  server: 'hub.lambdatest.com',

  capabilities: [{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: '70.0',
    name: "single_test",
    build: "cucumber-js-LambdaTest-single",
    'video': true,
    'network': true,
    'console': true,
    'visual': true,
  }]
}
