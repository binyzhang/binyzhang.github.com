define(function(require,exports,module){

    exports.initplay=function(obj){
        obj[0].addEventListener("loadeddata", //歌曲一经完整的加载完毕( 也可以写成上面提到的那些事件类型)
            function() {
//                            $("#control").addClass("play").removeClass("color_gray");
//                            $("#control").html("点击播放");
//                            addListenTouch(); //歌曲加载之后才可以拖动进度条
//                            var allTime = audio.duration;
//                            timeChange(allTime, "allTime");
//                            setInterval(function() {
//                                var currentTime = audio.currentTime;
//                                $("#time .currentTime").html(timeChange(currentTime, "currentTime"));
//                            }, 1000);
                obj[0].play();
            }, false);
        obj[0].volume=0.1;
        obj[0].loop=true;
        obj[0].play();
    };

    exports.audioplay = function(obj){
        obj[0].play();
    };
    exports.audiostop = function(obj){
        if(obj.size()>1){
            for(var i=0;i<obj.size();i++){
                obj[0].stop();
            }
        }else{
            console.log(obj[0]);
            obj[0].ended=true;
        }

    };
    exports.audiopause= function(obj){
        obj[0].pause();
    };

    exports.shake=function(cb){
        var canvas;
        function snowInit(){
            canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");

            //canvas dimensions
            var W = window.innerWidth;
            var H = window.innerHeight;
            canvas.width = W;
            canvas.height = H;
            canvas.style.position='absolute';
            canvas.style.left='0';
            canvas.style.top='0';
            canvas.style.zIndex='9999999';
            //snowflake particles
            var mp = 35; //max particles
            var particles = [];
            for(var i = 0; i < mp; i++)
            {
                particles.push({
                    x: Math.random()*W, //x-coordinate
                    y: Math.random()*H, //y-coordinate
                    r: Math.random()*4+1, //radius
                    d: Math.random()*mp //density
                })
            }

            //Lets draw the flakes
            function draw()
            {
                ctx.clearRect(0, 0, W, H);

                ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
                ctx.beginPath();
                for(var i = 0; i < mp; i++)
                {
                    var p = particles[i];
                    ctx.moveTo(p.x, p.y);
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
                }
                ctx.fill();
                update();
            }

            //Function to move the snowflakes
            //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
            var angle = 0;
            function update()
            {
                angle += 0.01;
                for(var i = 0; i < mp; i++)
                {
                    var p = particles[i];
                    //Updating X and Y coordinates
                    //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
                    //Every particle has its own density which can be used to make the downward movement different for each flake
                    //Lets make it more random by adding in the radius
                    p.y += Math.cos(angle+p.d) + 1 + p.r/2;
                    p.x += Math.sin(angle) * 2;

                    //Sending flakes back from the top when it exits
                    //Lets make it a bit more organic and let flakes enter from the left and right also.
                    if(p.x > W+5 || p.x < -5 || p.y > H)
                    {
                        if(i%3 > 0) //66.67% of the flakes
                        {
                            particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
                        }
                        else
                        {
                            //If the flake is exitting from the right
                            if(Math.sin(angle) > 0)
                            {
                                //Enter from the left
                                particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
                            }
                            else
                            {
                                //Enter from the right
                                particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
                            }
                        }
                    }
                }
            }

            //animation loop
            setInterval(draw, 33);
        }

        //cb&&cb(canvas);
        var bshakelock = true;
        //运动事件监听
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion',deviceMotionHandler,false);
        }

        //获取加速度信息
        //通过监听上一步获取到的x, y, z 值在一定时间范围内的变化率，进行设备是否有进行晃动的判断。
        //而为了防止正常移动的误判，需要给该变化率设置一个合适的临界值。
        var SHAKE_THRESHOLD = 8000;
        var last_update = 0;
        var x, y, z, last_x = 0, last_y = 0, last_z = 0;
        function deviceMotionHandler(eventData) {
            var acceleration =eventData.accelerationIncludingGravity;
            var curTime = new Date().getTime();
            if ((curTime-last_update)> 10) {
                var diffTime = curTime -last_update;
                last_update = curTime;
                x = acceleration.x;
                y = acceleration.y;
                z = acceleration.z;
                var speed = Math.abs(x +y + z - last_x - last_y - last_z) / diffTime * 10000;
                if (speed > SHAKE_THRESHOLD && bshakelock) {
//                        alert("你中奖啦！");  // Do something
//                    snowInit();
//                    oBox.appendChild(canvas);
//                    document.body.removeChild(document.getElementById('h1'));
                    bshakelock=false;
                    snowInit();
                    function checkCanvas(){
                        if(!$('body').attr('data-status')){
                            return true;
                        }
                        return false;
                    }
                    var check = checkCanvas();
                   if(check){
                       cb&&cb(canvas);
                   }

                }
                last_x = x;
                last_y = y;
                last_z = z;
            }
        }





    };

    // playControl
    exports.playControl=function(obj,obj2) {
        //obj.on('tap',function(){
        //    if(obj.hasClass('ban')){
        //        for(var i=0;i<obj2.size();i++){
        //            obj2.eq[i].get(0).ended=true;
        //        }
        //        $('.play').show();
        //        $('.ban').hide();
        //    }else{
        //        obj2[0].play();
        //        $('.play').hide();
        //        $('.ban').show();
        //    }
        //});
        var playBtn = document.getElementById('btn');
        var audio = document.getElementById('before');
        audio.src='./music/before.mp3';
        audio.play();
        function clicks() {
            playBtn.addEventListener('click',function(){
                if(playBtn.className.indexOf('ban')!=-1){
                    audio.pause();
                    console.log('click!! play');
                    playBtn.className='controlbtn play';
                }else{
                    audio.play();
                    playBtn.className='controlbtn ban';
                }
            },false);
        }
        clicks()
    };

});