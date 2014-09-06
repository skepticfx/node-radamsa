var sh = require('execsync');


// Check whether Radamsa exist

var version = sh('radamsa -V');
if(version.indexOf('Radamsa') !== 0){
  pleaseInstall();
}



function pleaseInstall(){
  console.log('Seems like we couldn\'t detect Radamsa on this computer.');
  console.log('Please install the radamsa command line tool from https://code.google.com/p/ouspg/wiki/Radamsa');
  process.exit(1);
}


exports.run = function(){
  var args = [].slice.apply(arguments);
  var command = 'radamsa';
  args.forEach(function(x){
    command += " "+ x;
  });
  var ret = sh(command);
return ret;
}
