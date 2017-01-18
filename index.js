var execSync = require('child_process').execSync;
var xstream = require('node-xstream');
var events = require('events');
var sh = function(){
  return execSync([].slice.apply(arguments), {'stdio': 'pipe'}).toString();
}
// Check whether Radamsa exist

var version = sh('radamsa -V');
if(version.indexOf('Radamsa') !== 0){
  pleaseInstall();
}



function pleaseInstall(){
  console.log('Seems like we couldn\'t detect Radamsa in this system.');
  console.log('Please install the radamsa command line tool from https://code.google.com/p/ouspg/wiki/Radamsa');
  process.exit(1);
}


exports.run = function(){
  var args = [].slice.apply(arguments);
  var command = 'radamsa';
  args.forEach(function(x){
    command += " \"" + x + "\"";
  });
return sh(command); 
}

// Pipe the buffer data into stdin and then to radamsa
// echo '<Buffer Data>' | radamsa
exports.fromBuffer = function(buf){
  var spawn = require('child_process').spawn;
  var radamsa = spawn('radamsa', [], {'stdio': 'pipe'});
  buf = new Buffer(buf);
  radamsa.stdin.write(buf);
  radamsa.stdin.end();
return radamsa.stdout;
}
