window.onload = function () {
   var OriginTitile = document.title;
   var titleTime;
   document.addEventListener('visibilitychange', function () {
       if (document.hidden) {
           $('[rel="shortcut icon"]').attr('href', "/Content/Images/fail.ico");
           document.title = '别走呀(๑ŐдŐ)b！';
           clearTimeout(titleTime);
       }
       else {
           $('[rel="shortcut icon"]').attr('href', "/Content/Images/icon.png");
           document.title = '咦！回来啦(/≧▽≦/)！' + OriginTitile;
           titleTime = setTimeout(function () {
               document.title = OriginTitile;
           }, 2000);
       }
   });
}
