var misMotos = [];
//Array moto
let arrayMotoYamaha = {
  marca: "Yamaha",
  modelo: "YZF-R125",
  matricula: "7.....P",
  motor: "4 tiempos, refrigerado por líquido, SOHC",
  cc: "124.7",
  anio: "2017",
  cv: "15",
  peso: "144Kg",
  cargaMax: "180 kg (367 lb)",
  normativaAnticontaminacion: "Euro5",
  consumoPromedio: "2.1L/100KM",
  combustible:
    "gasolina sin plomo de 95 octanos o mas / gasohol (E10) no superior al 10% de etanol",
  marchas: "6",
  veloMax: "127KM/h Punta Real",
  dimensiones:
    "Longitud 1990 milímetros (78,3 plg) Anchura 755 milímetros (29,7 plg)",
  capCombLleno: "11.5L",
  bateria: "12 V ,5.5Ah",
};
misMotos.push(arrayMotoYamaha);

let arrayMotoHonda = {
  marca: "Honda",
  modelo: "CBR 125",
  matricula: ".......",
  motor: "4 tiempos, refrigerado por líquido, SOHC",
  cc: "124",
  anio: "2011",
  cv: "12 , (8,83kW)",
  peso: "136KG",
  cargaMax: "180 kg (367 lb)",
  normativaAnticontaminacion: "Euro3",
  consumoPromedio: "2.1L/100KM",
  combustible:
    "gasolina sin plomo de 95 octanos o mas / gasohol (E10) no superior al 10% de etanol",
  marchas: "6",
  veloMax: "127KM/h Punta Real",
  dimensiones:
    "LARGO /ANCHO /ALTO (mm): 1.946  / 704  / 1.089  , Altura asiento 793mm ",
  capCombLleno: "13L",
  bateria: "12 V ,5.5Ah",
};
misMotos.push(arrayMotoHonda);

let arrayMotoDucati = {
  marca: "Ducati",
  modelo: "heritage 125 sport",
  matricula: ".......",
  motor: "Bicilindrico 4T, refrigeración liquida, 4 válvulas (2 por cilindro)",
  cc: "124,6",
  anio: "197",
  cv: "13.6, 8kw",
  peso: "150kg",
  cargaMax: "180 kg (367 lb)",
  normativaAnticontaminacion: "Euro5",
  consumoPromedio: "2.1L/100KM",
  combustible:
    "gasolina sin plomo de 95 octanos o mas / gasohol (E10) no superior al 10% de etanol",
  marchas: "6",
  veloMax: "127KM/h Punta Real",
  dimensiones:
    "LARGO /ANCHO /ALTO (mm): 2200 / 840 / 1100 , Altura asiento 785mm ",
  capCombLleno: "11.5L",
  bateria: "12 V ,5.5Ah",
};
misMotos.push(arrayMotoDucati);

let arrayMotoAprilia = {
  marca: "Aprilia",
  modelo: "RS 125",
  matricula: ".......",
  motor: "4 tiempos, refrigerado por líquido, SOHC",
  cc: "124",
  anio: "2023",
  cv: "15 , (11,03 kW)",
  peso: "144Kg",
  cargaMax: "180 kg (367 lb)",
  normativaAnticontaminacion: "Euro5",
  consumoPromedio: "2.6L/100KM",
  combustible:
    "gasolina sin plomo de 95 octanos o mas / gasohol (E10) no superior al 10% de etanol",
  marchas: "6",
  veloMax: "127KM/h Punta Real",
  dimensiones:
    "LARGO /ANCHO /ALTO (mm): 1.968  / 760  / 1.135  , Altura asiento 820mm ",
  capCombLleno: "14.5L",
  bateria: "12 V ,5.5Ah",
};
misMotos.push(arrayMotoAprilia);

