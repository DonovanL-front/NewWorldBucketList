import  {data} from './data';
import {addMarkerOnMap, visitDreamOnMap} from './map'

const dreamsContainer = document.querySelector('#dreamsContainer')


function buildAllDreams() { 
    while(dreamsContainer.hasChildNodes()) { 
        dreamsContainer.removeChild(dreamsContainer.lastChild)
    }
    
    data.forEach(buildOneDream)
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
    addMarkerOnMap(dream)
}

function addDreamsListener() { 
    document.querySelectorAll('.visit').forEach(el => { 
        el.addEventListener('click', event => {
            visitDream(el.parentElement.parentElement.getAttribute('id'));
        })
    });
} 

function visitDream(dreamId) { 
    let position = data.filter(item => item.id == dreamId)[0].coordinates;
    // visitDreamOnMap(position)
}


export {buildAllDreams}

