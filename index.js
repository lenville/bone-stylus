var stylus = require('stylus');
var bone = require('bone');

module.exports = bone.wrapper( function (buffer, encoding, callback) {
  var option = this.option;
  option.filename = this.source;
  stylus.render(buffer.toString(), option, function(err, css){
    if (err) {
      console.log(err);
      callback(null, buffer);
    } else {
      callback(null, css);
    }
  });
});