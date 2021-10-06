import {data} from './data' 


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat : 40.748635550585625, lng: -73.98575023184247 },
    zoom: 8,
    mapTypeId: 'roadmap'
  }); 
}

function addMarkerOnMap() {
  const marker = new google.maps.Marker({
    position: dream.coordinates, 
    map: map, 
    icon : dream.done ? './img/marker_done.jpg' : './img/marker.jpg'
  })
}





export { initMap, addMarkerOnMap }