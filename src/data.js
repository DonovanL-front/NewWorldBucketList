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
            lat: 65.68285974629876, lng: -17.550220712692955
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
           lat: 44.41693502270156, lng: -110.57205139889487
        }
    }
    
]

export { data }