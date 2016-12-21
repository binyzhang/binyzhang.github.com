require(['./loading_img','subtitle'],function(mod_load,subtitle,easing,modshake){

    var WISHCON='';

    subtitle.subtitle($('.wish-content'),1000,function(){

        $('.wish-bigballcon').fadeIn(1000,function(){
            $('.wish-bigballtop').slideDown(1000,function(){
                $('.wish-bigballbot').fadeIn(function(){
                    $('.wish-z').addClass('breath')
                    $('.wish-wishbtn').fadeIn(1000);
                    $('.wish-prompt').fadeIn(1000,function(){
                        $('.wish-word').fadeOut(1000);
                        $('.small-ball1').fadeIn(1000);
                        $('.small-ball2').fadeIn(1000);
                        $('.small-ball2').addClass('radius');
                        setTimeout(function(){
                            $('.small-ball1').addClass('radius');
                        },500)
                    });
                });
            });
        });

        $('.wish-makewish').click(function(){
            $('.wish-writebg').show();
            $('.wish-write textarea').focus().text('');
        });
        $('.wish-writeclose').click(function(){
            $('.wish-writebg').hide();
        });
        $('.wish-pushchi').click(function(){
            WISHCON=$('.wish-write textarea').val();
            $('.wish-bg').hide();
            $('.wish-radar').show();
        });
        $('.wish-Invit-makewish').click(function(){
            $('.wish-share-to').show();
        });
        $('.wish-share-to').click(function(){
            $(this).hide();
        });
        $('.wish-friendwrite').click(function(){
            $('.wish-share-to').show();
        });
        $('.wish-mywish-share').click(function(){
            $('.wish-share-to').show();
        });
        $('.small-ball1').on('tap',function(){
            $('.wish-bg').hide();
            $('.wish-radar').show();
        });
        $('.small-ball2').on('tap',function(){
            $('.wish-bg').hide();
            $('.wish-radar').show();
        });



        $('.wish-clickbtn').click(function(){
            $(this).hide();
            function shownum(){
                var n=ran(1,5);
                var str='.person'+n;
                showPerson($(str));
            }
            var m=ran(1,5);
            for(var i=0;i<m;i++){
                shownum();
            }


            $('.wish-invitation-code').show();
            $('.wish-invitation-code').html(getCode());
            $('.wish-code-con1').show();
            $('.wish-code-con2').show();
            $('.wish-sendall').show();
        });
    });

    $('.wish-sendall').click(function(){
        $('.wish-radar').hide();
        $('.wish-mywish').show();
        $('.wish-mywish-text').val(WISHCON);
    });
    $('.wish-mywish-close').click(function(){
        $('.wish-radar').show();
        $('.wish-mywish').hide();
    });
    $('.wish-mywish-reload').click(function(){
        window.location.reload();
    });


    function showPerson(obj){
        var arr=[
            {name:'妹子撩骚了',href:'http://avatar.kuaiya.cn/FlrVtAfGLSOYIg5vsgQ64E3HAXaV/tbnl?e=1794724262'},
            {name:'诛仙青云志',href:'http://avatar.kuaiya.cn/FmytphDDVH5Gspevw9jV26tkg3_O/tbnl?e=1785567240'},
            {name:'陈二狗重回孽障人生',href:'http://avatar.kuaiya.cn/FpX2fV2DSSO6TS4Kiaga_2_-VeGM/tbnl?e=1795675998'},
            {name:'22岁的未成年',href:'http://avatar.kuaiya.cn/FhzEil1y-7tRoO6LwiWCMnNm7pwT/tbnl?e=1795855841'},
            {name:'话说飞刀又见飞刀',href:'http://avatar.kuaiya.cn/FrJZijsIOvEZlHjGt8pciSMrzyB3/tbnl?e=1796462628'},
            {name:'超好看的热门网剧',href:'http://avatar.kuaiya.cn/FouO5h8CJUmAleiS7p--cSv0haAO/tbnl?e=1796355402'},
            {name:'不良人的极品家丁',href:'http://avatar.kuaiya.cn/FvG0tRUxgeUZAtQb_fgqzmppJZDz/tbnl?e=1796367253'},
            {name:'微影',href:'http://avatar.kuaiya.cn/FpWBIhifFL4iIeYxn4z5qroPvMns/tbnl?e=1772360804'},
            {name:'拜托了学妹',href:'http://avatar.kuaiya.cn/FlZkgC7wr8eHQcYbKgOb8U8KpnCi/tbnl?e=1795855153'},
            {name:'夜色撩人',href:'http://avatar.kuaiya.cn/FsuHJc0a-fj6OgbN9SeJSf1k8A5m/tbnl?e=1773992092'}
        ];
        obj.show();
        obj.find('img').attr('src',arr[ran(0,10)].href);
        obj.find('span').html(arr[ran(0,10)].name);

    }

    function ran(n,m){
        return Math.floor(Math.random()*(m-n)+n);
    }
    function getCode(){
        var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','s','y','z'];
        return 'Z'+ran(1,8)+ran(1,8)+'A'+ran(2,9)+ran(2,8)+'P'+ran(3,10)+ran(3,10)+'YA'+arr[ran(0,26)]+arr[ran(0,26)];
    }











});