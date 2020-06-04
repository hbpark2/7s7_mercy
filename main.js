$(document).ready(function(){
    var windowWidth = $(window).width()
    var windowHeight = $(window).height()
    console.log(windowHeight)
    if(windowWidth>640){
        $(".main_txt").css({marginTop:windowHeight/2})
    }
})

