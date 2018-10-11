'use strict'

var gProjs;

function createProjs(){
    gProjs = [
        creatrProj()
    ]
}

function creatrProj() {
    return
    {
        "id": "sokoban",
        "name": "Sokoban",
        "title": "Better push those boxes",
        "desc": "lorem ipsum lorem ipsum lorem ipsum",
        "url": "projs/sokoban",
        "publishedAt": 1448693940000,
        "labels": ["Matrixes", "keyboard events"],
    }
}

function addProj(proj){
    gProjs.puse(proj);
}

function getProjById(projId) {
    return gProjs.find(function(proj){
        return proj.id === projId;
    })
}

function deleteProj(projId) {
    var projIdx = gCars.findIndex(function(car){
        return proj.id === projId;
    })
    gProjs.splice(projIdx, 1)

}

// function updateProj(projId, x) {
//     var projIdx = gProjs.findIndex(function(car){
//         return proj.id === projId;
//     })
//     gProjs[projIdx].________ = x;
// }
