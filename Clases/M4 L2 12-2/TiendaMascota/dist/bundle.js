/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/carrito.js"
/*!************************!*\
  !*** ./src/carrito.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   agregarAlCarrito: () => (/* binding */ agregarAlCarrito),
/* harmony export */   calcularTotal: () => (/* binding */ calcularTotal),
/* harmony export */   carrito: () => (/* binding */ carrito),
/* harmony export */   vaciarCarrito: () => (/* binding */ vaciarCarrito),
/* harmony export */   verCarrito: () => (/* binding */ verCarrito)
/* harmony export */ });
/* harmony import */ var _productos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productos */ "./src/productos.js");


let carrito =[];

function agregarAlCarrito(producto, cantidad = 1){
    const item ={
        producto: producto,
        cantidad: cantidad,
        subttotal: _productos__WEBPACK_IMPORTED_MODULE_0__.productos.precio * cantidad
    };
    carrito.push(item);
    console.log(`✓ ${producto.nombre} agregadp al Carrito(x${cantidad})`)
}

function verCarrito(){
    console.log("===CARRITO DE COMPRAS===")
    if(carrito.length === 0){
        console.log("El carrito esta vacio")
        return
    }

    carrito.forEach((item, index) =>{
        console.log(`${index + 1}. ${item.producto.nombre} x ${item.cantidad} = $${item.subtotal}`)
    })

    console.log(`TOTAL: $${calcularTotal()}`)
}

function calcularTotal(){
    return carrito.reduce((total, item) => total + item.subtotal, 0)
}

function vaciarCarrito(){
    carrito = []
    console.log("Carrito vaciado")
}



/***/ },

/***/ "./src/productos.js"
/*!**************************!*\
  !*** ./src/productos.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buscarProducto: () => (/* binding */ buscarProducto),
/* harmony export */   mostrarProductos: () => (/* binding */ mostrarProductos),
/* harmony export */   productos: () => (/* binding */ productos)
/* harmony export */ });
const productos =[
    {
        id: 1,
        nombre: "Alimento Premium para Perros",
        precio: 25000,
        categoria: "Alimento",
        stock: 50
    },
    {
        id: 2,
        nombre: "Arena Sanitaria para Gatos",
        precio: 8500,
        categoria: "Higiene",
        stock: 30
    },
    {
        id: 3,
        nombre: "Juguete Interactivo",
        precio: 12000,
        categoria: "Juguete",
        stock: 25
    },
    {
        id: 4,
        nombre: "Collar Antipulgas",
        precio: 15000,
        categoria: "Salud",
        stock: 40
    }
];

function mostrarProductos(){
    console.log("===CATALOGO DE PRODUCTOS")
    productos.forEach(producto => {
        console.log(`${producto.nombre} - $ ${producto.precio} Stock ${producto.stock}`)
    })
}

function buscarProducto(nombre){
    return productos.find(p => p.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase()));
}

/***/ },

/***/ "./src/servicios.js"
/*!**************************!*\
  !*** ./src/servicios.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   agendarServicio: () => (/* binding */ agendarServicio),
/* harmony export */   mostrarServicios: () => (/* binding */ mostrarServicios),
/* harmony export */   servicios: () => (/* binding */ servicios)
/* harmony export */ });
const servicios = {
    peluqueria: {
        nombre: "Peluqueria Canina",
        precio: 20000,
        duracion: "1-2 horas"
    },
    veterinaria:{
        nombre: "Consulta Veterinaria",
        precio: 30000,
        duracion: "30-45 minutos"
    },
    guarderia:{
        nombre: "Guarderia Diaria",
        precio: 15000,
        duracion: "Dia completo"
    }
}

function mostrarServicios(){
    console.log("===SERVICIOS DISPONIBLES===")
    for(let servicio in servicios){
        const s = servicios[servicio];
        console.log(`${s.nombre} - $${s.precio} (${s.duracion})`)
    }
}

function agendarServicio(tipoServicio, mascota){
    const servicio= servicios[tipoServicio];
    if(servicio){
        return `Servicio agendado: ${servicio.nombre} para ${mascota}`;
    }
    return "Servicio no disponible"
}

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productos.js */ "./src/productos.js");
/* harmony import */ var _servicios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios.js */ "./src/servicios.js");
/* harmony import */ var _carrito_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrito.js */ "./src/carrito.js");