function cargarDOM() {
  document.body.appendChild(div1);

  var newH1 = document.createElement("h1");
  var contenteH1 = document.createTextNode("Bienvenido a Motenimiento");
  newH1.appendChild(contenteH1);
  newH1.setAttribute("align", "center");
  div1.setAttribute("id", "div1");
  console.log("Aqui estan: ", misMotos);
  document.body.insertBefore(newH1, div1);
  console.log("FOR IN: Array asociativo");
  for (let clave in arrayMotoYamaha) {
    console.log(clave + ":" + arrayMotoYamaha[clave]); //clave - valor
  }

  var SaltoLinea = document.createElement("br");

  var Form = document.createElement("form");
  var fieldset = document.createElement("fieldset");
  var legend = document.createElement("legend");
  Form.setAttribute("id", "Formulario");
  legend.setAttribute("id", "legend1");
  fieldset.setAttribute("id", "fieldset1");
  Form.setAttribute("align", "center");

  var contentlegend = document.createTextNode(
    "Los datos de la " + arrayMotoYamaha.marca + " " + arrayMotoYamaha.modelo + " son:"
  );
  legend.appendChild(contentlegend);

  fieldset.appendChild(legend); //se crea el parrafo
  div1.appendChild(Form);
  Form.appendChild(fieldset);

  var imagen = document.createElement("img");
  imagen.setAttribute("src", "media/img1.jpg");
  imagen.setAttribute("alt", "Moto Yamaha YZFR 125");
  imagen.setAttribute("id", "Fury");
  imagen.setAttribute("style", "width:550px;height:750px");
  fieldset.appendChild(imagen);

  fieldset.appendChild(SaltoLinea.cloneNode(true));
  var MarcaH1 = document.createElement("h1");
  MarcaH1.setAttribute("id", "miMarca");
  var Marca = document.createTextNode("Marca: " + arrayMotoYamaha.marca);
  MarcaH1.appendChild(Marca);
  var Modelo = document.createTextNode("Modelo: " + arrayMotoYamaha.modelo);
  var anio = document.createTextNode("Año: " + arrayMotoYamaha.anio);
  var CC = document.createTextNode("Tiene " + arrayMotoYamaha.cc + " CC");
  var CV = document.createTextNode("Tiene " + arrayMotoYamaha.cv + " CV");
  var Motor = document.createTextNode("Motor: " + arrayMotoYamaha.Motor);
  var Peso = document.createTextNode("Pesá: " + arrayMotoYamaha.Peso);
  var Modelo = document.createTextNode("Modelo: " + arrayMotoYamaha.modelo);
  var CC = document.createTextNode("Tiene " + arrayMotoYamaha.cc + " CC");
  var CV = document.createTextNode("Tiene " + arrayMotoYamaha.cv + " CV");
  var Motor = document.createTextNode("Motor: " + arrayMotoYamaha.Motor);
  var cargaMax = document.createTextNode(
    "Soporta: " + arrayMotoYamaha.cargaMax
  );
  var normativaAnticontaminacion = document.createTextNode(
    "Normativa Anticontaminación: " + arrayMotoYamaha.normativaAnticontaminacion
  );
  var consumoPromedio = document.createTextNode(
    "Consume de media: " + arrayMotoYamaha.consumoPromedio
  );
  var combustible = document.createTextNode(
    "Tipo de combustible: " + arrayMotoYamaha.combustible
  );
  var marchas = document.createTextNode(
    "Dispone de " + arrayMotoYamaha.marchas + " marchas"
  );
  var veloMax = document.createTextNode(
    "Puede alcanzar los " + arrayMotoYamaha.veloMax
  );
  var Dimensiones = document.createTextNode(
    "Sus dimensiones son: " + arrayMotoYamaha.dimensiones
  );
  var capCombLleno = document.createTextNode(
    "Capacidad de almacenamientode combustible de " +
      arrayMotoYamaha.capCombLleno
  );
  var Bateria = document.createTextNode(
    "Dispone de Bateria de " + arrayMotoYamaha.bateria
  );

  //Aqui empezamos a mostrar en pantalla añadiendo a los fieldsets
  fieldset.appendChild(MarcaH1);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(Modelo);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(anio);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(Motor);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(marchas);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(CC);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(CV);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(Peso);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(cargaMax);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(normativaAnticontaminacion);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(consumoPromedio);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(capCombLleno);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(combustible);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(veloMax);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(Dimensiones);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  fieldset.appendChild(Bateria);
  fieldset.appendChild(SaltoLinea.cloneNode(true));
  console.log(arrayMotoYamaha);
}

