    (function() {
      'use strict';
      var setLang = function(lang) {
        i18next.use(i18nextXHRBackend).init({
          lng: lang
        }, function(err, t) {
          //i18nextJquery.init(i18next, $);
          jqueryI18next.init(i18next, $);
          $("[data-i18n]").localize();
        });
      }; 

      // default
      setLang("en");

      // pull down
      $('#menu-loc li').hover(function(){
          $("ul:not(:animated)", this).slideDown();
      }, function(){
          $("ul.child",this).slideUp();
      });

      // language
      $('.lang').click(function(){
        setLang(this.id);
      });
    }());
