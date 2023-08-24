// jQuery 화면 스크롤
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

let $html = $("html");
let page = 1;
let lastPage = $(".content").length;

$html.animate({scrollTop : 0},10);

$(window).on("wheel", function(e){
	if($html.is(":animated")) return;
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
		page--;
	}
	var posTop = (page-1) * $(window).height();
	$html.animate({scrollTop : posTop});
});

// jQuery 맨 위로 올라가는 화살표버튼
$(function() {
  // Change CSS Scroll
  $(window).scroll(function() {
    if($(window).scrollTop() > 50) {
      $('.gototop').addClass('active');
    }
    else {
      $('.gototop').removeClass('active');
    }
  });
  // Smooth Scrolling
  $('.gototop').click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
  });
  $('a.nav').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:$(this.hash).offset().top}, 500)
  })
});

// 메뉴바 내려오면서 스타일 변경
$(function(){
  const $header = $('.home'); //헤더를 변수에 넣기
  const $page = $('.about'); //색상이 변할 부분
  const $window = $(window);
  const pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
  
  $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  });
  
  $window.on('scroll', function(){ //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('down', scrolled); //클래스 토글
  });
});