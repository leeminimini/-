$(function(){
    $('.slider').slick({
        autoplay:true,
        arrows: false,
        // dots:true
    })


// 햄버거 버튼을 클릭하면 모바일 메뉴 튀어나오게 하기
// 프로그램을 설계

// 변수 선언
let sw = true;
$('.m_btn').click(function(){
    if(sw == true){
    $(this).addClass('on');
    $('.m_menu_wrap').animate({'left':0},300);
    $("#wrap").animate({'left':'274px'},300);
    $('.cover').fadeIn(300);
    sw = false;

    }else{
    $('.m_menu_wrap').animate({'left':'-100%'},300);    
    $('#wrap').animate({'left':'0px'},300)
    $(".cover").fadeOut(300);
    $('.m_btn').removeClass('on');
    sw = true;

    }
})

 



})