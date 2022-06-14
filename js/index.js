$(function () {
  $('.burger-btn').on('click', function () {
    $('.header-nav').toggleClass('active');
    $('.burger-btn').toggleClass('active');
  });

  $('.header-list').on('click', function () {
     $('.header-nav').toggleClass('active');
    $('.burger-btn').toggleClass('active');
  })
});