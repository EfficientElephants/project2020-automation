exports.config = {
  user: process.env.LT_USERNAME || 'rublan01',
  key: process.env.LT_ACCESS_KEY || 'LWuvBTtphjn18g7z9xVgKhw2Ot1DLIHzyxLyUqimFcgdnmaWQw',
  server: 'hub.lambdatest.com',

  capabilities: [{
    browserName: process.env.LT_BROWSER_NAME,
    platform: process.env.LT_PLATFORM,
    version: process.env.LT_BROWSER_VERSION,
    name: "single_test",
    build: "cucumber-js-LambdaTest-single",
    'video': true,
    'network': true,
    'console': true,
    'visual': true,
  }]
}
