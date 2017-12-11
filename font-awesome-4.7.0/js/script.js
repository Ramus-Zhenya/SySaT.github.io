// ==========RD Mobile Menu===========
$(document).ready(function () {
    o.RDNavbar({}); // Additional options
  });


 
    
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

//
//
//		  $(document).ready(function(){
//			$('#products').slides({
//				
//			
//				effect: 'slide, fade',
//				crossfade: true,
//				slideSpeed: 200,
//				fadeSpeed: 500,
//				generateNextPrev: true,
//				generatePagination: false
//			});
//		});
$(document).ready(function() {
    $('.pgwSlideshow').pgwSlideshow({
      autoSlide: true
    });
});
    


	  $(document).ready(function() {
	  $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
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


