$(function () {

    /*当前的屏幕:0*/
    var index=0,timer;
    /*显示和隐藏其它元素*/
    showAndHideOtherEle(index);
    // 1.监听的屏幕window的滚动
    console.log(index);
    $(window).mousewheel(function(event) {

        clearTimeout(timer);
        /*节流:定时*/
        timer=setTimeout(function () {
            //2.监听屏幕滚动:如果del=1, 向上滚动,del=-1向下滚动
            var del=event.deltaY>0?1:-1;
            index=index-del;

            /*3.处理临界值:$('.gps li').length-1 =4*/
            if(index > $('.gps li').length-1 ){
                index=$('.gps li').length-1;
            }else if(index<0){
                index=0;
            }
            console.log(index);
            /*4.改变点颜色*/
            $('.gps li').eq(index).addClass('current')
                /*让它同级兄弟标签删除class样式*/
                .siblings('li').removeClass('current');
            /*5.屏幕切换*/
            $('section').eq(index).show()
                /*让同级section兄弟隐藏*/
                .siblings('section').hide();

            /*6.显示和隐藏其它元素*/
            showAndHideOtherEle(index);

            /*删除落空类current */
            setTimeout(function () {
                $('section').eq(index).removeClass('current')
                    .siblings('section').addClass('current');
            },50);


        },500);



    });

    
    /*2.监听gps的点击事件*/
    $('.gps li').on('click',function () {
        /*2.1拿到当前点击的索引*/
        index=$(this).index();
        // alert(index);
        /*2.2切换点背景颜色*/
        $(this).addClass('current')
            /*让它同级兄弟标签删除class样式*/
            .siblings('li').removeClass('current');

        $('section').eq(index).show()
            /*让同级section兄弟隐藏*/
            .siblings('section').hide();

        /*显示和隐藏其它元素*/
        showAndHideOtherEle(index);


        /*删除落空类current */
        setTimeout(function () {
            $('section').eq(index).removeClass('current')
                .siblings('section').addClass('current');
        },50);

    })



    /*3.显示和隐藏其它元素*/
    function showAndHideOtherEle(index) {

        /*第一屏*/
        if(index==0){
            $('.header_left').hide();
            $('.scroll').show();
        }else{
            $('.header_left').show();
            $('.scroll').hide();
        }

    }
})