$(document).ready(()=>{
    console.log("js is working for you my friend!")
    $(".c1").click(function(){
        $(this).toggleClass("clr1");
        $(this).addClass("press");
        setInterval(() => {
            $(this).removeClass("press");
        }, 300);
        console.log("clr1");
    })
    $(".c2").click(function(){
        $(this).toggleClass("clr2");
        $(this).addClass("press");
        setInterval(() => {
            $(this).removeClass("press");
        }, 300);
        console.log("clr2");
    })
    $(".c3").click(function(){
        $(this).toggleClass("clr3");
        $(this).addClass("press");
        setInterval(() => {
            $(this).removeClass("press");
        }, 300);
        console.log("clr3");
    })
})