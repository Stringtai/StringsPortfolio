"More animating stuff"
var count = 0;
var number = 10;

var interval = setInterval(function(){
     count++;
   if (count === number) { 
      clearInterval(interval);
    $('h1 ,h2').addClass('animationActive');		
  }
}, 50);




$.each($('.row'), function() { 
   var h = $(this).attr("data-height");
   $(this).css("height",h);
});

var sectionIds = {};		

$(".row-nav").each(function(){	
  var $this = $(this);			
  sectionIds[$this.attr("id")] = $this.first().offset().top -120;	
});			


var count2 = 0;
$(window).scroll(function(event){		

  var scrolled = $(this).scrollTop();		

  $(".row-nav").each(function(){

    var $this = $(this);

    if(scrolled >= $this.first().offset().top -120){
      $(".row-nav").removeClass("active");
      $this.addClass("active");	

      $(".animation").removeClass('animationActive');
      $this.find(".animation").addClass('animationActive');

    }
  });

  for (key in sectionIds){
    if (scrolled >= sectionIds[key]){
      $(".nav-btn").removeClass("active");
      var c = $("[data-row-id="+key+"]");
      c.addClass("active");

      var i = c.index();
      $('#nav-indicator').css('left', i*100 + 'px');							
    }
  }	


    if (scrolled > count2){  count2++;  } 
  else { count2--; }

  count2 = scrolled;		

  if(count2 == 0){
    $('h1 ,h2').addClass('animationActive');
  }else{
    $('h1 ,h2').removeClass('animationActive');
  }

});


$(".nav-btn").click(function(){		
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  var i = $(this).index();
  $('#nav-indicator').css('left', i*100 + 'px');			

  var name = $(this).attr("data-row-id");
  var id = "#" + name;
  var top = $(id).first().offset().top -60;			
  $('html, body').animate({scrollTop: top+'px'}, 300);

});