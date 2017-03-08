function draw(){
 var datos=[100,127,113,105,180,155,126,170,123,140,134,200,150,100,120,140,100];

  var pmm=['100','120','140','160','180','200','220'];
 var datMayor= Math.max.apply(null,datos);
 var alt=[];
 var max=300;
 var canvas = document.getElementById('grafico'); 
        if (canvas.getContext){ 
          var ctx = canvas.getContext('2d'); 
			
            ctx.beginPath(); 
			ctx.moveTo(50, 50); 
			ctx.lineTo(50,350); 
			ctx.lineTo(850,350); 
			ctx.lineTo(850,50);  
			ctx.stroke(); 
			ctx.closePath();

		 
ctx.beginPath(); 
		ctx.moveTo(50,datos[0]);

 for(var i=0; i<=datos.length-1; i++){
 			var medida=(datos[i]*max)/datMayor;
			alt[i]=medida;

			
			x=50+(50*i)+25;
			y=400-(alt[i]);

			if(x<850 && x>50 && y>50 && y<350 ){
				ctx.lineTo(x,y);
			
				ctx.textAlign="center";

				ctx.fillStyle="#000";

				ctx.fillText([i]+'km', x, 370);
				
			}else{
				ctx.stroke(); 
			}
 }
	ctx.stroke(); 
	ctx.closePath();

}
}