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
    $(this).toggleClass("active");
  });
});
