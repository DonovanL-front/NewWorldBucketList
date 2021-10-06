import  {data} from './data';
import {addMarkerOnMap} from './map'

function buildAllDreams() { 
    data.forEach(buildOneDreams)

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
            <a href="#" type="button" class="btn btn-danger btn-md-block">${dream.done? "Je veux le refaire " : "Je me lance !"} </a>
        </div>
        <div class="card-footer text-muted text-right ">
                <a href="#" class="btn btn-outline-secondary btn-sm">Visiter</a> 
                <a href="#" class="btn btn-outline-dark btn-sm">Plus d'infos</a>   
        </div>
    </div>`
    addMarkerOnMap()
}


export {buildAllDreams}

