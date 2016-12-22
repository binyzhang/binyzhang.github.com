require(['./loading_img','subtitle','../lib/jquery-easing','./shakesnow'],function(mod_load,subtitle,easing,modshake){
    $('.ui-loader').remove();
    $('body').removeClass('.ui-mobile-viewport').removeClass('..ui-overlay-a');

    var shake = modshake.shake;
    var audioControl = modshake;
    var playControl = modshake;
    //loading 图片预加载路径
    var iMagesUrl = [
        'http://img03.tooopen.com/images/20131102/sy_45238929299.jpg',
        'http://pic55.nipic.com/file/20141208/19462408_171130083000_2.jpg',
        'http://img5.imgtn.bdimg.com/it/u=1864751896,666907639&fm=23&gp=0.jpg',
        'http://imgsrc.baidu.com/forum/pic/item/af1ba5246b600c33bc2213191a4c510fd8f9a105.jpg',
        'http://www.3lian.com/d/file/201610/27/9d5570c1af152386cb28c642598d08eb.jpg'
    ];

    mod_load.loading(iMagesUrl,function(){$(".mod-dialog-loading").hide();audioControl.initplay($("#before"));$(".redball").addClass("ballrotate");$(".yellowball").addClass("ballrotate");$(".blueball").addClass("ballrotate");setTimeout(function(){$(".za_logo").show();$(".za_logo").stop().animate({"top":"-1.95rem"},{easing:"bounceOut",duration:1000,complete:function(){$(".za_shadow").fadeIn();setTimeout(function(){subtitle.subtitle($(".mod-info").find("p"),3200,subtitleCb)},2000)}})},4500)});playControl.playControl();function subtitleCb(){$(".mod-info").fadeOut();subtitle.subtitle($(".man"),1300,personCb);function personCb(){$(".bottomword").find(".b-word").show();$(".bottomword").find(".b-word").addClass("breath");BackEarth()}}var sceneStatus;function BackEarth(){$(".persons").find(".man").on("tap",function(){sceneStatus=$(this).find(".face").attr("data-status");console.log(sceneStatus);$(".starrysky").addClass("move");setTimeout(function(){$(".starrysky").addClass("move-complete")},2999);setTimeout(function(){$(".sky-box").fadeOut();setTimeout(function(){$(".earth").fadeIn();shakephone()},800)},600)})}function signStatus(){var signindex;var indexarr=[];switch(sceneStatus){case"yydr":signindex=0;break;case"jjh":signindex=1;break;case"xb":signindex=2;break;case"jk":signindex=3;break}for(var i=0;i<4;i++){indexarr.push(signindex%4);signindex=signindex+1}return indexarr}function shakephone(){shake(function(c){$(".earth_bg").find(".b-word").stop().fadeOut();$("body").append(c);setTimeout(function(){$(".earth_snow").addClass("snowin");setTimeout(function(){$(".earth_snow").removeClass("snowin");$(".earth_snow").addClass("onsnow");$(".earth").addClass("movenear");setTimeout(function(){$(".earth").addClass("movenear-complete")},2999);setTimeout(function(){$(".earth").fadeOut();setTimeout(function(){$(".santa-man").fadeIn(1000,function(){setTimeout(function(){$(".santa-light").fadeIn(1000,lightend);function lightend(){$(".santa-oldman").fadeIn();$(".santa-oldman").addClass("onland");setTimeout(function(){$(".santa-oldman").removeClass("santa-fly").addClass("santa-land").addClass("landed");setTimeout(function(){$(".santa-oldman").fadeOut();$(".santaonsled").fadeIn();$(".sled-bg").fadeOut();setTimeout(function(){$(".sled").addClass("sledfly")},1000);setTimeout(function(){$(".sled").fadeOut(1000,sceneBegin);$("body").attr("data-status","on");function sceneBegin(){$(c).remove();$(".santa-man").fadeOut();$(".scene").fadeIn(1000,sceneshow);function sceneshow(){activeindex=signStatus();var swipelock=false;var swipecount=0;var obj=$("div[sign-status='1']").eq(activeindex[0]);function initswipe(obj,callback){obj.addClass("person-rotate-show");setTimeout(function(){obj.removeClass("person-rotate-on");swipecount++;callback&&callback();swipelock=true},1800)}initswipe(obj,swipechange);function swipechange(){switch(sceneStatus){case"yydr":audioControl.audioplay($("#squaredance"));$(".bigmom").fadeIn();$(".dogmom").fadeIn();$(".dogdayemom").fadeIn();$(".bigmom-word").stop().fadeIn(3000,function(){setTimeout(function(){$(".bigmom-word").stop().fadeOut();$(".santa-face-yydr").fadeIn(1000,function(){$(".santa-face-yydr").addClass("face-show");setTimeout(function(){$(".santa-face-yydr").fadeOut(500,function(){audioControl.audioplay($("#deerrun"));$(".santa-come").show();$(".santa-come").addClass("santa-comeing");$(".shake-hand-all").hide();$(".hand").show();setTimeout(function(){audioControl.audiopause($("#deerrun"));$(".santa-come").addClass("coming");$(".shake-mask").fadeIn(500,function(){$(".hand").addClass("shake-hand");setTimeout(function(){$(".bd").fadeIn(1000,function(){$(".shake-mask").fadeOut(800,function(){$(".bigmom").fadeOut();$(".bigmom-kick").fadeIn(1000,function(){$(".dogmom").addClass("dogmom-fly");setTimeout(function(){$(".dogmom").fadeOut(1000,function(){$(".bigmom-kick").fadeOut();$(".dogdaye").addClass("dogdaye-happy");setTimeout(function(){$(".bigmom-happy").fadeIn(100,function(){audioControl.audioplay($("#deerrun"));setTimeout(function(){audioControl.audiostop($("#deerrun"))},2000);$(".santa-come").fadeOut(500,function(){$(".santa-come").removeClass("coming")});$(".bigmom-msg").fadeIn(1000,function(){sceneStatus="jjh";$(".bd").hide();$(".hand").hide();if(swipecount<4){$(".swipe-word").fadeIn()}else{transfromwish()}$(".big-mom").on("swipeleft",function(){audioControl.audiostop($("#squaredance"));$(".bigmom-msg").fadeOut();$(".swipe-word").fadeOut();if(!swipelock||swipecount==4){return}swipelock=false;$(".big-mom").addClass("person-rotate-hide").removeClass("person-rotate-show");setTimeout(function(){$(".big-mom").hide()},1800);initswipe($(".oldwang"),swipechange)})})})},400)})},1200)})})})},2000)})},1800)})},1800)})},2000)});break;case"jjh":$(".oldw-sf-word").stop().fadeIn(3000,function(){setTimeout(function(){$(".oldw-sf-word").stop().fadeOut();$(".santa-face-jjh").fadeIn(1000,function(){$(".santa-face-jjh").addClass("face-show");setTimeout(function(){$(".santa-face-jjh").fadeOut(500,function(){audioControl.audioplay($("#deerrun"));
        $(".santa-come").show();$(".santa-come").addClass("santa-comeing");setTimeout(function(){audioControl.audiopause($("#deerrun"));$(".santa-come").addClass("coming");$(".shake-hand-all").hide();$(".oldw-hand").show();$(".shake-mask").fadeIn(500,function(){$(".oldw-hand").addClass("shake-hand");setTimeout(function(){$(".thq").fadeIn(1000,function(){setTimeout(function(){$(".shake-mask").fadeOut(1000,function(){$(".thq").hide();audioControl.audioplay($("#deerrun"));setTimeout(function(){audioControl.audiostop($("#deerrun"))},2000);$(".santa-come").fadeOut(500,function(){$(".santa-come").removeClass("coming")});$(".oldw-sf").fadeOut(2000);$(".oldw").fadeIn(3000,function(){sceneStatus="xb";if(swipecount<4){$(".swipe-word").fadeIn()}else{transfromwish()}$(".oldwang").on("swipeleft",function(){$(".swipe-word").fadeOut();if(!swipelock||swipecount==4){return}swipelock=false;$(".oldwang").addClass("person-rotate-hide").removeClass("person-rotate-show");setTimeout(function(){$(".oldwang").hide()},1800);initswipe($(".xb"),swipechange)})})})},1700)})},2000)})},1800)})},1800)})},1200)});break;case"xb":$(".xb-say1").fadeIn(2000,function(){setTimeout(function(){$(".xb-say1").fadeOut(1000,function(){$(".xj-word").fadeIn();setTimeout(function(){$(".xj-word").fadeOut(1000,function(){$(".xb-say2").stop().fadeIn(2000,function(){setTimeout(function(){$(".xb-say2").stop().fadeOut();$(".santa-face-xb").fadeIn(1000,function(){$(".santa-face-xb").addClass("face-show");setTimeout(function(){$(".santa-face-xb").fadeOut(500,function(){audioControl.audioplay($("#deerrun"));$(".santa-come").show();$(".santa-come").addClass("santa-comeing");setTimeout(function(){audioControl.audiopause($("#deerrun"));$(".santa-come").addClass("coming");$(".shake-hand-all").hide();$(".xb-hand").show();$(".shake-mask").fadeIn(500,function(){$(".xb-hand").addClass("shake-hand");setTimeout(function(){$(".shake-mask").fadeOut(1000,function(){audioControl.audioplay($("#deerrun"));setTimeout(function(){audioControl.audiostop($("#deerrun"))},2000);$(".santa-come").fadeOut(500,function(){$(".santa-come").removeClass("coming")});$(".xb-word").stop().fadeIn();setTimeout(function(){$(".xb-word").stop().fadeOut();$(".xb-begin").fadeOut(2000);$(".xb-end").fadeIn(3000,function(){$(".xj-say").stop().fadeIn();sceneStatus="jk";if(swipecount<4){$(".swipe-word").fadeIn()}else{transfromwish()}$(".xb").on("swipeleft",function(){$(".swipe-word").fadeOut();if(!swipelock||swipecount==4){return}swipelock=false;$(".xb").addClass("person-rotate-hide").removeClass("person-rotate-show");setTimeout(function(){$(".xb").hide()},1800);initswipe($(".lostphoneboy"),swipechange)})})},1500)})},2000)})},1800)})},1800)})},1500)})})},1000)})},1000)});break;case"jk":setTimeout(function(){$(".lostboy-msg").fadeIn(500,function(){setTimeout(function(){$(".lostboy-msg").fadeOut(500,function(){$(".santa-face-jk").fadeIn(1000,function(){$(".santa-face-jk").addClass("face-show");setTimeout(function(){$(".santa-face-jk").fadeOut(500,function(){audioControl.audioplay($("#deerrun"));$(".santa-come").show();$(".santa-come").addClass("santa-comeing");setTimeout(function(){audioControl.audiopause($("#deerrun"));$(".santa-come").addClass("coming");$(".shake-hand-all").hide();$(".boy-hand").show();$(".shake-mask").fadeIn(500,function(){$(".boy-hand").addClass("shake-hand");setTimeout(function(){$(".linkman").fadeIn(2000,function(){setTimeout(function(){$(".shake-mask").fadeOut(1000,function(){$(".linkman").hide();$(".boylost").stop().fadeOut(1000);$(".boytap").stop().fadeIn(1000,function(){setTimeout(function(){audioControl.audioplay($("#deerrun"));setTimeout(function(){audioControl.audiostop($("#deerrun"))},2000);$(".santa-come").fadeOut(1000,function(){$(".santa-come").removeClass("coming");$(".boygodness").fadeIn(1300,function(){sceneStatus="yydr";if(swipecount<4){$(".swipe-word").fadeIn()}else{transfromwish()}$(".lostphoneboy").on("swipeleft",function(){$(".swipe-word").fadeOut();if(!swipelock||swipecount==4){return}swipelock=false;$(".lostphoneboy").addClass("person-rotate-hide").removeClass("person-rotate-show");setTimeout(function(){$(".lostphoneboy").hide()},1800);initswipe($(".big-mom"),swipechange)})})})},2000)})})},1000)})},2000)})},1800)})},1800)})})},2800)})},1300);break}}}}},2400)},999)},2999)}},1000)})},800)},1500)},2999)},1400)})}var WISHCON="";function transfromwish(){$(".bottomball").addClass("back");$(".scene-ball").addClass("backsmall");setTimeout(function(){$(".scene").fadeOut();$(".wish").fadeIn(1000,function(){wishBegin()})},1000)}function wishBegin(){subtitle.subtitle($(".wish-content"),1000,function(){$(".wish-bigballcon").fadeIn(1000,function(){$(".wish-bigballtop").slideDown(1000,function(){$(".wish-bigballbot").fadeIn(function(){$(".wish-z").addClass("breath");$(".wish-wishbtn").fadeIn(1000);$(".wish-prompt").fadeIn(1000,function(){$(".wish-word").fadeOut(1000);$(".small-ball1").fadeIn(1000);$(".small-ball2").fadeIn(1000);$(".small-ball2").addClass("radius");setTimeout(function(){$(".small-ball1").addClass("radius")
    },500)})})})});$(".wish-makewish").click(function(){$(".wish-writebg").show();$(".wish-write textarea").focus().text("")});$(".wish-writeclose").click(function(){$(".wish-writebg").hide()});$(".wish-pushchi").click(function(){WISHCON=$(".wish-write textarea").val();$(".wish-bg").hide();$(".wish-radar").show()});$(".wish-Invit-makewish").click(function(){var str=window.location.href;WISHHREF=str+"#Letmakewish";window.location.href=WISHHREF;$(".wish-share-to").show()});$(".wish-share-to").click(function(){$(this).hide()});$(".wish-friendwrite").click(function(){var str=window.location.href;if(str.charAt("#")!=-1){str=str.substring(str.charAt("#"))}WISHHREF=str+"#Letmeet";window.location.href=WISHHREF;$(".wish-share-to").show()});$(".wish-clickbtn").click(function(){$(this).hide();function shownum(){var n=ran(1,5);var str=".person"+n;showPerson($(str))}setTimeout(function(){var m=ran(1,5);for(var i=0;i<m;i++){shownum()}},800);setTimeout(function(){$(".wish-invitation-code").show();$(".wish-invitation-code").html(getCode());$(".wish-code-con1").show();$(".wish-code-con2").show();$(".wish-sendall").show()},1000)})});$(".wish-sendall").click(function(){$(".wish-radar").hide();$(".wish-mywish").show();$(".wish-mywish-text").val(WISHCON);var ua=navigator.userAgent.toLowerCase();if(/iphone|ipad|ipod/.test(ua)){$(".wish-mywish").css("background-image",'url("images/wish-mywishios.png")');$(".wish-mywish-reload").hide();$(".wish-mywish-share").css("left","8.25rem")}else{if(/android/.test(ua)){$(".wish-mywish").css("background-image",'url("images/wish-mywish2.png")')}}});$(".wish-mywish-close").click(function(){$(".wish-radar").show();$(".wish-mywish").hide()});$(".wish-share-to2").click(function(){this.hide()});$(".wish-mywish-reload").click(function(){if(isWeiXin()){$(".wish-share-to2").show()}else{window.location.href="http://downloadb.dewmobile.net/Zapya/Activity/Apk/Kuaiya.apk"}function isWeiXin(){var ua=window.navigator.userAgent.toLowerCase();if(ua.match(/MicroMessenger/i)=="micromessenger"){return true}else{return false}}});$(".wish-mywish-share").click(function(){$(".wish-share-to").show()});$(".small-ball1").click(function(){$(".wish-bg").hide();$(".wish-radar").show()});$(".small-ball2").click(function(){$(".wish-bg").hide();$(".wish-radar").show()});function showPerson(obj){var arr=[{name:"妹子撩骚了",href:"http://avatar.kuaiya.cn/FlrVtAfGLSOYIg5vsgQ64E3HAXaV/tbnl?e=1794724262"},{name:"诛仙青云志",href:"http://avatar.kuaiya.cn/FmytphDDVH5Gspevw9jV26tkg3_O/tbnl?e=1785567240"},{name:"陈二狗重回孽障人生",href:"http://avatar.kuaiya.cn/FpX2fV2DSSO6TS4Kiaga_2_-VeGM/tbnl?e=1795675998"},{name:"22岁的未成年",href:"http://avatar.kuaiya.cn/FhzEil1y-7tRoO6LwiWCMnNm7pwT/tbnl?e=1795855841"},{name:"话说飞刀又见飞刀",href:"http://avatar.kuaiya.cn/FrJZijsIOvEZlHjGt8pciSMrzyB3/tbnl?e=1796462628"},{name:"超好看的热门网剧",href:"http://avatar.kuaiya.cn/FouO5h8CJUmAleiS7p--cSv0haAO/tbnl?e=1796355402"},{name:"不良人的极品家丁",href:"http://avatar.kuaiya.cn/FvG0tRUxgeUZAtQb_fgqzmppJZDz/tbnl?e=1796367253"},{name:"微影",href:"http://avatar.kuaiya.cn/FpWBIhifFL4iIeYxn4z5qroPvMns/tbnl?e=1772360804"},{name:"拜托了学妹",href:"http://avatar.kuaiya.cn/FlZkgC7wr8eHQcYbKgOb8U8KpnCi/tbnl?e=1795855153"},{name:"夜色撩人",href:"http://avatar.kuaiya.cn/FsuHJc0a-fj6OgbN9SeJSf1k8A5m/tbnl?e=1773992092"}];obj.show();obj.find("img").attr("src",arr[ran(0,10)].href);obj.find("span").html(arr[ran(0,10)].name)}function ran(n,m){return Math.floor(Math.random()*(m-n)+n)}function getCode(){var arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","s","y","z"];return"Z"+ran(1,8)+ran(1,8)+"A"+ran(2,9)+ran(2,8)+"P"+ran(3,10)+ran(3,10)+"YA"+arr[ran(0,26)]+arr[ran(0,26)]}};
});








