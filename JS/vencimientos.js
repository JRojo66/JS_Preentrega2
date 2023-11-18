


// Este programa identifica y muestra los articulos de un inventario que tienen un stock elevado respecto de su venta, y sobre los cuales se debe tomar alguna acción (Promoción, Donación, ...) para evitar su vencimiento.

// Ejecuta el programa al hacer click sobre el boton Iniciar

const simuladorBtn = document.getElementById("Iniciar");  

simuladorBtn.addEventListener("click", function() {

// Definicion de variables y arrays
let inventario = []; // Array de objetos. Cada artículo es un objeto.
const miliMes = 2592000000 // milisegundos/mes

// Constructor para la creacion de los objetos

class Articulo {
	constructor(codigoArticulo, descripcionArticulo, stock, unidad, vencimiento, ventaMensual) {
		this.codigoArticulo = codigoArticulo;
		this.descripcionArticulo = descripcionArticulo;
		this.stock = stock;
        this.unidad = unidad;
		this.vencimiento = vencimiento;
		this.stock = stock;
        this.ventaMensual = ventaMensual
	}

	CargaDatos() {
		inventario.push(this);
	}
}

// Datos

const art_0 = new Articulo ('AL45', 'Harina Blancaflor x 1 Kg',500, 'kgs', new Date(2024, 0,1),100);
const art_1 = new Articulo ('AL65', 'Azucar Ledesma x 1 Kg', 800, 'kgs', new Date(2024, 3,1),140);
const art_2 = new Articulo ('AL54', 'Tomate perita x 250g',200, 'kgs', new Date(2024, 5,1),600);
const art_3 = new Articulo ('AL72', 'Fideos Matarazzo x 1 Kg',1000, 'kgs', new Date(2024, 6,1),50);
const art_4 = new Articulo ('AL84', 'Yerba Mañanita x 1Kg',500, 'kgs', new Date(2024, 0,1),200);
const art_5 = new Articulo ('AL12', 'Leche La Serenisima x 1lt',30, 'lts', new Date(2023, 12,1),30);
const art_6 = new Articulo ('AL21', 'Crema de leche La Serenisima x 250g',15, 'kgs', new Date(2024, 0,1),8);
const art_7 = new Articulo ('AL75', 'Jamon cocido Campo Austral',300, 'kgs', new Date(2024, 3,1),300);
const art_8 = new Articulo ('AL32', 'Queso de maquina Formagge x 5 kgs',700, 'kgs', new Date(2024, 9,1),80);
const art_9 = new Articulo ('AL78', 'Salame Campo Austral x 10 kg',50, 'kgs', new Date(2024, 0,1),4);

// Carga de datos en el inventario

art_0.CargaDatos();
art_1.CargaDatos();
art_2.CargaDatos();
art_3.CargaDatos();
art_4.CargaDatos();
art_5.CargaDatos();
art_6.CargaDatos();
art_7.CargaDatos();
art_8.CargaDatos();
art_9.CargaDatos();

// Agrega meses de stock y meses al vencimiento a cada objeto producto incluido en el array inventario
function mesesStockVenc(array) {
    for (let cadaElemento of array){
        cadaElemento.mesesStock = Math.round((cadaElemento.stock/cadaElemento.ventaMensual)*100)/100;
        cadaElemento.mesesAlVencimiento = Math.round(((cadaElemento.vencimiento - new Date())/miliMes)*100)/100;
    }
}
mesesStockVenc(inventario);


let resultado = inventario.filter(el => el.mesesStock>el.mesesAlVencimiento);
resultado.sort((a, b) => {
    if (a.mesesAlVencimiento > b.mesesAlVencimiento) {
        return 1;
    }
    if (a.mesesAlVencimiento < b.mesesAlVencimiento) {
        return -1;
    }
    // a es igual a b
    return 0;
})


console.log("Hay "+resultado.length+" articulos con peligro de vencimiento");
console.log("Estos son los articulos por orden de proximidad de su vencimiento")
console.log(resultado);

});