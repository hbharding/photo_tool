;(function (window, document, $) {


  $('#actions .button-group li').click(function() {
    $('#actions .button-group li').removeClass('selected');
    $(this).addClass('selected');

  });

}(this, document, jQuery));
