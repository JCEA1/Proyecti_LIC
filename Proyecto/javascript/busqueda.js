	/*
	Declaracion de variables de tipo arreglo de datos
	Guardan los datos de los articulos del catalogo
	*/
	
	/*Declaramos una matriz que hará lo siguiente:
	1. Identificar Numero de Producto en Evaluacion o Muestra
	2. Servir de identificador de Objeto
	*/
	var Producto = new Array(10);
	
	//Inicializamos una Base de Datos Estática e Interna
	var NombresProductos = new Array();
	var SistemaProductos = new Array();
	var ProcesamientoProductos = new Array();
	var AlmacenamientoProductos = new Array();
	var ColoresProductos = new Array();
	var AccesoriosProductos = new Array();
	var PrecioProductos = new Array();
	
	//Asigna los valores de dato de el primer articulo
	NombresProductos[1] = "APPLE IMAC MD093LL/A 21.5-INCH DESKTOP";
	SistemaProductos[1] = "Mac OS X Mountain Lion";
	ProcesamientoProductos[1] = "2.7 GHz quad-core Intel Core i5";
	AlmacenamientoProductos[1] ="1 TB Hard Drive";
	ColoresProductos[1] = "Negro , Blanco";
	AccesoriosProductos[1] = "Audifonos";
	PrecioProductos[1] = "$1,200.80";
	
	//Asigna los valores de dato de el segundo articulo
	NombresProductos[2] = "LENOVO IDEACENTRE B540 ALL-IN-ONE TOUCHSCREEN DESKTOP";
	SistemaProductos[2] = "Windows 8";
	ProcesamientoProductos[2] = "Intel Core i3-3220 Processor (3.3 GHz)";
	AlmacenamientoProductos[2] ="1 TB 7200 rpm Hard Drive";
	ColoresProductos[2] = "Negro";
	AccesoriosProductos[2] = "Protector de Pantalla";
	PrecioProductos[2] = "$649.99";
	
	//Asigna los valores de dato de el tercer articulo
	NombresProductos[3] = "CYBERPOWERPC GAMER ULTRA GUA880 DESKTOP";
	SistemaProductos[3] = "Windows 7 - Home Premium(64 bits)";
	ProcesamientoProductos[3] = "AMD fx_series_quad_core_fx_4100 Processor 3.6GHz";
	AlmacenamientoProductos[3] ="1024GB 7200rpm Hard Drive";
	ColoresProductos[3] = "Negro y Azul";
	AccesoriosProductos[3] = "Llavero de Game Ultra";
	PrecioProductos[3] = "$520.99";
	
	//Asigna los valores de dato de el cuarto articulo
	NombresProductos[4] = "SAMSUNG CHROMEBOOK (WI-FI)";
	SistemaProductos[4] = "Google Chrome OS";
	ProcesamientoProductos[4] = "Samsung Exynos 5250 Dual Core Processor";
	AlmacenamientoProductos[4] ="16 GB eMMC ";
	ColoresProductos[4] = "Blanco";
	AccesoriosProductos[4] = "Cargador";
	PrecioProductos[4] = "$249.00";
	
	//Asigna los valores de dato de el quinto articulo
	NombresProductos[5] = "TOSHIBA SATELLITE C55-A5245 15.6-INCH LAPTOP";
	SistemaProductos[5] = "Windows 7 Home Premium 64-bit";
	ProcesamientoProductos[5] = "Intel Core i3-3110M 2.3 GHz Processor";
	AlmacenamientoProductos[5] ="500 GB 5400 rpm Hard Drive";
	ColoresProductos[5] = "Negro Satin";
	AccesoriosProductos[5] = "Cargador";
	PrecioProductos[5] = "$449.99";
	
	//Asigna los valores de dato de el sexto articulo
	NombresProductos[6] = "LENOVO IDEAPAD YOGA 13 13.3-INCH CONVERTIBLE TOUCHSCREEN ULTRABOOK";
	SistemaProductos[6] = "Windows 8";
	ProcesamientoProductos[6] = "Intel Core i5-3337U ULV Processor (1.8 GHz)";
	AlmacenamientoProductos[6] ="128 GB Solid-State Drive";
	ColoresProductos[6] = "Gris";
	AccesoriosProductos[6] = "Cargador";
	PrecioProductos[6] = "$929.99";
	
	//Asigna los valores de dato de el septimo articulo
	NombresProductos[7] = "GOOGLE NEXUS 7 FHD TABLET";
	SistemaProductos[7] = "Powered by Android 4.3";
	ProcesamientoProductos[7] = "Quad-core speed and performance, 2GB RAM";
	AlmacenamientoProductos[7] ="32 GB";
	ColoresProductos[7] = "Negro";
	AccesoriosProductos[7] = "Cargador";
	PrecioProductos[7] = "$299.00";
	
	//Asigna los valores de dato de el octavo articulo
	NombresProductos[8] = "ASUS VIVOTAB SMART BLACK OFFICE 2013 H&S ME400C-C2-BK";
	SistemaProductos[8] = "Windows 8";
	ProcesamientoProductos[8] = "Intel Intel Atom Z2760 Saltwell Dual-core 1.8 GHz";
	AlmacenamientoProductos[8] ="64 GB Flash Memory";
	ColoresProductos[8] = "Negro";
	AccesoriosProductos[8] = "Cargador";
	PrecioProductos[8] = "$399.99 ";
	
	//Asigna los valores de dato de el noveno articulo
	NombresProductos[9] = "APPLE IPAD WITH RETINA DISPLAY MD511LL/A";
	SistemaProductos[9] = "Apple iOS 6";
	ProcesamientoProductos[9] = "Dual-Core A6X Chip with Quad-Core Graphics";
	AlmacenamientoProductos[9] ="32 GB Capacity";
	ColoresProductos[9] = "Negro y Blanco";
	AccesoriosProductos[9] = "Cargador";
	PrecioProductos[9] = "$585.28";
	
	//Asigna los valores de dato de el decimo articulo
	NombresProductos[10] = "I9220";
	SistemaProductos[10] = "Android 4.0";
	ColoresProductos[10] = "Negro y Blanco";
	AccesoriosProductos[10] = "Cargador y Audifonos";
	PrecioProductos[10] = "$124.99";
	
	//Asigna los valores de dato de el onceavo articulo
	NombresProductos[11] = "SAMSUNG GALAXY ACE S5830 US 3G";
	SistemaProductos[11] = "World Smartphone International Version";
	ColoresProductos[11] = "Negro";
	AccesoriosProductos[11] = "Cargador y Audifonos";
	PrecioProductos[11] = "$141.95";
	
	//Asigna los valores de dato de el doceavo articulo
	NombresProductos[12] = "HTC X310E TITAN";
	SistemaProductos[12] = "Windows Phone OS 7.5";
	ColoresProductos[12] = "Negro";
	AccesoriosProductos[12] = "Cargador y Audifonos";
	PrecioProductos[12] = "$186.81";
	
	//Inicializamos nuestra clase mediante la cual crearemos nuestros objetos
	function Compra(nombre, sistema, procesamiento, almacenamiento, colores, accesorios, precio){
	
	//Definimos las propiedades del Producto en Venta
	this.Nombre = nombre;
	this.Sistema = sistema;
	this.Procesamiento = procesamiento;
	this.Almacenamiento = almacenamiento;
	this.Colores = colores;
	this.Accesorios = accesorios;
	this.Precio = precio;
	}
	
	//Mediante el presente ciclo for, instanciamos los objetos con sus propiedades
	for(i = 1; i <= 10; i = i + 1){
	Producto[i] = new Compra(NombresProductos[i], SistemaProductos[i], ProcesamientoProductos[i], AlmacenamientoProductos[i], ColoresProductos[i], AccesoriosProductos[i], PrecioProductos[i]);
	}
	
	//Inicializacion de la funcion Buscar
	function Buscar(){
	//Declaracion de instrucciones de la funcion buscar
	
	//Solicitud de parametro de busqueda al usuario
		var Busqueda = prompt("Ingrese parametro de busqueda:","");
		//Convertimos el texto de la busqueda en mayusculas
		Busqueda = Busqueda.toUpperCase();
		
		//Declaramos un contador
		var i = 1;
		
		//Se inicia un ciclo para comprobar la existencia de coincidencias de busqueda
		for(i=1;i <= NombresProductos.length;i++){
		
		//Comprueba si Busqueda se encuentre en la Matriz
			if(Producto[i].Nombre.search(Busqueda) > 0){
			document.write("<center>");
			document.write("<br>");
			document.write("<table cellspacing='4px' cellpadding='4px' style='border:1px solid #243FF2; background-color:#81CCFD; text-align:justify; font-family:arial black; font-size:12px;' width='1000px'>");
			document.write("<tr>");
				document.write("<td>Nombre del Producto: " + Producto[i].Nombre + "</td>");
				document.write("<td>Sistema del Producto: " + Producto[i].Sistema + "</td>");
				document.write("<td>Accesorios del Producto: " + Producto[i].Accesorios + "</td>");
				document.write("<td>Precio del Producto: " + Producto[i].Precio + "</td>");
				document.write("</tr>");
				document.write("</table>");
				document.write("</center>");
				document.write("<a href=\"Index.html\">");
				document.write("<input type=\"button\" name=\"Regresar\" id=\"Regresar\" value=\"Regresar\" />");
				document.write("</a>");
				};
		};
	};