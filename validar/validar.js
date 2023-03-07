function validarn(e)
{
    var teclado=(document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron =/[0-9\d.]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
   
}
function validarL(e) {
    var teclado2 = event.keyCode;
    if ((teclado2  > 64 && teclado2  < 91) || (teclado2  > 96 && teclado2  < 123) || teclado2  == 8  )
      return true;
    else return false;
   }
//Primer Problema:
function interes()
{
    var letras=/\D\./;
    var valor= document.getElementById("cantidad").value;
    if(letras.test(valor)){
        alert("Ingresa números, no se admiten letras");
        return false;
    }
    else{
      //var letras=/\D\.[0-9]/;
        var resul= parseFloat(valor);
    if(( resul>0)&&(resul<=1000000000000000)) {
        var interes= resul* 0.082;
        var total = resul + interes;
        document.getElementById("cantidadi").value= "$"+ total; 
        var total2 = total*36;
        document.getElementById("cantidadt").value= "$"+ total2;
}
else{
    alert("Favor de ingresar una cantidad válida");
    formulario.cantidad.focus();}
}
}
function borrar()
{
document.getElementById("cantidad").value="";
document.getElementById("cantidadi").value="";
document.getElementById("cantidadt").value="";
}
//-----------------------------------------------//
//Segundo Problema:
function interes2()
{
    var letras=/\D\./;
    var valor= document.getElementById("cantidadp2").value;
    var valor1= document.getElementById("venta1").value;
    var valor2= document.getElementById("venta2").value;
    var valor3= document.getElementById("venta3").value;
    var valor4= document.getElementById("venta4").value;
    var valor5= document.getElementById("venta5").value;

    if(letras.test(valor)|| letras.test(valor1)||letras.test(valor2)|| letras.test(valor3)||letras.test(valor4)|| letras.test(valor5)){
        alert("Ingresa números, no se admiten letras");
        formulario2.cantidadp2.focus();
        return false;
    }
    else{
        var resul= parseInt(valor);
        var resul1= parseInt(valor1);
        var resul2= parseInt(valor2);
        var resul3= parseInt(valor3);
        var resul4= parseInt(valor4);
        var resul5= parseInt(valor5);
    if(( resul>0)&&(resul<=1000000000000000000)&&( resul1>0)&&(resul1<=1000000000000000000)&&( resul2>0)&&(resul2<=1000000000000000000)
    &&( resul3>0)&&(resul3<=1000000000000000000)&&( resul4>0)&&(resul4<=1000000000000000000)&&( resul5>0)&&(resul5<=1000000000000000000)) 
    {
        var sumaV1=resul1 * 0.35;
        var sumaV2=resul2 * 0.35;
        var sumaV3=resul3 * 0.35;
        var sumaV4=resul4 * 0.35;
        var sumaV5=resul5 * 0.35;
        var totalV= sumaV1+sumaV2+sumaV3+sumaV4+sumaV5;
        var descuento=totalV*0.12;
        var totalp2 = resul+totalV-descuento;
        document.getElementById("cantidadt2").value= "$"+ totalp2;
}
else{
    alert("Llena todos los campos con una cantidad válida.");
    formulario.cantidad.focus();}
}
}
function borrar2()
{
document.getElementById("cantidadp2").value="";
document.getElementById("cantidadt2").value="";
document.getElementById("venta1").value="";
document.getElementById("venta2").value="";
document.getElementById("venta3").value="";
document.getElementById("venta4").value="";
document.getElementById("venta5").value="";
}
//-----------------------------------------------//
//Tercer Problema:
function borrar3()
{
document.getElementById("Nproduct").value="";
document.getElementById("Mproduct").value="";
document.getElementById("Tproduct").value="";
document.getElementById("Precioss").value="";
document.getElementById("total").value="";
}
function validarp3()
{
    var nombre= document.getElementById("Nproduct").value;
    var marca= document.getElementById("Mproduct").value;
    var tipo= document.getElementById("Tproduct").value;
    var precio= document.getElementById("Precioss").value;
    var Evitarletras= /\D\./;
    var Enumeros = /\d/;
  if ( Evitarletras.test(precio) || Enumeros.test(nombre) ||  Enumeros.test(marca) || Enumeros.test(tipo) )
   {
    alert("Llena todos los campos con una cantidad válida (Checa que no haya letras o numeros donde no se pidan).");
    formulario3.Nproduct.focus();
        return false;
  } else {
    nombre = String(nombre);
    marca = String(marca);
    tipo = String(tipo);
    precio= parseInt(precio);
    if ((precio> 0 && precio <=1000000000000000000000000) && (nombre != "") && (marca != "")&&(tipo != ""))
     {
        if ( nombre.length < 50 && marca.length < 50 && tipo.length < 50) 
        {
          var precioF;
          var descuento;
          switch (tipo) {
            case "Papa":
              descuento = precio * 0.02;
              precioF = precio - descuento;
              document.getElementById("total").value="$"+ precioF; 
              alert("El producto tiene un descuento de 2%");
              break;
            case "Pastelito":
              descuento = precio * 0.1;
              precioF = precio - descuento;
              document.getElementById("total").value="$"+ precioF; 
              alert("El producto tiene un descuento de 10%");
              break;
            case "Lacteo":
              descuento = precio* 0.075;
              precioF = precio - descuento;
              document.getElementById("total").value="$"+ precioF; 
              alert("El producto tiene un descuento de 7.5%");
              break;
            default:
              precioF = precio;
              document.getElementById("total").value="$"+ precioF; 
          } 
        } else {
          alert("Ingresa informacion válida");
          return false;
        }
      } else {
        alert("No dejes en blanco los campos.");
        return false;
      }
    } 
}
//-----------------------------------------------//
//Cuarto Problema:
function borrar4()
{
document.getElementById("1Parcial").value="";
document.getElementById("2Parcial").value="";
document.getElementById("3Parcial").value="";
document.getElementById("Efinal").value="";
document.getElementById("Tfinal").value="";
document.getElementById("Calificacion").value="";
}
function validar4()
{
 var letras=/\D\./;
 var cal1= document.getElementById("1Parcial").value;
 var cal2= document.getElementById("2Parcial").value;
 var cal3= document.getElementById("3Parcial").value;
 var calE= document.getElementById("Efinal").value;
 var calT= document.getElementById("Tfinal").value;

 if(letras.test(cal1)|| letras.test(cal2)||letras.test(cal3)|| letras.test(calE)||letras.test(calT)){
     alert("Ingresa números, no se admiten letras");
     return false;
   }else{
       var resul1= parseFloat(cal1);
       var resul2= parseFloat(cal2);
       var resul3= parseFloat(cal3);
       var resul4= parseFloat(calE);
       var resul5= parseFloat(calT);
if(( resul1>=0)&&(resul1<=10)&&(resul2>=0)&&(resul2<=10)&&( resul3>=0)&&(resul3<=10)&&( resul4>=0)&&(resul4<=10)&&( resul5>=0)&&(resul5<=10)) 
{
 var promedio = (resul1+resul2+resul3)/3;
 var porcentajePromedio = promedio*0.55;
 var porcExamen= resul4*0.30;
 var porcTrabajo= resul5*0.15;
 var calificionFinal= porcentajePromedio+porcExamen+porcTrabajo;
 document.getElementById("Calificacion").value= calificionFinal;
}
else{
   alert("Llena todos los campos con una calificación válida (0-10).");
}
}
}
//-----------------------------------------------//
//Quinto Problema:
function borrar5() 
{
 document.getElementById("hombres").value="";
document.getElementById("porcentajeH").value="";
document.getElementById("mujeres").value="";
document.getElementById("porcentajeM").value="";
document.getElementById("porcentajeF").value="";
document.getElementById("total").value="";
}
function validar5()
{
 var letras=/\D/;
 var hombres= document.getElementById("hombres").value;
 var mujeres= document.getElementById("mujeres").value;

 if(letras.test(hombres)|| letras.test(mujeres)){
     alert("Ingresa números enteros, no se admiten letras ni decimales");
     return false;
   }else{
       var resul1= parseInt(hombres);
       var resul2= parseInt(mujeres);
if((resul1>=0)&&(resul1<=100)&&(resul2>=0)&&(resul2<=100)) 
{
 var suma = resul1+resul2;
 var hombres= (resul1/suma)*100;
 var mujeres= (resul2/suma)*100;
 document.getElementById("total").value= suma;
 document.getElementById("porcentajeF").value= "100%";
 document.getElementById("porcentajeH").value= hombres+"%";
 document.getElementById("porcentajeM").value= mujeres+"%";
}
else{
   alert("Llena todos los campos o checa que no haya mas de 100 alumnos.");
}
}
}
//-----------------------------------------------//
//Sexto Problema:
function borrar6()
{
document.getElementById("miento").value="";
document.getElementById("Edad").value="";
}
function validar6()
{
 var fecha = new Date(formulario6.fecha.value);
   var hoy = new Date();
   var mes = fecha.getMonth()+1;
   var dia = fecha.getDate();

   if(fecha > hoy){
       alert("Fecha inválida");
       formulario.fecha.focus();
       return false;
   }

   if((dia<1) || (dia>31)){
       alert("Favor de ingresar un día válido, no exiten meses con 0 o 32 días...")
       formulario.fecha.focus();
       return false;
   }

   if((mes == 2) && (dia > 29)){
       alert("Febrero solo cuenta con 28 días (29 días si es bisiseto), checa que la fecha este bien")
       formulario.fecha.focus();
       return false;
   }
   if((mes == 4) && (dia > 30)){
       alert("Abril solo cuenta con 30 días")
       formulario.fecha.focus();
       return false;
   }
   if((mes == 6) && (dia > 30)){
       alert("Junio solo cuenta con 30 días")
       formulario.fecha.focus();
       return false;
   }
   if((mes == 9) && (dia > 30)){
       alert("Septiembre solo cuenta con 30 días")
       formulario.fecha.focus();
       return false;
   }
   if((mes == 11) && (dia > 30)){
       alert("Noviembre solo cuenta con 30 días")
       formulario.fecha.focus();
       return false;
   }

   var fechaInicio = hoy.getTime();
   var fechaFin = fecha.getTime();
   let dife = fechaInicio - fechaFin;
   var difeanios = dife / (1000*60*60*24*365);
   difeanios= Math.trunc(difeanios);

   document.getElementById("Edad").value = (difeanios);
}
//-----------------------------------------------//
//Septimo Problema:
function borrar7()
 {
    document.getElementById("Numero1").value="";
    document.getElementById("Numero2").value="";
    document.getElementById("operacion").value="";
}
function validar7()
 {
    var letras=/\D/;
    var primernumero= document.getElementById("Numero1").value;
    var segundonumero= document.getElementById("Numero2").value;
  
    if(letras.test(primernumero)|| letras.test(segundonumero)){
        alert("Ingresa números enteros, no negativos, no letras ni decimales");
        return false;
      }else{
          var resul1= parseInt(primernumero);
          var resul2= parseInt(segundonumero);
if((resul1>0)&&(resul1<=1000)&&(resul2>0)&&(resul2<=1000))
{
  if(resul1==resul2) 
  {
    var operacion= resul1*resul2;
    alert("Como son iguales se van a multiplicar");
    document.getElementById("operacion").value= operacion;
  }else{
    if(resul1>resul2)
    {
       var operacion= Math.pow(resul1, resul2);
       alert("Como el primero es mayor que el segundo, se hace una potencia");
        document.getElementById("operacion").value= operacion;
    }else{
        if(resul1<resul2)
        {
            var operacion= resul2/resul1;
            alert("Como el segundo es mayor que el primero, se dividen");
            document.getElementById("operacion").value= operacion;
        }
    }
  }
}
else{
    alert("Llena todos los campos, checa que no haya un número mayor a 1000 o igual a 0");}}
}
//-----------------------------------------------//
//Octavo Problema:
function borrar8()
{
    document.getElementById("1Numero").value="";
    document.getElementById("2Numero").value="";
    document.getElementById("3Numero").value="";
    document.getElementById("resultado").value="";

}
function validar8()
{
    
    var letras=/\D\./;
    var primernumero= document.getElementById("1Numero").value;
    var segundonumero= document.getElementById("2Numero").value;
    var tercernumero= document.getElementById("3Numero").value;
  
    if(letras.test(primernumero)|| letras.test(segundonumero)||letras.test(tercernumero)){
        alert("Ingresa números, no se admiten letras");
        return false;
      }else{
          var resul1= parseFloat(primernumero);
          var resul2= parseFloat(segundonumero);
          var resul3= parseFloat(tercernumero);
if((resul1>=0)&&(resul1<=1000)&&(resul2>=0)&&(resul2<=1000)&&(resul3>=0)&&(resul3<=1000))
{
    if (resul1 > resul2) {
		var mayor = resul1;
	}else{
		mayor = resul2;
	}
	if (mayor > resul3) {
		mayor = mayor;
	}else{
		mayor = resul3;
	}
	document.getElementById("resultado").value=mayor;
}
else{
    alert("Llena todos los campos, checa que no haya un número mayor a 1000");}}
}
//-----------------------------------------------//
//Noveno Problema:
function borrar9()
{
    document.getElementById("Dinero").value="";
    document.getElementById("Horas").value="";
    document.getElementById("total").value="";
}
function validar9()
{
    
    var letras=/\D\./;
    var primernumero= document.getElementById("Dinero").value;
    var segundonumero= document.getElementById("Horas").value;

if(letras.test(primernumero)|| letras.test(segundonumero)){
        alert("Ingresa números, no se admiten letras");
        return false;
      }else{
          var dinero= parseFloat(primernumero);
          var horas= parseFloat(segundonumero);
if((dinero>=0)&&(dinero<=168)&&(horas>=0)&&(horas<=168))
{
   if(horas==40||horas<40)
   {
    var resul= horas*dinero;
    alert("Al no haber horas extra, se pagan normal");
    document.getElementById("total").value="$"+ resul;
   }
   if((horas>40)&&(horas<=48))
   {
    resta=horas-40;
    multi=resta*(2*dinero);
    resul=40*dinero + multi;
    alert("Al estar en el rango de 40-48 se pagan las horas extra al doble");
    document.getElementById("total").value="$"+ resul;
   }
   if(horas>=49)
   {
    resta=horas-48;
    multi=8*(2*dinero);
    multi2=resta*(3*dinero);
    resul=(multi)+(40*dinero)+multi2;
    alert("Al ser mas de 48 horas trabajadas se pagan 8 horas al doble y el resto al triple");
    document.getElementById("total").value="$"+ resul;
   }
}
else{
    alert("Llena todos los campos, checa que no haya un número mayor a 168 en el campo horas");}}
}
//-----------------------------------------------//
//Decimo Problema:
function borrar10()
{
    document.getElementById("Salario").value="";
    document.getElementById("anos").value="";
    document.getElementById("resultado1").value="";
}
function validar10()
{
    
    var letras=/\D\./;
    var primernumero= document.getElementById("Salario").value;
    var segundonumero= document.getElementById("anos").value;

if(letras.test(primernumero)|| letras.test(segundonumero)){
        alert("Ingresa números, no se admiten letras");
        return false;
      }else{
          var salario= parseFloat(primernumero);
          var anos= parseFloat(segundonumero);
if((salario>=0)&&(salario<=100000000000000000)&&(anos>=0)&&(anos<=100))
{
   if(anos<1)
   {
    var resul=salario*0.05;
    document.getElementById("resultado1").value="$"+ resul;
   }
   if((anos>=1)&&(anos<2))
   {
    resul=salario*0.07;
    document.getElementById("resultado1").value="$"+ resul;
   }
   if((anos>=2)&&(anos<5))
   {
    resul=salario*0.10;
    document.getElementById("resultado1").value="$"+ resul;
   }
   if((anos>=5)&&(anos<10))
   {
    resul=salario*0.15;
    document.getElementById("resultado1").value="$"+ resul;
   }
   if(anos>=10)
   {
    resul=salario*0.20;
    document.getElementById("resultado1").value="$"+ resul;
   }
 
}
else{
    alert("Llena todos los campos, checa que no haya un número mayor a 100 en el años");}}
}