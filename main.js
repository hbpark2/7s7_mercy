$(document).ready(function(){
    var windowWidth = $(window).width()
    var windowHeight = $(window).height()
    console.log(windowHeight)
    $(window).resize(function(){
        if(windowWidth>640){
        $(".main_txt").css({marginTop:windowHeight/2})
    }else{
        $(".main_txt").css({marginTop:200})

    }
    })
    
})

