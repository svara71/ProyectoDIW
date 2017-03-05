 $(document).ready(function(){
				
			
				$('.one-time').slick({
					infinite: true,
					arrows: false,
					dots: true,
					autoplay: true,
  					autoplaySpeed: 3000,
  					slidesToScroll: 1,
  					slidesToShow: 1,
  					
  					
				  	responsive: [
				    {
				      breakpoint: 700,
				      settings: {
				         dots: true,	
						 infinite: true,
						 autoplay: true,
  						 autoplaySpeed: 3000,
						  slidesToShow: 1,
						  slidesToScroll: 1,
						 
  						
				      }
				    }
				  ]
				 	
				});			   
	
	
				$('#botonSesion').on('click',function(){
				      $('#sesion').toggle();
				   });	
				$('#contenido').on('click',function(){
				      $('#sesion').hide();
				   });	

				

			document.getElementById('check').onclick = function() {
			    // access properties using this keyword
			    if ( this.checked ) {
			        // if checked ...
			       		var user = document.getElementById("user").value;
						var pass = document.getElementById("pass").value;
						/*Guardando los datos en el LocalStorage*/
						localStorage.setItem("Usuario", user);
						localStorage.setItem("Contraseña", pass);
						
			    } else {
			        // if not checked ...
			    }
			};
 });
