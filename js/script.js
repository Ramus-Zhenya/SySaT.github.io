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


$(window).load(function(){
$('#light-pagination').pagination({
     items: 100,
    itemsOnPage: 10,
    hrefTextPrefix: '',
    hrefTextSuffix: '.html',
    prevText: 'Начало',
    nextText: 'Конец',
    cssStyle: 'light-theme'
});

});
