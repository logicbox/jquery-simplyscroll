var jQuery = require('jquery');
require('./jquery.simplyscroll');

(function($) {
  $(function() {
    $("#scroller").simplyScroll({
      speed: 1
    });
  });
})(jQuery);