console.log("🐾 BIENVENIDO A LA TIENDA DE MASCOTAS 🐾")
;(0,_productos_js__WEBPACK_IMPORTED_MODULE_0__.mostrarProductos)();
(0,_servicios_js__WEBPACK_IMPORTED_MODULE_1__.mostrarServicios)();

console.log("🐾 SIMULACION DE COMPRA 🐾")

const alimento = (0,_productos_js__WEBPACK_IMPORTED_MODULE_0__.buscarProducto)("Alimento");
const juguete = (0,_productos_js__WEBPACK_IMPORTED_MODULE_0__.buscarProducto)("juguetes");

if(alimento) (0,_carrito_js__WEBPACK_IMPORTED_MODULE_2__.agregarAlCarrito)(alimento, 2);
if(juguete) (0,_carrito_js__WEBPACK_IMPORTED_MODULE_2__.agregarAlCarrito)(juguete, 1);

(0,_carrito_js__WEBPACK_IMPORTED_MODULE_2__.verCarrito)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQVM7QUFDNUI7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUIsdUJBQXVCLFNBQVM7QUFDdEU7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVSxJQUFJLHNCQUFzQixJQUFJLGVBQWUsS0FBSyxjQUFjO0FBQ2pHLEtBQUs7QUFDTDtBQUNBLDJCQUEyQixnQkFBZ0I7QUFDM0M7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCLE1BQU0saUJBQWlCLFFBQVEsZUFBZTtBQUN0RixLQUFLO0FBQ0w7QUFDQTtBQUNPO0FBQ1A7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeENPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVLEtBQUssVUFBVSxHQUFHLFdBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EscUNBQXFDLGlCQUFpQixPQUFPLFFBQVE7QUFDckU7QUFDQTtBQUNBLEM7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTjZFO0FBQzdFO0FBQ21FO0FBQ25FO0FBQ29GO0FBQ3BGO0FBQ0E7QUFDQSxnRUFBZ0I7QUFDaEIsK0RBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBYztBQUMvQixnQkFBZ0IsNkRBQWM7QUFDOUI7QUFDQSxhQUFhLDZEQUFnQjtBQUM3QixZQUFZLDZEQUFnQjtBQUM1QjtBQUNBLHVEQUFVLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWVuZGFtYXNjb3RhLy4vc3JjL2NhcnJpdG8uanMiLCJ3ZWJwYWNrOi8vdGllbmRhbWFzY290YS8uL3NyYy9wcm9kdWN0b3MuanMiLCJ3ZWJwYWNrOi8vdGllbmRhbWFzY290YS8uL3NyYy9zZXJ2aWNpb3MuanMiLCJ3ZWJwYWNrOi8vdGllbmRhbWFzY290YS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aWVuZGFtYXNjb3RhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aWVuZGFtYXNjb3RhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGllbmRhbWFzY290YS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpZW5kYW1hc2NvdGEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvZHVjdG9zIH0gZnJvbSBcIi4vcHJvZHVjdG9zXCI7XHJcblxyXG5sZXQgY2Fycml0byA9W107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWdyZWdhckFsQ2Fycml0byhwcm9kdWN0bywgY2FudGlkYWQgPSAxKXtcclxuICAgIGNvbnN0IGl0ZW0gPXtcclxuICAgICAgICBwcm9kdWN0bzogcHJvZHVjdG8sXHJcbiAgICAgICAgY2FudGlkYWQ6IGNhbnRpZGFkLFxyXG4gICAgICAgIHN1YnR0b3RhbDogcHJvZHVjdG9zLnByZWNpbyAqIGNhbnRpZGFkXHJcbiAgICB9O1xyXG4gICAgY2Fycml0by5wdXNoKGl0ZW0pO1xyXG4gICAgY29uc29sZS5sb2coYOKckyAke3Byb2R1Y3RvLm5vbWJyZX0gYWdyZWdhZHAgYWwgQ2Fycml0byh4JHtjYW50aWRhZH0pYClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlckNhcnJpdG8oKXtcclxuICAgIGNvbnNvbGUubG9nKFwiPT09Q0FSUklUTyBERSBDT01QUkFTPT09XCIpXHJcbiAgICBpZihjYXJyaXRvLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFbCBjYXJyaXRvIGVzdGEgdmFjaW9cIilcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjYXJyaXRvLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtpbmRleCArIDF9LiAke2l0ZW0ucHJvZHVjdG8ubm9tYnJlfSB4ICR7aXRlbS5jYW50aWRhZH0gPSAkJHtpdGVtLnN1YnRvdGFsfWApXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGBUT1RBTDogJCR7Y2FsY3VsYXJUb3RhbCgpfWApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhclRvdGFsKCl7XHJcbiAgICByZXR1cm4gY2Fycml0by5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIGl0ZW0uc3VidG90YWwsIDApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWNpYXJDYXJyaXRvKCl7XHJcbiAgICBjYXJyaXRvID0gW11cclxuICAgIGNvbnNvbGUubG9nKFwiQ2Fycml0byB2YWNpYWRvXCIpXHJcbn1cclxuXHJcbmV4cG9ydCB7Y2Fycml0b30iLCJleHBvcnQgY29uc3QgcHJvZHVjdG9zID1bXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbm9tYnJlOiBcIkFsaW1lbnRvIFByZW1pdW0gcGFyYSBQZXJyb3NcIixcclxuICAgICAgICBwcmVjaW86IDI1MDAwLFxyXG4gICAgICAgIGNhdGVnb3JpYTogXCJBbGltZW50b1wiLFxyXG4gICAgICAgIHN0b2NrOiA1MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBub21icmU6IFwiQXJlbmEgU2FuaXRhcmlhIHBhcmEgR2F0b3NcIixcclxuICAgICAgICBwcmVjaW86IDg1MDAsXHJcbiAgICAgICAgY2F0ZWdvcmlhOiBcIkhpZ2llbmVcIixcclxuICAgICAgICBzdG9jazogMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbm9tYnJlOiBcIkp1Z3VldGUgSW50ZXJhY3Rpdm9cIixcclxuICAgICAgICBwcmVjaW86IDEyMDAwLFxyXG4gICAgICAgIGNhdGVnb3JpYTogXCJKdWd1ZXRlXCIsXHJcbiAgICAgICAgc3RvY2s6IDI1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIG5vbWJyZTogXCJDb2xsYXIgQW50aXB1bGdhc1wiLFxyXG4gICAgICAgIHByZWNpbzogMTUwMDAsXHJcbiAgICAgICAgY2F0ZWdvcmlhOiBcIlNhbHVkXCIsXHJcbiAgICAgICAgc3RvY2s6IDQwXHJcbiAgICB9XHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9zdHJhclByb2R1Y3Rvcygpe1xyXG4gICAgY29uc29sZS5sb2coXCI9PT1DQVRBTE9HTyBERSBQUk9EVUNUT1NcIilcclxuICAgIHByb2R1Y3Rvcy5mb3JFYWNoKHByb2R1Y3RvID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcm9kdWN0by5ub21icmV9IC0gJCAke3Byb2R1Y3RvLnByZWNpb30gU3RvY2sgJHtwcm9kdWN0by5zdG9ja31gKVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1c2NhclByb2R1Y3RvKG5vbWJyZSl7XHJcbiAgICByZXR1cm4gcHJvZHVjdG9zLmZpbmQocCA9PiBwLm5vbWJyZS50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKG5vbWJyZS50b0xvY2FsZUxvd2VyQ2FzZSgpKSk7XHJcbn0iLCJleHBvcnQgY29uc3Qgc2VydmljaW9zID0ge1xyXG4gICAgcGVsdXF1ZXJpYToge1xyXG4gICAgICAgIG5vbWJyZTogXCJQZWx1cXVlcmlhIENhbmluYVwiLFxyXG4gICAgICAgIHByZWNpbzogMjAwMDAsXHJcbiAgICAgICAgZHVyYWNpb246IFwiMS0yIGhvcmFzXCJcclxuICAgIH0sXHJcbiAgICB2ZXRlcmluYXJpYTp7XHJcbiAgICAgICAgbm9tYnJlOiBcIkNvbnN1bHRhIFZldGVyaW5hcmlhXCIsXHJcbiAgICAgICAgcHJlY2lvOiAzMDAwMCxcclxuICAgICAgICBkdXJhY2lvbjogXCIzMC00NSBtaW51dG9zXCJcclxuICAgIH0sXHJcbiAgICBndWFyZGVyaWE6e1xyXG4gICAgICAgIG5vbWJyZTogXCJHdWFyZGVyaWEgRGlhcmlhXCIsXHJcbiAgICAgICAgcHJlY2lvOiAxNTAwMCxcclxuICAgICAgICBkdXJhY2lvbjogXCJEaWEgY29tcGxldG9cIlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9zdHJhclNlcnZpY2lvcygpe1xyXG4gICAgY29uc29sZS5sb2coXCI9PT1TRVJWSUNJT1MgRElTUE9OSUJMRVM9PT1cIilcclxuICAgIGZvcihsZXQgc2VydmljaW8gaW4gc2VydmljaW9zKXtcclxuICAgICAgICBjb25zdCBzID0gc2VydmljaW9zW3NlcnZpY2lvXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtzLm5vbWJyZX0gLSAkJHtzLnByZWNpb30gKCR7cy5kdXJhY2lvbn0pYClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFnZW5kYXJTZXJ2aWNpbyh0aXBvU2VydmljaW8sIG1hc2NvdGEpe1xyXG4gICAgY29uc3Qgc2VydmljaW89IHNlcnZpY2lvc1t0aXBvU2VydmljaW9dO1xyXG4gICAgaWYoc2VydmljaW8pe1xyXG4gICAgICAgIHJldHVybiBgU2VydmljaW8gYWdlbmRhZG86ICR7c2VydmljaW8ubm9tYnJlfSBwYXJhICR7bWFzY290YX1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiU2VydmljaW8gbm8gZGlzcG9uaWJsZVwiXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcHJvZHVjdG9zLCBtb3N0cmFyUHJvZHVjdG9zLCBidXNjYXJQcm9kdWN0byB9IGZyb20gXCIuL3Byb2R1Y3Rvcy5qc1wiO1xyXG5cclxuaW1wb3J0IHsgbW9zdHJhclNlcnZpY2lvcywgYWdlbmRhclNlcnZpY2lvIH0gZnJvbSBcIi4vc2VydmljaW9zLmpzXCI7XHJcblxyXG5pbXBvcnQgeyBhZ3JlZ2FyQWxDYXJyaXRvLCB2YWNpYXJDYXJyaXRvLCB2ZXJDYXJyaXRvLCBjYXJyaXRvIH0gZnJvbSBcIi4vY2Fycml0by5qc1wiO1xyXG5cclxuY29uc29sZS5sb2coXCLwn5C+IEJJRU5WRU5JRE8gQSBMQSBUSUVOREEgREUgTUFTQ09UQVMg8J+QvlwiKVxyXG5tb3N0cmFyUHJvZHVjdG9zKCk7XHJcbm1vc3RyYXJTZXJ2aWNpb3MoKTtcclxuXHJcbmNvbnNvbGUubG9nKFwi8J+QviBTSU1VTEFDSU9OIERFIENPTVBSQSDwn5C+XCIpXHJcblxyXG5jb25zdCBhbGltZW50byA9IGJ1c2NhclByb2R1Y3RvKFwiQWxpbWVudG9cIik7XHJcbmNvbnN0IGp1Z3VldGUgPSBidXNjYXJQcm9kdWN0byhcImp1Z3VldGVzXCIpO1xyXG5cclxuaWYoYWxpbWVudG8pIGFncmVnYXJBbENhcnJpdG8oYWxpbWVudG8sIDIpO1xyXG5pZihqdWd1ZXRlKSBhZ3JlZ2FyQWxDYXJyaXRvKGp1Z3VldGUsIDEpO1xyXG5cclxudmVyQ2Fycml0bygpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9