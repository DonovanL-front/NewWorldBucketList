import {initMap} from './map'
import { buildAllDreams } from './dreams'


window.init = init
function init() { 
    initMap();
    buildAllDreams();
}

init()