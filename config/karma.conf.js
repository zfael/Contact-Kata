basePath = '../';

files = [
  MOCHA,
  MOCHA_ADAPTER,
  'node_modules/chai/chai.js',
  'node_modules/sinon/lib/sinon.js',
  'node_modules/sinon/lib/sinon/assert.js',
  'node_modules/sinon/lib/sinon/collection.js',
  'node_modules/sinon/lib/sinon/match.js',
  'node_modules/sinon/lib/sinon/spy.js',
  'node_modules/sinon/lib/sinon/stub.js',
  'node_modules/sinon-chai/lib/sinon-chai.js',
  'node_modules/underscore/underscore.js',
  'public/app/bower_components/angular/angular.js',
  //'content/web/public/js/lib/jquery/jquery-1.9.1.js',
  //'content/web/public/angular-ui-bootstrap/ui-bootstrap-tpls-0.2.0.js',
  //'content/web/public/js/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  //'content/web/public/js/lib/*.js',
  'public/app/js/app.js',
  //'public/app/js/services/*.js',
  //'public/app/js/filters/*.js',
  //'public/app/js/directives/*.js',
  'public/app/js/controllers/*.js',
  //'test/mocks/mockServices.js',
  'test/unit/client/**/*.js'
];

autoWatch = true;
singleRun = false;

browsers = ['Chrome'];

//reporters=['junit'];
junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};