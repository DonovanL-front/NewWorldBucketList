import { data } from "./data";

let map;
let panorama;
let panoramaElement = document.querySelector('#panorama');
let resetMapBtn = document.getElementById("reset");
let backToMapBtn = document.getElementById("backToMap");


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.748635550585625, lng: -73.98575023184247 },
    zoom: 3,
    mapTypeId: "roadmap",
    streetViewControl: false,
  });

  panorama = new google.maps.StreetViewPanorama
  (document.getElementById("panorama"), {
      position: {lat: 44.4183062909995005,
        lng: -110.57198100092277722},
      pov: {
        heading: 34,
        pitch: 10,
      },
    }
  )
  addMapListener();
  panoramaElement.style.display = 'none';
  backToMapBtn.style.display = 'none';

}

function addMarkerOnMap(dream) {
  const marker = new google.maps.Marker({
    position: dream.coordinates,
    map: map,
    icon: dream.done ? "./img/marker_done.png" : "./img/marker.png",
  });

  marker.addListener("click", () => {
    zoomOn(marker.getPosition());
  });


}

function zoomOn(position) {
  map.setZoom(18);
  map.setCenter(position);
  map.setMapTypeId("satellite");
}

function addMapListener() {
  resetMapBtn.addEventListener("click", resetMap);
  backToMapBtn.addEventListener("click", backToMap);
}

function resetMap() {
  map.setZoom(3);
  map.setCenter({ lat: 48.858159, lng: 2.294497 });
  map.setMapTypeId("roadmap");
}

function backToMap() { 
  panoramaElement.style.display = 'none'
  backToMapBtn.style.display = 'none'
  resetMapBtn.style.display = 'block'
}


function visitDreamOnMap(position) { 
  panorama.setPosition(position)
  panoramaElement.style.display = 'block'
  backToMapBtn.style.display = 'block';
  resetMapBtn.style.display = "none"
}



export { initMap, addMarkerOnMap, visitDreamOnMap };
