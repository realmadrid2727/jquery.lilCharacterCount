/*
 * Copyright? Nope!
 * Author: Orlando de Frias
 * https://github.com/realmadrid2727/jquery.lilCharacterCount
 * Version: 2.4.0
 * Date: September 24, 2013
 */
 
(function($) {
  $.fn.lilCharacterCount = function() {
    var supportOnInput = 'oninput' in document.createElement('input');
    var $this = $(this);
    var maxLength = parseInt($this.attr('maxlength'));
    var $counter = $("<span class=\"character-count label bg-success\">" + maxLength + "</span>");
    $counter.insertAfter($this);
    
    $this.on(supportOnInput ? 'input' : 'keyup', function() {
      var charCount = $this.val().length;
      
      $counter.text(maxLength - charCount);
      if(maxLength <= charCount) {
        $counter.removeClass("bg-success");
        $counter.addClass("bg-danger");
      } else {
        $counter.removeClass("bg-danger");
        $counter.addClass("bg-success");
      }
    });
  }
}(jQuery));