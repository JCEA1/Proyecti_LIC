//declaraciones de variables 

var images = new Array ();
var  precios = new Array ();
var  nombre = new Array ();
var detalles = new Array ();
var ficha= new Array ();
var modenvi = new Array ();
var modpago = new Array ();
var k;
var html;
//Asignando valores a cada posicion de las matrices para la informacion
images[1]="../img/Producto1.jpg";
precios[1]="1,200.80";
nombre[1]="Computadora Mac";
detalles[1]="APPLE IMAC MD093LL/A 21.5-INCH DESKTOP";
ficha[1]="Mac OS X Mountain Lion";
modenvi[1]="Los artículos pueden ser retirados en cualquiera de nuestras Sucursales dentro de El SalvadorLos artículos pueden ser retirados en cualquiera de nuestras Sucursales dentro de El Salvador";
modpago[1]="Las cuotas presentadas en anuncios o banners están calculadas en los periodos indicados y en base a un perfil de Credisiman Plus, para conocer la cuota exacta así como los diferentes periodos disponibles que aplica a su cuenta según su tipo de Credisiman puede verificarlo en siman.com al ingresar su forma de pago.";


images[2]="../img/Producto2.jpg";
precios[2]="$649.99";
nombre[2]="Computadora Lenovo";
detalles[2]="Intel Core i3-3220 Processor (3.3 GHz), Windows 8, 1 TB 7200 rpm Hard Drive ";
ficha[2]="Intel Core i3-3220 Processor (3.3 GHz)";
modenvi[2]="Los artículos pueden ser retirados en cualquiera de nuestras Sucursales dentro de El Salvador";
modpago[2]="Las cuotas presentadas en anuncios o banners están calculadas en los periodos indicados y en base a un perfil de Credisiman Plus, para conocer la cuota exacta así como los diferentes periodos disponibles que aplica a su cuenta según su tipo de Credisiman puede verificarlo en siman.com al ingresar su forma de pago.";

images[3]="../img/Producto3.jpg";
precios[3]="$520.99";
nombre[3]="Computadora Cooler Master";
detalles[3]="AMD fx_series_quad_core_fx_4100 Processor 3.6GHz, Windows 7 - Home Premium(64 bits)";
ficha[3]="CYBERPOWERPC GAMER ULTRA GUA880 DESKTOP";
modenvi[3]="Los artículos pueden ser retirados en cualquiera de nuestras Sucursales dentro de El Salvador";
modpago[3]="Las cuotas presentadas en anuncios o banners están calculadas en los periodos indicados y en base a un perfil de Credisiman Plus, para conocer la cuota exacta así como los diferentes periodos disponibles que aplica a su cuenta según su tipo de Credisiman puede verificarlo en siman.com al ingresar su forma de pago.";

images[4]="../img/Producto4.jpg";
precios[4]="$249.00";
nombre[4]="Laptp Samsung";
detalles[4]="Google Chrome OS, Samsung Exynos 5250 Dual Core Processor, 16 GB eMMC ";
ficha[4]="SAMSUNG CHROMEBOOK (WI-FI)";
modenvi[4]="Los artículos pueden ser retirados en cualquiera de nuestras Sucursales dentro de El Salvador";
modpago[4]="Las cuotas presentadas en anuncios o banners están calculadas en los periodos indicados y en base a un perfil de Credisiman Plus, para conocer la cuota exacta así como los diferentes periodos disponibles que aplica a su cuenta según su tipo de Credisiman puede verificarlo en siman.com al ingresar su forma de pago.";

images[5]="../img/Producto5.jpg";
precios[5]="$449.99";
nombre[5]="Laptop Toshiba";
detalles[5]=" Windows 7 Home Premium 64-bit,Intel Core i3-3110M 2.3 GHz Processor ";
ficha[5]="TOSHIBA SATELLITE C55-A5245 15.6-INCH LAPTOP";
modenvi[5]="Los artículos pueden ser retirados en cualquiera de nuestras Sucursales dentro de El Salvador";
modpago[5]="Las cuotas presentadas en anuncios o banners están calculadas en los periodos indicados y en base a un perfil de Credisiman Plus, para conocer la cuota exacta así como los diferentes periodos disponibles que aplica a su cuenta según su tipo de Credisiman puede verificarlo en siman.com al ingresar su forma de pago.";


