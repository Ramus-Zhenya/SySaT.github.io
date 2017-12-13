// ==========RD Mobile Menu===========
$(document).ready(function () {
    o.RDNavbar({}); // Additional options
  });

//====================================================================
 
    
$(function(){
 $('.Headre__pic__sl').slick({
 dots: true, 
 slidesToShow: 1,
 slidesToScroll: 1,
	 arrows:false,
	 autoplay: true,
	 autoplaySpeed: 2000,
	 dots: true,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
 responsive:[{
    breakpoint: 1024, 
     settings:{
     dots: false
 }
 }]
 	});
});




    
//====================================================================
$(document).ready(function() {
	  $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 1700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});

//====================================================================
 $(function(){
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		var link = this.el.find('.link');
		link.on('click', {el: this.el, multiple: this.multiple},this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();
		$next.slideToggle();
		$this.parent().toggleClass('open');
		if(!e.data.multiple){
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		}
}
	var accordion = new Accordion($('#accordion'), false);
});  


//====================================================================

 $(".show-image").click(function() {
    event.preventDefault();
    var mainImage = $(this).index(); 
    $('.images_big img').removeClass('curent');
    $('.images_big img').eq(mainImage).addClass('curent'); 
}); 


//====================================================================

$(function() {

var el = document.getElementById('sys1');
spanize(el);

function spanize(el) {
	el.innerHTML =  el.innerHTML.replace(/(.)/g, '<span>$1</span>');
}
var el = document.getElementById('sys2');
spanize(el);

function spanize(el) {
	el.innerHTML =  el.innerHTML.replace(/(.)/g, '<span>$1</span>');
}
var el = document.getElementById('sys3');
spanize(el);

function spanize(el) {
	el.innerHTML =  el.innerHTML.replace(/(.)/g, '<span>$1</span>');
}
});
//====================================================================




//====================================================================






//====================================================================
var nav = document.getElementsByClassName('stuck_container')[0];
var prevPos = window.scrollY;
setInterval(detect, 1000);
function detect() {
    var currPos = window.scrollY;
    var scrolled = prevPos - currPos;
    if (scrolled < 0) {
        nav.style.top = '-130px';
    }
    if (scrolled > 0) {
        nav.style.top = '0px';
    }
    prevPos = currPos;
}

 
//====================================================================



//====================================================================





//====================================================================





//====================================================================







