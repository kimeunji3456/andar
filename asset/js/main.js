// 헤더 위 슬라이드
const bannerSlide = new Swiper(".banner-slide", {
  loop: true,
  effect: "fade",
  autoplay: true,
  speed: 500,
});


// 메인 슬라이드
const main = new Swiper(".main-slide", {
  loop: true,
  effect: "fade",
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
  },
});


// 스크롤 내리면 헤더 변경
$(window).scroll(function () {
  current = $(this).scrollTop();

  if (current > 0) {
    $('.header').addClass('fix')
  } else {
    $('.header').removeClass('fix')
  }
})

$(window).trigger('scroll'); //강제실행


// 버튼 클릭시 아래 변경
$('.gnb .btn-open').click(function () {
  $('.gnb').toggleClass('open');
  $('.gnb .sub-wrap').slideToggle();
})


// aside 클릭
$('#btnMenu').click(function () {
  $('.aside-menu').addClass('open');
  $('body').addClass('o-hidden');
})

$('#btnClose').click(function () {
  $('.aside-menu').removeClass('open');
  $('body').removeClass('o-hidden');
})


// aside 닫기
$('.btn-close').click(function (e) {
  e.preventDefault();

  $(this).parents('.aside-menu').removeClass('open');
  $('body').removeClass('o-hidden');
})


// 메뉴 열림
$('.group-menu .gnb-item').click(function (e) {
  e.preventDefault();


  $(this).children('.sub-list').slideToggle();
});



// 바디 배경 첫 번째 방법
/* $('body').click(function (e) { //바디 클릭
  //e.target -> 클릭한 태그를 찝어준다.
  //console.log(e.target);

  //헤더가 클릭한 태그를 가지고 있냐?
  //length

  if(!$('.header').has(e.target).length){

    $('.aside-menu').removeClass('open');
    $('body').removeClass('o-hidden');
  }
  
}) */

// 바디 배경 두 번째 방법
$('dimmed').click(function () {
  //alert('1');

  $('.aside-menu').removeClass('open');
  $('body').removeClass('o-hidden');
})


// 레깅스, 브라탑, 세트 상품 슬라이드
const categorySlide = new Swiper(".sc-category .swiper", {
  slidesPerView: 2.2,
  spaceBetween: 10,
});



// 톡상담 및 상단 버튼
let lastScroll = 0;

$(window).scroll(function () {

  current = $(this).scrollTop()


  if (current > lastScroll) {
    $('.fixed-area').removeClass('show');

  } else {
    $('.fixed-area').addClass('show');
  }

  lastScroll = current;

  if (current <= 100) {
    $('.fixed-area').removeClass('show');
  }

})