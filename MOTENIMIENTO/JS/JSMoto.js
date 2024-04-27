

        //Array moto
        let arrayMotoYamaha = [];
        arrayMotoYamaha.marca = "Yamaha"
        arrayMotoYamaha.modelo = "YZF-R125"
        arrayMotoYamaha.matricula = "7.....P"
        arrayMotoYamaha.Motor = "4 tiempos, refrigerado por líquido, SOHC"
        arrayMotoYamaha.cc = "124.7"
        arrayMotoYamaha.anio = "2017"
        arrayMotoYamaha.cv = "15"
        arrayMotoYamaha.Peso = "144Kg"
        arrayMotoYamaha.cargaMax = "180 kg (367 lb)"
        arrayMotoYamaha.normativaAnticontaminacion = "Euro5"
        arrayMotoYamaha.consumoPromedio = "2.1L/100KM"
        arrayMotoYamaha.combustible = "gasolina sin plomo de 95 octanos o mas / gasohol (E10) no superior al 10% de etanol"
        arrayMotoYamaha.marchas = "6"
        arrayMotoYamaha.veloMax = "127KM/h Punta Real"
        arrayMotoYamaha.Dimensiones = "Longitud 1990 milímetros (78,3 plg) Anchura 755 milímetros (29,7 plg)" 
        arrayMotoYamaha.capCombLleno = "11.5L"
        arrayMotoYamaha.Bateria = "12 V ,5.5Ah"

        let arrayMotoHonda= []
        let arrayMotoDucati= []
        let arrayMotoAprilia= []
        arrayMotoHonda.marca = "Yamaha"
        arrayMotoHonda.modelo = "YZF-R125"
        arrayMotoHonda.matricula = "7.....P"
        arrayMotoHonda.Motor = "4 tiempos, refrigerado por líquido, SOHC"
        arrayMotoHonda.cc = "124.7"
        arrayMotoHonda.cv = "15"
        arrayMotoHonda.Peso = "144Kg"
        arrayMotoHonda.cargaMax = "180 kg (367 lb)"
        arrayMotoHonda.normativaAnticontaminacion = "Euro5"
        arrayMotoHonda.consumoPromedio = "2.1L/100KM"
        arrayMotoHonda.combustible = "gasolina sin plomo de 95 octanos o mas / gasohol (E10) no superior al 10% de etanol"
        arrayMotoHonda.marchas = "6"
        arrayMotoHonda.veloMax = "127KM/h Punta Real"
        arrayMotoHonda.Dimensiones = "Longitud 1990 milímetros (78,3 plg) Anchura 755 milímetros (29,7 plg)" 
        arrayMotoHonda.capCombLleno = "11.5L"
        arrayMotoHonda.Bateria = "12 V ,5.5Ah"
        /*
        arrayMoto.NeumaticoDel.tamaño = "100/80-17 M/C 52H(PIRELLI)-52S(MICHELIN)"
        arrayMoto.NeumaticoDel.marca = "PIRELLI/SPORT DEMON , MICHELIN/PILOT STREET"
        arrayMoto.NeumaticoDel.valvulaAire = "TR412"
        arrayMoto.NeumaticoDel.valvulaNucleo = "V3002 (original)"

        arrayMoto.NeumaticoTr.tamaño = "130/70-17 M/C 62H(PIRELLI)-62S(MICHELIN)"
        arrayMoto.NeumaticoTr.marca = "PIRELLI/SPORT DEMON , MICHELIN/PILOT STREET"
        arrayMoto.NeumaticoTr.valvulaAire = "TR412"
        arrayMoto.NeumaticoTr.valvulaNucleo = "V3002 (original)"
        */
        


