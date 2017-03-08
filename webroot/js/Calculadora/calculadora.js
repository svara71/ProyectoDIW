window.onload = function(){ //Acciones tras cargar la página
pantalla=document.getElementById("textopantalla"); //elemento pantalla de salida
}	

mostrarPantalla="0";
ampliaNum=true;
coma=false;
numEspera=0;
operando=null;
function numero(num) {
	if(mostrarPantalla=="0" || ampliaNum==true){
		pantalla.innerHTML=num;
		mostrarPantalla=num;
		if(num=="."){
			pantalla.innerHTML="0.";
			mostrarPantalla=num;
			coma=true;
		}
	}else{
		if(num=="." && coma==false){
			pantalla.innerHTML+=num;
			mostrarPantalla+=num;
			coma=true;
		}else if(num=="." && coma==true){

		}else{
			pantalla.innerHTML+=num;
			mostrarPantalla+=num;
		}
		
	}
	ampliaNum=false;
}
        
 function signo(op){
 	igual();
 	numEspera=mostrarPantalla;
 	operando=op;
 	ampliaNum=true;
 }
 function igual(){
 	if(operando==null){
 		pantalla.innerHTML=mostrarPantalla;
 	}else{
 		operacion=numEspera+operando+mostrarPantalla;
 		sol=eval(operacion);
 		pantalla.innerHTML=sol;
 		mostrarPantalla=sol;
 		operando=null;
 		ampliaNum=true;
 	}
 }
 function borrarNum(){
 	mostrarPantalla=0;
 	pantalla.innerHTML=mostrarPantalla;
 }
 function borrarTodo(){
 	mostrarPantalla=0;
 	pantalla.innerHTML=mostrarPantalla;
 	numEspera=0;
 	opernado=null;
 }