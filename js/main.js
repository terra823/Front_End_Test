var $circle = $(".circle"),
    $cat = $(".cat"),
    $rectangle = $(".rectangle"),
    $arrow = $(".arrow-wrap");


function ani_in(){
TweenMax.to($circle, 1, {
  scaleX: 1,
  scaleY: 1,
  alpha: 1,
  ease: Elastic.easeInOut
});

TweenMax.to($cat, 1, {
  scaleX: 1,
  scaleY: 1,
  alpha: 1,
  ease: Elastic.easeInOut,
  delay: .1
});

TweenMax.to($rectangle, .5, {
  left: "0",
  ease: Power0.easeOut,
  delay: .5
});

TweenMax.to($arrow, .9, {
  scaleX: 1,
  scaleY: 1,
  top: "150px",
  right: "60px",
  alpha: 1,
  ease: Power2.easeOut,
  delay: .5
});
}

function ani_out(){
  TweenMax.to($circle, .5, {
    scaleX: 0,
    scaleY: 0,
    alpha: 0,
    ease: Elastic.easeInOut
  });
  TweenMax.to($cat, .4, {
    scaleX: 0,
    scaleY: 0,
    alpha: 0,
    ease: Elastic.easeInOut,
    delay: .1
  });
  TweenMax.to($rectangle, .2, {
    left: "-340px",
    ease: Power0.easeOut
  });
  TweenMax.to($arrow, .4, {
    scaleX: 0,
    scaleY: 0,
    top: "300px",
    right: "-20px",
    alpha: 0,
    ease: Power2.easeOut
  });

}

$(function() {
    ani_in();
  });

$("#cat-btn-wrap").on("click", function() {
    ani_out();
});




$("#cat-btn-wrap").on("mouseenter", function() {
  var duration = 1;
  TweenMax.to($arrow, duration / 4, {x:-25, y:-25, ease:Power2.easeOut});
  TweenMax.to($arrow, duration / 2, {x:0,   y:0,   ease:Bounce.easeOut, delay:duration / 4});
});