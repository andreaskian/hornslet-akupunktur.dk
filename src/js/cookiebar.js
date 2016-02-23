var cookiebar = document.getElementById('cookiebar'),
    cookiebarBtn = document.getElementById('cookiebarBtn'),
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

if (getCookie('iLikeCookies') === null) {
    cookiebar.style.display = 'block';
}

cookiebar.addEventListener('submit', function(event) {
    event.preventDefault();
    return false;
});

cookiebarBtn.addEventListener('click', function (event) {
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

    cookiebar.style.display = 'none';
});