images[6]="../img/Producto6.jpg";
precios[6]="$929.99";
nombre[6]="Laptop ACER";
detalles[6]="Windows 8, ";
ficha[6]="LENOVO IDEAPAD YOGA 13 13.3-INCH CONVERTIBLE TOUCHSCREEN ULTRABOOK";
modenvi[6]="Los artículos pueden ser retirados en cualquiera de nuestras Sucursales dentro de El Salvador";
modpago[6]="Las cuotas presentadas en anuncios o banners están calculadas en los periodos indicados y en base a un perfil de Credisiman Plus, para conocer la cuota exacta así como los diferentes periodos disponibles que aplica a su cuenta según su tipo de Credisiman puede verificarlo en siman.com al ingresar su forma de pago.";

images[7]="../img/Producto7.jpg";
precios[7]="$299.00";
nombre[7]=" Tablet Windows";
detalles[7]="Tablet Windows, Intel Core i5-3337U ULV Processor (1.8 GHz),";
ficha[7]="GOOGLE NEXUS 7 FHD TABLET";
modenvi[7]="Los artículos pueden ser retirados en cualquiera de nuestras Sucursales dentro de El Salvador";
modpago[7]="Las cuotas presentadas en anuncios o banners están calculadas en los periodos indicados y en base a un perfil de Credisiman Plus, para conocer la cuota exacta así como los diferentes periodos disponibles que aplica a su cuenta según su tipo de Credisiman puede verificarlo en siman.com al ingresar su forma de pago.";


images[8]="../img/Producto8.jpg";
precios[8]="$399.99";
nombre[8]="Tablet Asus";
detalles[8]="Windows 8, Intel Intel Atom Z2760 Saltwell Dual-core 1.8 GHz";
ficha[8]="ASUS VIVOTAB SMART BLACK OFFICE 2013 H&S ME400C-C2-BK";
modenvi[8]="Los artículos pueden ser retirados en cualquiera de nuestras Sucursales dentro de El Salvador";
modpago[8]="Las cuotas presentadas en anuncios o banners están calculadas en los periodos indicados y en base a un perfil de Credisiman Plus, para conocer la cuota exacta así como los diferentes periodos disponibles que aplica a su cuenta según su tipo de Credisiman puede verificarlo en siman.com al ingresar su forma de pago.";


images[9]="../img/Producto9.jpg";
precios[9]="$585.28";
nombre[9]="Tablet MAC";
detalles[9]="Apple iOS 6 ,Dual-Core A6X Chip with Quad-Core Graphics";
ficha[9]="APPLE IPAD WITH RETINA DISPLAY MD511LL/A";
modenvi[9]="Los artículos pueden ser retirados en cualquiera de nuestras Sucursales dentro de El Salvador";
modpago[9]="Las cuotas presentadas en anuncios o banners están calculadas en los periodos indicados y en base a un perfil de Credisiman Plus, para conocer la cuota exacta así como los diferentes periodos disponibles que aplica a su cuenta según su tipo de Credisiman puede verificarlo en siman.com al ingresar su forma de pago.";


images[10]="../img/Producto10.jpg";
precios[10]="$124.99";
nombre[10]="Samsun Galaxy SIII";
detalles[10]="Android 4.0,I9220 ";
ficha[10]="Samsun Galaxy SIII";
modenvi[10]="Los artículos pueden ser retirados en cualquiera de nuestras Sucursales dentro de El Salvador";
modpago[10]="Las cuotas presentadas en anuncios o banners están calculadas en los periodos indicados y en base a un perfil de Credisiman Plus, para conocer la cuota exacta así como los diferentes periodos disponibles que aplica a su cuenta según su tipo de Credisiman puede verificarlo en siman.com al ingresar su forma de pago.";


images[11]="../img/Producto11.jpg";
precios[11]="$141.95";
nombre[11]="Samsun Galaxy Ace";
detalles[11]="World Smartphone International Version";
ficha[11]="SAMSUNG GALAXY ACE S5830 US 3G";
modenvi[11]="Los artículos pueden ser retirados en cualquiera de nuestras Sucursales dentro de El Salvador";
modpago[11]="Las cuotas presentadas en anuncios o banners están calculadas en los periodos indicados y en base a un perfil de Credisiman Plus, para conocer la cuota exacta así como los diferentes periodos disponibles que aplica a su cuenta según su tipo de Credisiman puede verificarlo en siman.com al ingresar su forma de pago.";


images[12]="../img/Producto12.jpg";
precios[12]="$186.81";
nombre[12]="Celular HTC";
detalles[12]="Windows Phone OS 7.5";
ficha[12]="HTC X310E TITAN";
modenvi[12]="Los artículos pueden ser retirados en cualquiera de nuestras Sucursales dentro de El Salvador";
modpago[12]="Las cuotas presentadas en anuncios o banners están calculadas en los periodos indicados y en base a un perfil de Credisiman Plus, para conocer la cuota exacta así como los diferentes periodos disponibles que aplica a su cuenta según su tipo de Credisiman puede verificarlo en siman.com al ingresar su forma de pago.";

