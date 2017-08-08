/**
 * Created by Administrator on 2016/9/9.
 */

//canvas����Ч��
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight+200;
var ctx = canvas.getContext('2d');
var balls = [];
var colors = ['#69d2d7','#a7dbd8','#e0e4cc','#69d2d7','#fa6900','#ff4e50','#f9d423'];
var timer;

/*
 * һ��Բ  �뾶 ��ɫ λ�� �ٶȶ���ͬ
 * var ball={
 * x:x���λ��
 * y:y���λ��
 * r:Բ�İ뾶
 * vx:x����ٶ�
 * vy:y����ٶ�
 * corlor:��ɫ
 * }
 *
 * �Ƕ�ת����
 *   �Ƕ�*��/180
 *   360*��/180
 */

//�ڻ����ϻ�Բ
function draw(ball){
    ctx.beginPath();   //��ʼ·��
    ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2);  //arc(x���λ��,y���λ��,�뾶,��ʼ���ȣ���������)
    ctx.fillStyle = ball.corlor;  //��ԭ�����ɫ
    ctx.globalCompositeOperation = 'lighter';  //�ϳ�
    ctx.fill();    //
}

//�������  ȡx��y֮����������Math.round(Math.random()*(y-x)+x)
function random(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

//�������ƶ��¼�
var on = true;   //����������ƶ���ʱ��ʱ��Ҳ������
canvas.onmousemove = function(ev){
    //���ƶ���ʱ�򴴽�����Բ
    for(var i=0;i<2;i++){
        var ball = {
            x:random(-5,5)+ev.clientX,
            y:random(-5,5)+ev.clientY+window.pageYOffset,
            r:random(10,45),
            xv:Math.random()-0.5,
            yv:Math.random()-0.5,
            corlor:colors[random(0,colors.length-1)]   //�����ɫ
        };

        balls.push(ball);
        if(balls.length > 300){
            balls.shift();  //ɾ��
        }
        //console.log(balls.length);
    }

    //�ö�ʱ��ֻ����һ��
    if(on){
        clearInterval(timer);
        timer = setInterval(drallBall,30);
        on =false;
    }

    function drallBall(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for(var i=0;i<balls.length;i++){
            //��Ҫ�ڻ���ʱ������λ�ð뾶ȫ���ı䣬�����������󿴵����ڶ�
            balls[i].x += balls[i].xv*8;   //ͨ���ٶȸı�x��λ��
            balls[i].y += balls[i].yv*8;
            balls[i].r = balls[i].r*0.94;  //�ı���İ뾶

            balls[i].index = i;  //����������Ϊ���������ҵ�����ɾ��

            //���С��İ뾶С��1���Ͳ���Canvas�ڻ�
            if(balls[i].r<1){
                balls.splice(balls[i].index,1);
                continue;   //���С���Ѿ���ɾ�� ����Ĵ���Ͳ���ִ��
            }

            draw(balls[i]);

            //��� balls����������û�ж������ưɶ�ʱ�����
            if(!balls.length){
                clearInterval(timer);
                on = true;  //on��ֵԤ��ʱ�ڱ���һ��
            }
        }
    }
};