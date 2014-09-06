var radamsa = require('./');
var assert = require('assert');

describe('basic test', function(){
  it('radamsa package.json', function(){

    var ret = radamsa.run('package.json');
    assert(typeof ret === 'string');

  })
})
