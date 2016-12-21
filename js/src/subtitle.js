define(function(require,exposts,module){

    exposts.subtitle=function(obj,time,callback,bool){
        var count = 0;
        for(var i=0;i<obj.length;i++){
            (function(index){
                setTimeout(function(){
                    obj.eq(index).stop().fadeIn();
                    //if(bool){
                    //    if(index==(obj.size()-2)){
                    //        callback&&callback();
                    //    }
                    //    if(index==(obj.size()-1)){
                    //        setTimeout(function(){
                    //            obj.parent(parentname).fadeOut();
                    //        },1000)
                    //    }
                    //}else{
                    //
                    //}
                    if(index==(obj.size()-1)){
                        setTimeout(function(){
                            callback&&callback();
                        },time)
                    }
                },time*i);

            })(i);
        }
    };
});