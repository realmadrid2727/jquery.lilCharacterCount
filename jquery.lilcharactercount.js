/*
 * Copyright? Nope!
 * Author: Orlando de Frias
 * https://github.com/realmadrid2727/jquery.lilCharacterCount
 * Version: 2.4.0
 * Date: September 24, 2013
 */
 
(function($) {
  $.fn.lilCharacterCount = function(options) {
    
    var defaults = {	
      limit: 140,                        // Character limit
      warning: 100,                      // Warn when close to limit, leave at 0 for no warning
      allowExceed: true,                // If true, it allows typing past limit
      counterClass: "character-count",  // Class for the counter
      defaultClass: "bg-info",          // Class for when all is fine
      warningClass: "bg-warning",       // Class for warning of impending limit
      dangerClass: "bg-danger"          // Class for limit
    };
    
    var options = $.extend(defaults, options); 
    var supportOnInput = 'oninput' in document.createElement('input');
    var $this = $(this);
    var $counter = $("<span class=\"" + options.counterClass + " " +
          options.defaultClass + "\">" + options.limit + "</span>");
    $counter.insertAfter($this);
    
    $this.on(supportOnInput ? 'input' : 'keyup', function() {
      var charCount = ($this.val().length > options.limit &&
        options.allowExceed == false) ? options.limit : $this.val().length;
      
      $counter.text(options.limit - charCount);
      
      if (charCount >= options.limit) {
        toggleClass(options.dangerClass);
        if (options.allowExceed == false) {
          $this.val($this.val().substring(0, options.limit));
        }
        return;
      } else if (options.warning > 0 && charCount >= options.warning) {
        toggleClass(options.warningClass);
      } else {
        toggleClass(options.defaultClass);
      }
    });
    
    toggleClass = function(klass) {
      switch(klass) {
        case options.defaultClass:
          $counter.addClass(options.defaultClass);
          $counter.removeClass(options.warningClass + " " + options.dangerClass);
          break;
        case options.warningClass:
          $counter.addClass(options.warningClass);
          $counter.removeClass(options.dangerClass + " " + options.defaultClass);
          break;
        case options.dangerClass:
          $counter.addClass(options.dangerClass);
          $counter.removeClass(options.warningClass + " " + options.defaultClass);
          break;
      }
    }
  }
}(jQuery));