AOS.init();

$(function () {
  $(".slick").slick({
    arrows: false,
    autoplay: true,
  });

  $(".links").on("click", function () {
    $(".header_top").toggleClass("active");
  });

  $(window).on("scroll", function () {
    var sct = $(window).scrollTop();
    if (sct > 500) {
      $(".scroll").fadeIn(300);
    } else {
      $(".scroll").fadeOut(1000);
    }
  });

  $(".tab_menu>li>a").on("click", function (e) {
    e.preventDefault();
    //console.log($(this).parent().index());
    var idx = $(this).parent().index();
    //this == e.currentTarget
    //this(x) --> this e.target
    var idx = $(this).parent().index();
    $(".tab_content>li").removeClass("on");
    $(".tab_content>li").eq(idx).addClass("on");
    $(".tab_menu>li").removeClass("on");
    $(this).parent().addClass("on");
  });

  $(".slick_product").slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
  });

  $(".arrow i:nth-child(1)").on("click", function () {
    $(".slick_product").slick("slickPrev");
  });
  $(".arrow i:nth-child(2)").on("click", function () {
    $(".slick_product").slick("slickNext");
  });

  $(".now").on("click", function () {
    //$('.inquiry_form').toggleClass("active");
    $('.inquiry_form').slideToggle();
  });

  function modal(id) {
    var zIndex = 9999;
    var modal = document.getElementById(id);

    // 모달 div 뒤에 희끄무레한 레이어
    var bg = document.createElement('div');
    bg.setStyle({
      position: 'fixed',
      zIndex: zIndex,
      left: '0px',
      top: '0px',
      width: '100%',
      height: '100%',
      overflow: 'auto',
      // 레이어 색갈은 여기서 바꾸면 됨
      backgroundColor: 'rgba(0,0,0,0.4)'
    });
    document.body.append(bg);

    // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
    modal.querySelector('.modal_close_btn').addEventListener('click', function () {
      bg.remove();
      modal.style.display = 'none';
    });

    modal.setStyle({
      position: 'fixed',
      display: 'block',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

      // 시꺼먼 레이어 보다 한칸 위에 보이기
      zIndex: zIndex + 1,

      // div center 정렬
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      msTransform: 'translate(-50%, -50%)',
      webkitTransform: 'translate(-50%, -50%)'
    });
  }

  // Element 에 style 한번에 오브젝트로 설정하는 함수 추가
  Element.prototype.setStyle = function (styles) {
    for (var k in styles) this.style[k] = styles[k];
    return this;
  };

  document.getElementById('popup_open_btn').addEventListener('click', function () {
    // 모달창 띄우기
    modal('my_modal');
  });

});
