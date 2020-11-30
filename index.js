$( document ).ready(function() {
    var stt = 0;
    var endImg = $("img.slide:last").attr("idx");

    $("button").click(function(){
        stt = $(this).attr("idx");
        changeImg(stt);
    });
    $("#next").click(function(){
        if(++stt >endImg){
            stt = 0;
        }
        changeImg(stt);
    });
    $("#prev").click(function(){
        if(--stt <0){
            stt = endImg;
        }
        changeImg(stt);
    });

    var interval;
    function timer(){
        interval = setInterval(function(){
            $("#next").click();
        },5000);
    };
    timer();

    function changeImg(stt){
        $("img.slide").hide();
        $("img.slide").eq(stt).fadeToggle(3000);
        $("button").removeClass("active");
        $("button").eq(stt).addClass("active");

        clearInterval(interval);
        timer();
    };

   
});