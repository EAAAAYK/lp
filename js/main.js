/*document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".hamburger-menu-btn");
  const navMenu = document.querySelector(".gnav");
  const body = document.body;

  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });
});*/

$(function () {
  $(".hamburger-menu-btn").on("click", function () {
    $(this).toggleClass("active");
    $(".gnav").toggleClass("active");
  });

  $(".gnav-list__item a").on("click", function () {
    if ($(".gnav").hasClass("active")) {
      $(".gnav").removeClass("active");
      $(".hamburger-menu-btn").removeClass("active");
    }
  });

  $(".reason-list__item").on("inview", function (event, isInview) {
    if (isInview) {
      $(this).stop().addClass("is-show");
    }
  });
  /*  $(".u-reason-list__item-left").on("inview", function (event, isInview) {
    if (isInview) {
      $(".u-reason-list__item-left").addClass("is-show");
    }
  });
  $(".u-reason-list__item-right").on("inview", function (event, isInview) {
    if (isInview) {
      $(".u-reason-list__item-right").addClass("is-show");
    }
  });
*/

  $(".voice-list__item").on("inview", function (event, isInview) {
    if (isInview) {
      $(this).stop().addClass("is-show");
    }
  });
});

/** 受講生の声（ふきだし）
  $('.inview-balloon').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらballoonクラスを追加
      $(this).stop().addClass('balloon');
    }
  }); */
