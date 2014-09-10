var radamsa = require('./');
var assert = require('assert');

describe('basic test', function(){
  it('radamsa filename', function(){

    var ret = radamsa.run('package.json');
    assert(typeof ret === 'string');

  })


  it('radamsa from buffer', function(done){
    this.timeout(4000);

    var ret = radamsa.fromBuffer(new Buffer([0x01, 0x02, 0x03, 0x04]));
    ret.on('data', function(data){
      assert(data instanceof Buffer);
      done();
    });


  })
})