//Segun id recibido mostramos informacion
function mostrarDatos(id){


//switch en el cual asignamos acciones.

switch (id){
case ("boton1"):
//Aqui pones que queres mostrar al precionar este boton y quitas los alerts 
k=1;
break;
case "boton2":
k=2;
break;
case "boton3":
k=3;
break;
case "boton4":
k=4;
break;
case "boton5":
k=5;
break;
case "boton6":
k=6;
break;
case "boton7":
k=7;
break;
case "boton8":
k=8;
break;
case "boton9":
k=9;
break;
case "boton10":
k=10;
break;
case "boton11":
k=11;
break;
case "boton12":
k=12;
break;
}
		html = "<html>\n<head>\n<title>\nInformaci&oacute;n de Producto\n</title>\n";
		html += "<link rel=\"stylesheet\" href=\"../Estilos/stylo2.css\">\n</head>\n<body>\n";
		html += "<link rel=\"stylesheet\" href=\"../Estilos/stylo1.css\">\n</head>\n<body>\n";
		html += "<link rel=\"stylesheet\" href=\"../Estilos/prue.css\">\n</head>\n<body>\n";
		html += "<link rel=\"stylesheet\" href=\"../Estilos/prue2.css\">\n</head>\n<body>\n";
		document.write(html);

		document.write("<table border='0' align='center'>");
		document.write("<tr>");
		document.write("<td id=\"eco\">");
		document.write("<div class=\"redondear\">");
		document.write("<div class='imagpl' style='width:263px; height:199px; z-index:2'>");
		document.write("<img alt=\"\" src=\"" + images[k] + "\" class=\"img\">");
		document.write("</div>");
		document.write("</div>	");
		document.write("</td>");
		//----------------------------------------
		document.write("<td>");
		document.write("<div class=\"medio\">");
		document.write("<h2 class=\"pa\">"+ nombre[k] + "<h2>") ;
		document.write("<p class=\"ps\">" + precios[k] + "</p>");
		document.write("</div>");
		document.write("</td>");
		//--------------------------------------------
		document.write("<td id=\"ecomoda\">");
		document.write("<div class=\"jj\">");
		document.write("<p  class=\"ps\">Detalles</p>");
		document.write("<div class=\"desple\">");
		document.write("<input type=\"checkbox\" id=\"paneltoggle\" />");
		document.write("<label for=\"paneltoggle\" title=\"Click \"></label>");
		document.write("<div class=\"content\">");
		document.write("<p>" + detalles[k] + "</p>");
		document.write("</div>");
		document.write("</div>");
		document.write("</div>");
		//--
		
		document.write("<div class=\"jj\">");
		document.write("<p  class=\"ps\">Ficha</p>");
		document.write("<div class=\"desple\">");
		document.write("<input type=\"checkbox\" id=\"paneltoggle\" />");
		document.write("<label for=\"paneltoggle\" title=\"Click \"></label>");
		document.write("<div class=\"content\">");
		document.write("<p>" + ficha[k] + "</p>");
		document.write("</div>");
		document.write("</div>");
		document.write("</div>");
		//--
	   
		document.write("<div class=\"jj\">");
		document.write("<p  class=\"ps\">Modo de envio</p>");
		document.write("<div class=\"desple\">");
		document.write("<input type=\"checkbox\" id=\"paneltoggle\" />");
		document.write("<label for=\"paneltoggle\" title=\"Click \"></label>");
		document.write("<div class=\"content\">");
		document.write("<p>" + modenvi[k] + "</p>");
		document.write("</div>");
		document.write("</div>");
		document.write("</div>");
		//--
		
		document.write("<div class=\"jj\">");
		document.write("<p  class=\"ps\">Modo de pago</p>");
		document.write("<div class=\"desple\">");
		document.write("<input type=\"checkbox\" id=\"paneltoggle\" />");
		document.write("<label for=\"paneltoggle\" title=\"Click \"></label>");
		document.write("<div class=\"content\">");
		document.write("<p>" + modpago[k] + "</p>");
		document.write("</div>");
		document.write("</div>");
		document.write("</div>");
		//--
		document.write("</td>");
		document.write("</tr>");
		document.write("</table>");
		//--
		document.write("<input type=\"button\" id=\"btnregresar\" value=\"Regresar\" onclick=\"document.location.reload()\"/>")
		//--
		document.write("</html>");
}