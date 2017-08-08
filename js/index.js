/**
 * Created by Administrator on 2016/9/8.
 */
    //����Ч��
    var  nav = document.getElementById("nav");
    var  lis = document.querySelectorAll("li");

    //��������ӵ���¼�
    var clicked = true;   //�ж��Ƿ��һ�ε��
    lis[lis.length-1].onclick = function(){
        /*
         *   i �� 0   1   2 ....  11
         *   n : -6  -5  -4 ...   5
         * ���� ��-90  -75 -60 ... 75
         */

        for(var i=0;i<lis.length;i++){
            //��i��ֵ��ȥlis/2�������n��ֵ  Ȼ����n���ٳ���15���������Ӧ����
            var n = i-lis.length/2;

            if(clicked){
                n = n*15;
            }else{
                n = 360;
            }

            lis[i].style.transform = 'rotate('+n+'deg)';
        }
        clicked = !clicked;  //ѭ�����
    };

    //��ÿ��li��ӵ���¼�
    for(var i=0;i<lis.length-1;i++){
        lis[i].index = i;
        lis[i].onclick = function(){
            /*
             *���ʱ��Ҫ������
             * 1��������Ǹ�imgҪת��0deg
             * 2�����img��ߵ����μ�ȥ15deg
             * 3, ���img�ұߵ����μ���15deg�������ŵ��Ǹ�imgҪ����deg��
             */

            var leftDeg = 0;    //��߳�ʼֵ�Ķ���
            var rightDeg = 15;  //�ұ߳�ʼֵ�Ķ���

            //���ͼƬ��ת
            this.style.transform = 'rotate(0deg)';

            //���ͼƬ��ת
            for(var i=this.index-1;i>=0;i--){
                leftDeg -= 15;
                lis[i].style.transform = 'rotate('+leftDeg+'deg)';
            }

            //�ұ�ͼƬ��ת
            for(var i=this.index+1;i<lis.length;i++){
                rightDeg += 15;
                lis[i].style.transform = 'rotate('+rightDeg+'deg)';
            }
        };
    }


