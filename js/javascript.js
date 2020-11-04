function login() {
    var saludo = "Bienvenido a ArCADxArCAM, Hola "
    var cantidadactual = "Total de puntos acumulados: "
    localStorage.numeroa = 1005
    var numeroa = localStorage.getItem(numeroa)
    console.log(numeroa);
    var nombre = prompt("Ingrese su nombre: ");

    var pin = prompt("Ingrese el número de miembro de la plataforma: ");
    pin = parseInt(pin);

    if (nombre != "") {
        alert(saludo + nombre)

    }
    if ((pin > 10) && (pin < 50)) {
        alert("¡¡Felicidades!!.Usted está entre los miembros a los que se le otorgará un descuento del 30% en cualquiera de nuestros cursos.");

    }


    monto = prompt("Si desea consultar los puntos acumulados para participar en los descuentos especiales en nuestros cursos, vuelva a escribir su número de miembro: ")
    monto = parseInt(monto);

    var resultado = monto + numeroa;
    resultado = parseInt(resultado);

    alert(cantidadactual + resultado);
    if (monto > 1000) {
        confirm("¡¡Felicidades!!.Sus puntos acumulados le permite obtener un descuento de 2000$ en la compra de cualquiera de nuestros cursos.");
    } else if ((monto < 1000) || (monto = "")) { confirm("Lo sentimos, los puntos acumulados son insuficientes. Siga participando, lo estaremos esperando."); }









    console.log("TRIsites");
    console.info(monto + numeroa);
    console.warn("Advertencia");
    console.error("Esto es un error");

}


function cupos() {

    var dias = ["9/1/2021 al 6/3/2021", "19/1/2021 al 16/3/2021", "9/2/2021 al 6/4/2021", "19/2/2021 al 16/4/2021", "9/3/2021 al 6/5/2021", "19/3/2021 al 16/5/2021", "9/4/2021"]
    var resto




    for (var i = 0; i <= 6; i++) {
        if (i == 6) {
            alert("Durante el mes de Abril no se dara comienzo a ningún curso.");
        } else {

            resto = i % 2;
            if (i % 2 === 0) { alert(dias[i] + " - 10:30am a 12:30am"); } else if (resto != 0) {
                alert(dias[i] + " - 20:30pm a 22:30pm");

            }
        }

    }
}



//array con objetos en formato JSON
var cursos = [{
        nombre: 'Impresión 3D',
        costo: 1500,
        duracion: '30 horas semanales',
        diasSemanales: 3,
        fecha1: '24/11/2020 al 6/1/2021-10:30am a 12:30am',
        fecha2: '14/12/2020 al 16/2/2021-20:30pm a 22:30pm',
        fecha3: '3/1/2020 al 20/3/2021-10:30am a 12:30am',
        
    },
    {
        nombre: 'Impresión 2D',
        costo: 2500,
        duracion: '30 horas semanales',
        diasSemanales: 4,
        fecha1: '28/11/2020 al 12/1/2021-10:30am a 12:30am',
        fecha2: '18/12/2020 al 18/2/2021-20:30pm a 22:30pm',
        fecha3: '5/1/2020 al 22/3/2021-10:30am a 12:30am',
        
    },
    {
        nombre: 'Impresión 1D',
        costo: 500,
        duracion: '12 horas semanales',
        diasSemanales: 3,
        fecha1: '25/11/2020 al 7/1/2021-10:30am a 12:30am',
        fecha2: '15/12/2020 al 17/2/2021-20:30pm a 22:30pm',
        fecha3: '4/1/2020 al 21/3/2021-10:30am a 12:30am',
        

    },
   

]



var carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];

// div del HTML contenedor de cursos 
var cursosDiv = document.querySelector('#cursos');


