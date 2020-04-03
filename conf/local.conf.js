exports.config = {
  user: process.env.LT_USERNAME || 'rublan01',
  key: process.env.LT_ACCESS_KEY || 'LWuvBTtphjn18g7z9xVgKhw2Ot1DLIHzyxLyUqimFcgdnmaWQw',
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
