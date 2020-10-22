/*jquery */
/*1.----提示信息事件 */
//点击登陆按钮，跳转到登录页面
$('#login').click(function(){
    location.href="./pages/login.html";
})
//注册
$('#registor').click(function(){
    location.href="./pages/registor.html";
})
//购物车
$('#cart').click(function(){
    location.href="./pages/cart.html";
})
//商品服务
$('.afu').click(function(){
    
})

/*2.----搜索列表 */
//商品信息页
$('.subs .con').click(function(){
    //将东方星的输入框中的内容清空；
    let suval=$(this).val('');
})
$('.subs .sea').click(function(){
    //获取输入框的内容
    let suval=$('.subs .con').val();
    //得到输入的内容以后，跳转到对应的页面
    location.href='./pages/detail.html'
})

/*4.---轮播图 */

//轮播---carousel
function carousel(){
    //左边按钮
    let lti=$('.emi1');
    //右边按钮
    let rti=$('.emi2');
     //获取图片
    let imgs=$('article img'); 
    //图片数量
    let num=imgs.length;
    //当前下标
    let index=0;
    //小圆点对应的ul---获取ul
    let ul=$('article ul');
    //遍历图片,添加圆点
    let spans=[];
    imgs.each(function(i,value){
        //$(this)是图片对象，i是图片下标，value是图片img内容，例如<img src="./imgs/3ec6761cec39436a9222d105be404e4d.jpg" alt="">
        let span=$(document.createElement('span'));
        ul.append(span); 
        spans.push(span);
    })
    //添加事件
    //将span的样式设置为空
    let res=function(){
        $('article ul span').each(function(k,val){
            $(this).css({"background": "",
            "border": "2px solid #fff"});
        })
   }
    //轮播事件
    $('article ul span').each(function(i,value){

         //span点击触发事件
         /*let clic=function(){
            imgs.each(function(j,value){
                $(this).css({"display":"none"});
            })
            imgs.eq(i).css({
                "display":"block"
            })
            res();
            $('article ul span').eq(i).css({
                    "background": "#fff",
                    "border": "2px solid #cc9952"
            })
        };*/

        let clic=function(){
            imgs.each(function(j,value){
                $(this).hide();
            })
            imgs.eq(i).fadeIn(400);
            res();
            $('article ul span').eq(i).css({
                    "background": "#fff",
                    "border": "2px solid #cc9952"
            })
        };
       
        //自动轮播
        let time=setInterval(function(){
            clic();
            i++;
            if(i==num){
                i=0;
            }
        },3000)

        $(this).click(function(){
            clearInterval(time);
            clic();
        })
        
        //左按钮点击，当前i-1
        lti.click(function(){
            clearInterval(time);
            i--;
            if(i==-1){
                i=num-1;
            }
            clic();
        })
        //右按钮点击，当前i+1
        rti.click(function(){
            clearInterval(time);
            i++;
            if(i==num){
                i=0;
            }
            clic();
        })
    })  
};
console.log(carousel());

/*倒计时 */
$(function(){
    //日期倒计时,现在距离下面的日期
    var data_show = $('.data-box');
    for(var i=1;i<=data_show.length;i++){
        function_name($("#dateShow"+i).data("date"),"#dateShow"+i);
    }
    // function_name('2018/02/22 23:45:24','.data-show-box');
    // function_name('2018/02/20 21:43:55','.data-show-box');
    function function_name(time,obj) {
        $.leftTime(time,function(d){
            if(d.status){
                var $dateShow1=$(obj);
                $dateShow1.find(".d").html(d.d);
                $dateShow1.find(".h").html(d.h);
                $dateShow1.find(".m").html(d.m);
                $dateShow1.find(".s").html(d.s);
            }
        });
    }
});

/*拍卖 */
/*轮播 */
