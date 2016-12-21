require(['../src/loading_img'],function(mod_load){
    //$(document).on('mobileinit',function(){
    //    $.mobile.page.prototype.options.keepNative = "select, input.foo, textarea.bar";
    //    $.mobile.autoInitializePage = false;
    //});

    //$(document).ready(function(){
    //    console.log(2222)
    //    console.log($(".mod-dialog-loading"));
    //    Hammer($(".mod-dialog-loading")).on("tap", function(event) {
    //        console.log('左滑');
    //    });
    //    //Hammer($("body")).on("swiperight", function(event) {
    //    //    console.log('右滑')
    //    //});
    //    //initFont();
    //});
    //$(document).on( "mobileinit", function() {
    //    //apply overrides here
    //    $.mobile.autoInitializePage = false;
    //    console.log(444)
    //});
    $(document).ready(function(){
        console.log(11121212);
        $('body').on('tap',function(){
            console.log(11);
        });

    });

//$(window).on('resize',function(){
//    initFont();
//});
//function initFont(){
//    document.documentElement.style.fontSize =20 /320 * document.documentElement.clientWidth + 'px';
//}
});





