
$(document).ready(function(event) {

$('.hamburger').click(function() {

  // alert("hello");
  // document.getElementByClass('nav-list').style.left = 100;
    // $('#header .nav-list ul').offset().left;
    // var currentMargin = parseInt($('#header .nav-list ul').css('left'));
    // $('#header .nav-list ul').css('left',currentMargin+100+'%');
    // $('#header .nav-list ul').toggle();

    $('#header .nav-list ul').toggle(function() {
      var currentMargin = parseInt($('#header .nav-list ul').css('left'));
      $('#header .nav-list ul').css('left',currentMargin+100+'%');
      /* Stuff to do every *odd* time the element is clicked */
    }, function() {
      var currentMargin = parseInt($('#header .nav-list ul').css('left'));
      $('#header .nav-list ul').css('left',currentMargin+0+'%');
      /* Stuff to do every *even* time the element is clicked */
    });

    // $('').toggleClass("active");
    // $(this).find('i').toggleClass('fa-bars fa-times')
  });
});
