/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = [ 
    {
        id: 1,
        description: "Empire State Building" , 
        done: false,
        link: "https://www.esbnyc.com/",
        imagePath: "./img/empire-state-building.jpg",
        coordinates: {
            lat : 40.748635550585625,
            lng : -73.98575023184247
        }
    },

    {
        id: 2 , 
        description: "Aurores boréales en Islande",
        done: false,
        link: "https://www.scanditours.fr/inspirations/aurores-boreales-islande/",
        imagePath: "./img/boreales.jpg",
        coordinates: {
            lat: 63.983, 
            lng: -19.067
        }

    },
    {
        id: 3,
        description: "Grand Canyon", 
        done: false, 
        link: "https://www.nps.gov/grca/index.html",
        imagePath: "./img/horseshoe.jpg",
        coordinates: {
            lat: 36.0544445, 
            lng: -112.1401108
        }

    },
    {
        id: 4,
        description: "Yellowstone Nationnal Park", 
        done: true , 
        link: "https://www.nps.gov/yell/index.htm",
        imagePath : "./img/Yellowstone.jpg", 
        coordinates: {
            lat: 44.4183062909995005,
            lng: -110.57198100092277722
        }
    }
    
]



/***/ }),

/***/ "./src/dreams.js":
/*!***********************!*\
  !*** ./src/dreams.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildAllDreams": () => (/* binding */ buildAllDreams)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/map.js");



const dreamsContainer = document.querySelector('#dreamsContainer')


function buildAllDreams() { 
    while(dreamsContainer.hasChildNodes()) { 
        dreamsContainer.removeChild(dreamsContainer.lastChild)
    }
    
    _data__WEBPACK_IMPORTED_MODULE_0__.data.forEach(buildOneDream)
    addDreamsListener()


}

function buildOneDream(dream) { 
    let dreamElement = document.createElement('div')
    dreamElement.innerHTML = `
    <div class="card text-center">
            <h4 class="card-header">
                 ${dream.description}
            </h4>
            <img src="${dream.imagePath}" alt="|||||||">
        <div class="card-body">
            <a href="#" type="button" class="btn btn-${dream.done ? "secondary" : "danger"} btn-block">${dream.done? "Je veux le refaire !" : "Je me lance"}</a>
        </div>
        <div class="card-footer text-muted text-right ">
                <a href="#" class="btn visit btn-outline-secondary btn-sm">Visiter</a> 
                <a href="${dream.link}" target="blank" class="btn btn-outline-dark btn-sm">Plus d'infos</a>   
        </div>
    </div>`

    dreamsContainer.appendChild(dreamElement)
    ;(0,_map__WEBPACK_IMPORTED_MODULE_1__.addMarkerOnMap)(dream)
}

function addDreamsListener() { 
    document.querySelectorAll('.visit').forEach(el => { 
        el.addEventListener('click', event => {
            visitDream(el.parentElement.parentElement.getAttribute('id'));
        })
    });
} 

function visitDream(dreamId) { 
    let position = _data__WEBPACK_IMPORTED_MODULE_0__.data.filter(item => item.id == dreamId)[0].coordinates;
    // visitDreamOnMap(position)
}






/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initMap": () => (/* binding */ initMap),
/* harmony export */   "addMarkerOnMap": () => (/* binding */ addMarkerOnMap)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
 


let map;

let resetMapBtn = document.getElementById('reset')
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat : 40.748635550585625, lng: -73.98575023184247 },
    zoom: 8,
    mapTypeId: 'roadmap'
  }); 
  addMapListener()
}

function addMarkerOnMap(dream) {
  const marker = new google.maps.Marker({
    position: dream.coordinates, 
    map: map, 
    icon : dream.done ?"./img/marker_done.png" : "./img/marker.png"
  })

  marker.addListener("click", () => { 
    zoomOn(marker.getPosition())
  });
}


function zoomOn(position) { 
  map.setZoom(18);
  map.setCenter(position);
  map.setMapTypeId("satellite")
}

function addMapListener() {
  resetMapBtn.addEventListener('click', resetMap)
}


function resetMap() { 
  map.setZoom(3);
  map.setCenter({ lat: 48.858159, lng: 2.294497});
  map.setMapTypeId("roadmap")
}







/***/ })

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony import */ var _dreams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dreams */ "./src/dreams.js");




window.init = init
function init() { 
    ;(0,_map__WEBPACK_IMPORTED_MODULE_0__.initMap)()
    ;(0,_dreams__WEBPACK_IMPORTED_MODULE_1__.buildAllDreams)();
}

init()
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map