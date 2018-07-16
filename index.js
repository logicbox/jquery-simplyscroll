var $ = require('jquery');
require('./jquery.simplyscroll');

var el = document.querySelector('#scroller');

$(el).simplyScroll({
  speed: 1
});

console.log($(el).data());