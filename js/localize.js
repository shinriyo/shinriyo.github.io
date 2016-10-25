(function () {
  'use strict';
  var setLang = function (lang) {
   var lns = ['en', 'kr', 'ja'];
   for(var index in lns) {
     var ln = lns[index];
     if(ln == lang) {
       $('#' + ln + '-prof').show();
       console.log(lang);
     } else {
       $('#' + ln + '-prof').hide();
     }
   }

    i18next.use(i18nextXHRBackend).init({
      lng: lang
    }, function (err, t) {
      jqueryI18next.init(i18next, $);
      $("[data-i18n]").localize();
    });
  };

  // default
  setLang("en");

  // pull down
  $('#menu-loc li').hover(function () {
    $("ul:not(:animated)", this).slideDown();
  }, function () {
    $("ul.child", this).slideUp();
  });

  // language
  $('.lang').click(function () {
    setLang(this.id);
  });
} ());
