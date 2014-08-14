// ------------------------------
// Google Analytics
// ------------------------------
/* jshint ignore:start */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-53837121-1', 'auto');
ga('send', 'pageview');
/* jshint ignore:end */
// ------------------------------
// Site Init
// ------------------------------
$(window).load(function() {

  $('.flexslider').flexslider({
    directionNav: false
  });

});

(function($){

  var cookiebar    = $('#cookiebar'),
      cookiebarBtn = $('#cookiebarBtn'),
      domainParts,
      domain;

  function getCookie(cname) {
    var name = cname + "=",
        ca   = document.cookie.split(';');

    for(var i=0; i<ca.length; i++) {

      var c = ca[i].trim();

      if ( c.indexOf(name) === 0 ) {
        return c.substring(name.length,c.length);
      }

    }

    return null;
  }

  var cookiesTest = getCookie('iLikeCookies');
  if (cookiesTest === null) {

    cookiebar.show();

  }

  cookiebar.submit(function(e) {

    e.preventDefault();
    return false;

  });

  cookiebarBtn.click(function() {

    var d = new Date();
    d.setFullYear(d.getFullYear() + 1);

    domainParts = document.location.hostname.split('.');
    domain = domainParts.pop();

    if(domainParts.length > 0){
      domain = domainParts.pop() + '.' + domain;
    }
    var cname = 'iLikeCookies',
        cpayload = 'CookiesAreAwesome',
        cexpires = 'cexpires=' + d.toGMTString(),
        cdomain = 'cdomain=' + cdomain;

    document.cookie = cname + '=' + cpayload + '; ' + cexpires + '; ' + cdomain;

    cookiebar.hide();

  });
})(jQuery);
