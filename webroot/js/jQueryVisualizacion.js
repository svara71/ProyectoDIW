 $(document).ready(function(){

 	$('.one-time02').slick({
					infinite: false,
					arrows: true,
					dots: true,
  					slidesToScroll: 1,
  					slidesToShow: 4,
  					
  					
				  	responsive: [
				    {
				      breakpoint: 700,
				      settings: {
				         dots: true,	
						 infinite: false,
						  arrows: false,
						  autoplay: true,
						  autoplaySpeed: 3000,
						  slidesToShow: 3,
						  slidesToScroll:3
						 
  						 }
				      },
				      {
				      breakpoint: 600,
				      settings: {
				         dots: true,	
						 infinite: false,
						  arrows: false,
						  autoplay: true,
						  autoplaySpeed: 3000,
						  slidesToShow: 2,
						  slidesToScroll:2
						 
  						 }
				      },
				      {
				     breakpoint: 400,
				      settings: {
				         dots: true,	
						 infinite: false,
						  arrows: false,
						  autoplay: true,
						  autoplaySpeed: 2000,
						  centerMode: true,
						  centerPadding:'30px',
						  slidesToShow: 1,
						  slidesToScroll:1
						 
  						
				      }
				    }
				  ]
				 	
				});			   
	
		 var map = new GMaps({
				      el: '#mapa',
				      lat: 42.001091,
				      lng: -5.668193
		});

});