function cambiarOpcion(texto) {
  var miMoto = misMotos.find((el) => el.marca === texto);
  console.log("Cambio de moto a " + texto, miMoto);

  var SaltoLinea = document.createElement("br");

  var Form = document.createElement("form");
  var fieldset = document.createElement("fieldset");
  var legend = document.createElement("legend");
  Form.setAttribute("id", "Formulario");
  legend.setAttribute("id", "legend1");
  fieldset.setAttribute("id", "fieldset1");

  var legend1 = document.getElementById("legend1");
  var form1 = document.getElementById("Formulario");

  switch (texto) {
    case "Yamaha":
      form1.parentNode.removeChild(form1);
      legend1.parentNode.removeChild(legend1);
      //Rellenamos

      var Form = document.createElement("form");
      var fieldset = document.createElement("fieldset");
      var legend = document.createElement("legend");
      Form.setAttribute("id", "Formulario");
      legend.setAttribute("id", "legend1");
      fieldset.setAttribute("id", "fieldset1");

      var contentlegend = document.createTextNode(
        "Los datos de la " + miMoto.marca + " " + miMoto.modelo + " son:"
      );
      legend.appendChild(contentlegend);

      fieldset.appendChild(legend); //se crea el parrafo
      div1.appendChild(Form);
      Form.appendChild(fieldset);
      Form.setAttribute("align", "center");
      Form.setAttribute("id", "Formulario");
      legend.setAttribute("id", "legend1");
      fieldset.setAttribute("id", "fieldset1");

      //Rellenamos el formulario
      var imagen = document.createElement("img");
      imagen.setAttribute("src", "media/img1.jpg");
      imagen.setAttribute("alt", "Moto Yamaha YZFR 125");
      imagen.setAttribute("id", "Fury");
      imagen.setAttribute("style", "width:550px;height:750px");
      fieldset.appendChild(imagen);

      fieldset.appendChild(SaltoLinea.cloneNode(true));
      var MarcaH1 = document.createElement("h1");
      MarcaH1.setAttribute("id", "miMarca");
      var Marca = document.createTextNode("Marca: " + miMoto.marca);
      MarcaH1.appendChild(Marca);
      var Modelo = document.createTextNode("Modelo: " + miMoto.modelo);
      var anio = document.createTextNode("Año: " + miMoto.anio);
      var CC = document.createTextNode("Tiene " + miMoto.cc + " CC");
      var CV = document.createTextNode("Tiene " + miMoto.cv + " CV");
      var Motor = document.createTextNode("Motor: " + miMoto.Motor);
      var Peso = document.createTextNode("Pesá: " + miMoto.Peso);
      var Modelo = document.createTextNode("Modelo: " + miMoto.modelo);
      var CC = document.createTextNode("Tiene " + miMoto.cc + " CC");
      var CV = document.createTextNode("Tiene " + miMoto.cv + " CV");
      var Motor = document.createTextNode("Motor: " + miMoto.Motor);
      var cargaMax = document.createTextNode("Soporta: " + miMoto.cargaMax);
      var normativaAnticontaminacion = document.createTextNode(
        "Normativa Anticontaminación: " + miMoto.normativaAnticontaminacion
      );
      var consumoPromedio = document.createTextNode(
        "Consume de media: " + miMoto.consumoPromedio
      );
      var combustible = document.createTextNode(
        "Tipo de combustible: " + miMoto.combustible
      );
      var marchas = document.createTextNode(
        "Dispone de " + miMoto.marchas + " marchas"
      );
      var veloMax = document.createTextNode(
        "Puede alcanzar los " + miMoto.veloMax
      );
      var Dimensiones = document.createTextNode(
        "Sus dimensiones son: " + miMoto.dimensiones
      );
      var capCombLleno = document.createTextNode(
        "Capacidad de almacenamientode combustible de " + miMoto.capCombLleno
      );
      var Bateria = document.createTextNode(
        "Dispone de Bateria de " + miMoto.bateria
      );

      //Aqui empezamos a mostrar en pantalla añadiendo a los fieldsets
      fieldset.appendChild(MarcaH1);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Modelo);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(anio);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Motor);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(marchas);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(CC);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(CV);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Peso);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(cargaMax);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(normativaAnticontaminacion);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(consumoPromedio);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(capCombLleno);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(combustible);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(veloMax);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Dimensiones);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Bateria);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      console.log(arrayMotoYamaha);

      break;

    case "Honda":
      form1.parentNode.removeChild(form1);
      legend1.parentNode.removeChild(legend1);

      var contentlegend = document.createTextNode(
        "Los datos de la " + miMoto.marca + " " + miMoto.modelo + " son:"
      );
      legend.appendChild(contentlegend);

      fieldset.appendChild(legend); //se crea el parrafo
      div1.appendChild(Form);
      Form.appendChild(fieldset);
      Form.setAttribute("id", "Formulario");
      legend.setAttribute("id", "legend1");
      fieldset.setAttribute("id", "fieldset1");
      Form.setAttribute("align", "center");

      //Rellenamos el formulario
      var imagen = document.createElement("img");
      imagen.setAttribute("src", "media/Honda.jpg");
      imagen.setAttribute("alt", "Moto Honda");
      imagen.setAttribute("id", "Hondafoto");
      imagen.setAttribute("style", "width:750px;height:500px");
      fieldset.appendChild(imagen);

      fieldset.appendChild(SaltoLinea.cloneNode(true));
      var MarcaH1 = document.createElement("h1");
      MarcaH1.setAttribute("id", "miMarca");
      var Marca = document.createTextNode("Marca: " + miMoto.marca);
      MarcaH1.appendChild(Marca);
      var Modelo = document.createTextNode("Modelo: " + miMoto.modelo);
      var anio = document.createTextNode("Año: " + miMoto.anio);
      var CC = document.createTextNode("Tiene " + miMoto.cc + " CC");
      var CV = document.createTextNode("Tiene " + miMoto.cv + " CV");
      var Motor = document.createTextNode("Motor: " + miMoto.Motor);
      var Peso = document.createTextNode("Pesá: " + miMoto.Peso);
      var Modelo = document.createTextNode("Modelo: " + miMoto.modelo);
      var CC = document.createTextNode("Tiene " + miMoto.cc + " CC");
      var CV = document.createTextNode("Tiene " + miMoto.cv + " CV");
      var Motor = document.createTextNode("Motor: " + miMoto.Motor);
      var cargaMax = document.createTextNode("Soporta: " + miMoto.cargaMax);
      var normativaAnticontaminacion = document.createTextNode(
        "Normativa Anticontaminación: " + miMoto.normativaAnticontaminacion
      );
      var consumoPromedio = document.createTextNode(
        "Consume de media: " + miMoto.consumoPromedio
      );
      var combustible = document.createTextNode(
        "Tipo de combustible: " + miMoto.combustible
      );
      var marchas = document.createTextNode(
        "Dispone de " + miMoto.marchas + " marchas"
      );
      var veloMax = document.createTextNode(
        "Puede alcanzar los " + miMoto.veloMax
      );
      var Dimensiones = document.createTextNode(
        "Sus dimensiones son: " + miMoto.dimensiones
      );
      var capCombLleno = document.createTextNode(
        "Capacidad de almacenamientode combustible de " + miMoto.capCombLleno
      );
      var Bateria = document.createTextNode(
        "Dispone de Bateria de " + miMoto.bateria
      );

      //Aqui empezamos a mostrar en pantalla añadiendo a los fieldsets
      fieldset.appendChild(MarcaH1);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Modelo);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(anio);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Motor);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(marchas);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(CC);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(CV);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Peso);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(cargaMax);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(normativaAnticontaminacion);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(consumoPromedio);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(capCombLleno);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(combustible);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(veloMax);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Dimensiones);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Bateria);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      console.log(arrayMotoHonda);

      break;

    case "Ducati":

      form1.parentNode.removeChild(form1);
      legend1.parentNode.removeChild(legend1);

      var SaltoLinea = document.createElement("br");

      var Form = document.createElement("form");
      var fieldset = document.createElement("fieldset");
      var legend = document.createElement("legend");
      var contentlegend = document.createTextNode(
        "Los datos de la " + miMoto.marca + " " + miMoto.modelo + " son:"
      );
      legend.appendChild(contentlegend);

      fieldset.appendChild(legend); //se crea el parrafo
      div1.appendChild(Form);
      Form.appendChild(fieldset);
      Form.setAttribute("align", "center");
      Form.setAttribute("id", "Formulario");
      legend.setAttribute("id", "legend1");
      fieldset.setAttribute("id", "fieldset1");

      //Rellenamos el formulario
      var imagen = document.createElement("img");
      imagen.setAttribute("src", "media/ducati.png");
      imagen.setAttribute("alt", "Moto Ducati");
      imagen.setAttribute("id", "heritage");
      imagen.setAttribute("style", "width:750px;height:500px");
      fieldset.appendChild(imagen);

      fieldset.appendChild(SaltoLinea.cloneNode(true));
      var MarcaH1 = document.createElement("h1");
      MarcaH1.setAttribute("id", "miMarca");
      var Marca = document.createTextNode("Marca: " + miMoto.marca);
      MarcaH1.appendChild(Marca);
      var Modelo = document.createTextNode("Modelo: " + miMoto.modelo);
      var anio = document.createTextNode("Año: " + miMoto.anio);
      var CC = document.createTextNode("Tiene " + miMoto.cc + " CC");
      var CV = document.createTextNode("Tiene " + miMoto.cv + " CV");
      var Motor = document.createTextNode("Motor: " + miMoto.Motor);
      var Peso = document.createTextNode("Pesá: " + miMoto.Peso);
      var Modelo = document.createTextNode("Modelo: " + miMoto.modelo);
      var CC = document.createTextNode("Tiene " + miMoto.cc + " CC");
      var CV = document.createTextNode("Tiene " + miMoto.cv + " CV");
      var Motor = document.createTextNode("Motor: " + miMoto.Motor);
      var cargaMax = document.createTextNode("Soporta: " + miMoto.cargaMax);
      var normativaAnticontaminacion = document.createTextNode(
        "Normativa Anticontaminación: " + miMoto.normativaAnticontaminacion
      );
      var consumoPromedio = document.createTextNode(
        "Consume de media: " + miMoto.consumoPromedio
      );
      var combustible = document.createTextNode(
        "Tipo de combustible: " + miMoto.combustible
      );
      var marchas = document.createTextNode(
        "Dispone de " + miMoto.marchas + " marchas"
      );
      var veloMax = document.createTextNode(
        "Puede alcanzar los " + miMoto.veloMax
      );
      var Dimensiones = document.createTextNode(
        "Sus dimensiones son: " + miMoto.dimensiones
      );
      var capCombLleno = document.createTextNode(
        "Capacidad de almacenamientode combustible de " + miMoto.capCombLleno
      );
      var Bateria = document.createTextNode(
        "Dispone de Bateria de " + miMoto.bateria
      );

      //Aqui empezamos a mostrar en pantalla añadiendo a los fieldsets
      fieldset.appendChild(MarcaH1);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Modelo);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(anio);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Motor);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(marchas);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(CC);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(CV);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Peso);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(cargaMax);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(normativaAnticontaminacion);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(consumoPromedio);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(capCombLleno);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(combustible);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(veloMax);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Dimensiones);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Bateria);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      console.log(arrayMotoYamaha);

      break;
    case "Aprilia":

    form1.parentNode.removeChild(form1);
      legend1.parentNode.removeChild(legend1);

      var SaltoLinea = document.createElement("br");

      var Form = document.createElement("form");
      var fieldset = document.createElement("fieldset");
      var legend = document.createElement("legend");
      var contentlegend = document.createTextNode(
        "Los datos de la " + miMoto.marca + " " + miMoto.modelo + " son:"
      );
      legend.appendChild(contentlegend);

      fieldset.appendChild(legend); //se crea el parrafo
      div1.appendChild(Form);
      Form.appendChild(fieldset);
      Form.setAttribute("align", "center");

      Form.setAttribute("id", "Formulario");
      legend.setAttribute("id", "legend1");
      fieldset.setAttribute("id", "fieldset1");

      //Rellenamos el formulario
      var imagen = document.createElement("img");
      imagen.setAttribute("src", "media/aprilia.jpg");
      imagen.setAttribute("alt", "Moto Aprilia");
      imagen.setAttribute("id", "Aprilia");
      imagen.setAttribute("style", "width:750px;height:500px");
      fieldset.appendChild(imagen);

      fieldset.appendChild(SaltoLinea.cloneNode(true));
      var MarcaH1 = document.createElement("h1");
      MarcaH1.setAttribute("id", "miMarca");
      var Marca = document.createTextNode("Marca: " + miMoto.marca);
      MarcaH1.appendChild(Marca);
      var Modelo = document.createTextNode("Modelo: " + miMoto.modelo);
      var anio = document.createTextNode("Año: " + miMoto.anio);
      var CC = document.createTextNode("Tiene " + miMoto.cc + " CC");
      var CV = document.createTextNode("Tiene " + miMoto.cv + " CV");
      var Motor = document.createTextNode("Motor: " + miMoto.Motor);
      var Peso = document.createTextNode("Pesá: " + miMoto.Peso);
      var Modelo = document.createTextNode("Modelo: " + miMoto.modelo);
      var CC = document.createTextNode("Tiene " + miMoto.cc + " CC");
      var CV = document.createTextNode("Tiene " + miMoto.cv + " CV");
      var Motor = document.createTextNode("Motor: " + miMoto.Motor);
      var cargaMax = document.createTextNode("Soporta: " + miMoto.cargaMax);
      var normativaAnticontaminacion = document.createTextNode(
        "Normativa Anticontaminación: " + miMoto.normativaAnticontaminacion
      );
      var consumoPromedio = document.createTextNode(
        "Consume de media: " + miMoto.consumoPromedio
      );
      var combustible = document.createTextNode(
        "Tipo de combustible: " + miMoto.combustible
      );
      var marchas = document.createTextNode(
        "Dispone de " + miMoto.marchas + " marchas"
      );
      var veloMax = document.createTextNode(
        "Puede alcanzar los " + miMoto.veloMax
      );
      var Dimensiones = document.createTextNode(
        "Sus dimensiones son: " + miMoto.dimensiones
      );
      var capCombLleno = document.createTextNode(
        "Capacidad de almacenamientode combustible de " + miMoto.capCombLleno
      );
      var Bateria = document.createTextNode(
        "Dispone de Bateria de " + miMoto.bateria
      );

      //Aqui empezamos a mostrar en pantalla añadiendo a los fieldsets
      fieldset.appendChild(MarcaH1);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Modelo);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(anio);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Motor);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(marchas);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(CC);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(CV);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Peso);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(cargaMax);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(normativaAnticontaminacion);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(consumoPromedio);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(capCombLleno);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(combustible);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(veloMax);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Dimensiones);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      fieldset.appendChild(Bateria);
      fieldset.appendChild(SaltoLinea.cloneNode(true));
      console.log(arrayMotoYamaha);
      break;
  }
}
