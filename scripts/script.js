 /* Toggle of navbar clicking other than on it */
$(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
});

// Toggle tranparent navbar when the user scrolls the page
$(window).scroll(function() {
        let y = $(this).scrollTop();
        y = -(y/4);
        let z = (y*2)+600;
        $('.banner-div').css("background-position-y",y);
        if($(window).width()>480){
            console.log($(window).width());
            $('.parallax').css("background-position-y",z);
        }
        if($(this).scrollTop() > 600)  /*height in pixels when the navbar becomes non opaque*/ 
        {
            $('.navbar-default').addClass('opaque');
        } else {
            $('.navbar-default').removeClass('opaque');
        }
});

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
});
var s1 = $("#s1");
var s2 = $("#s2");
var fd = $("#fd");
var img = $("#programs_image");
img.addClass('background1');
s1.click(function (){
    s2.removeClass('highlight');
    fd.removeClass('highlight');
    s1.addClass('highlight');
    img.removeClass('background2');
    img.removeClass('background3');
    img.addClass('background1');
});
    
s2.click(function () {
    fd.removeClass('highlight');
    s1.removeClass('highlight');
    s2.addClass('highlight');
    img.removeClass('background3');
    img.removeClass('background1');
    img.addClass('background2');
    
});

fd.click(function () {
    s2.removeClass('highlight');
    s1.removeClass('highlight');
    fd.addClass('highlight');
    img.removeClass('background1');
    img.removeClass('background2');
    img.addClass('background3');
    
});



(function appinstance(){
    var bnrImg,i=1,num1,num2,num3;
    document.addEventListener('DOMContentLoaded',function(){
        loadElements();
        addEventListener();
//        bannerSlider();
        smoothScrollAnchors();
    });
    
//    Custom Functions
    
    // Smooth Scroll Anchors
    function smoothScrollAnchors() {
        $('a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    },600);
                    return false;
                }
            }
        });
    }
    
    function addEventListener(){
        
    }
    
    function loadElements(){
        num1 = document.getElementById('num1');
        num2 = document.getElementById('num2');
        num3 = document.getElementById('num3');
    }
})();