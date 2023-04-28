// UA
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-98623245-5', { 'allowAnchor': true });
ga('send', 'pageview', { 'page': location.pathname + location.search + location.hash });

//GMT
var headerstr="<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':"+
    "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],"+
    "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src="+
    "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);"+
    "})(window,document,'script','dataLayer','GTM-WFNBSLH');</script>";

$(document.head).append(headerstr);

var childnode=$(document.body)[0].getElementsByTagName("script")[0];
var strinnertext='<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WFNBSLH" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
var node=document.createElement("noscript");
node.innerText=strinnertext;
childnode.parentNode.insertBefore(node,childnode);
