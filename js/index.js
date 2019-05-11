(function() {
  $('.menu-trigger').on('click', function(e) {
    $(this).toggleClass('ripple');
    e.preventDefault();
    return $('#circle-menu').toggleClass('open');
  });
}).call(this);