function cargarDOM(){

    document.body.appendChild(div1)

    var newH1 = document.createElement('h1')
    var contenteH1 = document.createTextNode("Bienvenido a Motenimiento")
    newH1.appendChild(contenteH1);
    newH1.setAttribute('align','center')

    document.body.insertBefore(newH1, div1)

    var SaltoLinea = document.createElement('br')


    var Form = document.createElement('form')
    var fieldset = document.createElement('fieldset')
    var legend = document.createElement('legend')
    var contentlegend = document.createTextNode("Los datos de la "+arrayMotoYamaha.marca+" "+arrayMotoYamaha.modelo+" son:")
    legend.appendChild(contentlegend)

    fieldset.appendChild(legend) //se crea el parrafo
    div1.appendChild(Form)
    Form.appendChild(fieldset)
    Form.setAttribute('align', 'center')

    //Rellenamos el formulario
    var imagen = document.createElement('img');
    imagen.setAttribute('src','media/img1.jpg')
    imagen.setAttribute('alt', 'Moto Yamaha YZFR 125')
    imagen.setAttribute('id','Fury')
    imagen.setAttribute('style','width:550px;height:750px')
    fieldset.appendChild(imagen)

    fieldset.appendChild(SaltoLinea.cloneNode(true))

    var Marca = document.createTextNode("Marca: "+ arrayMotoYamaha.marca)
    var Modelo = document.createTextNode("Modelo: "+ arrayMotoYamaha.modelo)
    var anio = document.createTextNode("Año: "+ arrayMotoYamaha.anio)
    var CC = document.createTextNode("Tiene "+ arrayMotoYamaha.cc+" CC")
    var CV = document.createTextNode("Tiene "+ arrayMotoYamaha.cv+" CV")
    var Motor = document.createTextNode("Motor: "+ arrayMotoYamaha.Motor)
    var Peso = document.createTextNode("Pesá: "+ arrayMotoYamaha.Peso)
    var Modelo = document.createTextNode("Modelo: "+ arrayMotoYamaha.modelo)
    var CC = document.createTextNode("Tiene "+ arrayMotoYamaha.cc+" CC")
    var CV = document.createTextNode("Tiene "+ arrayMotoYamaha.cv+" CV")
    var Motor = document.createTextNode("Motor: "+ arrayMotoYamaha.Motor)
    var cargaMax =document.createTextNode("Soporta: "+ arrayMotoYamaha.cargaMax)
    var normativaAnticontaminacion = document.createTextNode("Normativa Anticontaminación: "+ arrayMotoYamaha.normativaAnticontaminacion)
    var consumoPromedio= document.createTextNode("Consume de media: "+ arrayMotoYamaha.consumoPromedio)
    var combustible = document.createTextNode("Tipo de combustible: "+arrayMotoYamaha.combustible)
    var marchas = document.createTextNode("Dispone de "+ arrayMotoYamaha.marchas+" marchas")
    var veloMax = document.createTextNode("Puede alcanzar los "+arrayMotoYamaha.veloMax)
    var Dimensiones = document.createTextNode("Sus dimensiones son: "+arrayMotoYamaha.Dimensiones)
    var capCombLleno = document.createTextNode("Capacidad de almacenamientode combustible de "+arrayMotoYamaha.capCombLleno)
    var Bateria = document.createTextNode("Dispone de Bateria de "+arrayMotoYamaha.Bateria) 

    //Aqui empezamos a mostrar en pantalla añadiendo a los fieldsets
    fieldset.appendChild(Marca)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(Modelo)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(anio)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(Motor)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(marchas)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(CC)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(CV)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(Peso)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(cargaMax)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(normativaAnticontaminacion)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(consumoPromedio)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(capCombLleno)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(combustible)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(veloMax)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(Dimensiones)
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(SaltoLinea.cloneNode(true))
    fieldset.appendChild(Bateria)
    fieldset.appendChild(SaltoLinea.cloneNode(true))

 console.log(arrayMotoYamaha)

        var DatosEnPantalla

        console.log("FOR IN: Array asociativo")
        for(let clave in arrayMotoYamaha){

            DatosEnPantalla = (clave + ":" + arrayMotoYamaha[clave]+ "  ---  ")
            console.log(clave + ":" + arrayMotoYamaha[clave])//clave - valor
        }
}