//ejecuto la funcion para renderizar los objetos en el HTML
mostrarCursos();
//Funcion para renderizar los Cursos desde la pseudo Base de datos
function mostrarCursos() {

    cursos.forEach((curso) => {
        cursosDiv.innerHTML += `
        <div class="cardestilo">
        <img src="https://via.placeholder.com/1600x800" class="card-img-top" alt="...">
        <div class="card-body">
         
          <h2 class="card-title">${curso.nombre}</h2>
          <br>
          <p class="card-text">Carga Horaria: ${curso.duracion} en ${curso.diasSemanales} días </p>
          <br>
          <h3>Fechas</h3>
          <br>
          <div class="row ">
          <div class="col-md-9 col-sm-7 col-xs-9 col-9">
          <p>${curso.fecha1} </p>
          </div>
          <div class="col-md-3 col-sm-5 col-xs-3 col-3">
          <button  onclick="agregarCurso(${cursos.indexOf(curso)})" type="submit" class="btn btn-light-blue"><h5>Comprar</h5></button>
          </div>
          </div>
          
          <div class="row">
          <div class="col-md-9 col-sm-7 col-xs-9 col-9">
          <p>${curso.fecha2} </p>
          </div>
          <div class="col-md-3 col-sm-5 col-xs-3 col-3">
          <button  onclick="agregarCurso(${cursos.indexOf(curso)})" type="submit" class="btn btn-light-blue"><h5>Comprar</h5></button>
          </div>
          </div>

          <div class="row">
          <div class="col-md-9 col-sm-7 col-xs-9 col-9">
          <p>${curso.fecha3} </p>
          </div>
          <div class="col-md-3 col-sm-5 col-xs-3 col-3">
          <button  onclick="agregarCurso(${cursos.indexOf(curso)})" type="submit" class="btn btn-light-blue"><h5>Comprar</h5></button>
          </div>
          </div>
          
          

        </div>
        
        <div class="card-footer">
          <small ><h3>Precio: U$s: ${curso.costo} </h3></small>
        </div>
      </div> 
      </div> 
      
      
        `
            // console.log(`${cursos.indexOf(curso)}`);
    });
}


// Agregar los objetos a un array cursoElegido y mostrar en cosola

// botonAgregarCursos.addEventListener('click', diagramarCursos);
function agregarCurso(indice) {
    cursosElegidos.push(cursos[indice])
        // console.log(cursoElegido) 

    diagramarCursos()
    sumadordePrecios();


}

let cursosElegidos = [];
//seleccionar el div donde será inyectado el HTML

//funcion para inyectar el html 
function diagramarCursos() {
    //vaciar el html antes de inyectar el nuevo HTML
    aqui.innerHTML = '';
    cursosElegidos.forEach((cursoElegido) => {
        aqui.innerHTML += `
        
    <div class="sectionM__sidebar__div__div d-flex align-items-center d-flex  justify-content-around h-100 border-bottom pb-2 pt-3 row">
                <img href="hola" src="${cursoElegido.img}" class="img-fluid col-3">
                <div class="sectionM__sidebar__div__div__texto col-5">
                    <h4 class="sectionM__sidebar__div__div__texto__titulo text-truncate text-center">${cursoElegido.nombre}</h4>
                </div>
                <div class="sectionM__sidebar__div__div__precio col-2">
                    <h4 id="monto" class="align-self-sm-center"> <span>-$</span>${cursoElegido.costo} <span>-</span></h4>
                </div>
                <p class="sectionM__sidebar__div__div__total col-1" name="${carrito.indexOf(cursoElegido)}>Total: $<span id="totalCode"></span></p>
                <button class=" col-1 btn btn-danger botoneta" onclick="borradorProductos(${carrito.indexOf(cursoElegido)})" id="${(cursoElegido.codigo)}">X</button>
            </div>
    `


        ;
    });

}





let total = 0
let $contenedor = document.querySelector('#aqui')


var carritoCompras = $('#carritoMercado').on('click', function() {
    $('.sectionM__sidebar').toggleClass("cerrar")
})

var carritoCompras2 = $('#cerrarSide').on('click', function() {
    $('.sectionM__sidebar').toggleClass("cerrar")
})



function sumarCarrito(index) {
    $('.sectionM__sidebar').addClass("cerrar")

    var producto = cursos[index]
    if (carrito.length > 0) {
        var noExiste = true;
        for (var i = 0; i < carrito.length; i++) {
            if (producto.nombre === carrito[i].nombre) {
                carrito[i].cantidad++;
                noExiste = false;
            }
        }
        if (noExiste) {
            producto.cantidad = 1;
            carrito.push(producto);
        }
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    diagramarCursos()
    sumadordePrecios()
    localStorage.carrito = JSON.stringify(carrito)
}






function borradorProductos(index) {
    console.log(index)

    if (cursosElegidos[index] <= 0) {
        cursosElegidos.splice(index, 1);
    }
    localStorage.cursosElegidos = JSON.stringify(cursosElegidos)
    diagramarCursos()
    sumadordePrecios()

}

function sumadordePrecios() {
    let total = 0
    let precioTotal = document.querySelector('#total')
    cursosElegidos.forEach(comidita => {
        total = total + comidita.costo
        return
    });
    localStorage.cursosElegidos = JSON.stringify(cursosElegidos)
    precioTotal.innerHTML = total
}



var vaciadorProductos = document.querySelector('#vaciarSide')
vaciadorProductos.addEventListener('click', vaciadorDeSide)

function vaciadorDeSide() {
    let precioTotal = document.querySelector('#total')

    total = 0
    console.log("vaciadorDeSide -> total", total)
    precioTotal.innerHTML = total

    cursosElegidos = [];
    diagramarCursos()
}



diagramarCursos()




