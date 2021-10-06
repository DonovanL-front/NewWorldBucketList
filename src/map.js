import {data} from './data' 


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





export { initMap, addMarkerOnMap   }