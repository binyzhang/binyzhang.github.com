define(function(require,exports,module){

  exports.loading=function(iMagesUrl,callback){
    //$('.loading-item').css({'top':-$('.loading-item').height()*(0.34),'left':-$('.loading-item').width()*(0.25)});
    var count= 0;
    for(var i=0;i<iMagesUrl.length;i++){
      var oImages = new Image();

      oImages.src=iMagesUrl[i];
      oImages.onload=function(){
        count++;
        var scale = count/iMagesUrl.length;
        var loadnum = scale.toFixed(2)*100+'%';
        $('.loading-num').html(loadnum);
        $('.loading-bar').css({'width':$('.loading-box').width()*scale});
        $('.loading-item').css({'left':$('.loading-box').width()*scale-$('.loading-item').width()*(0.25)});
        if(scale==1){
          //$('.mod-dialog-loading').hide();
          setTimeout(function(){
            callback&&callback();
          },300);
        }
      };
    }
  };
})


