var scn = null;
const _plantInfo = [{name:'alder', height:[15,20], width:[5,7]},
                    {name:'birch', height:[18,21], width:[6,8]},
                    {name:'pine', height:[20,25], width:[8,12]},
                    {name:'hazel',height:[10,12], width:[8,11]},
                    {name:'meadowsweet', height:[.5,1.2], width:[.3,.6]},
                    {name:'bracken', height:[.6,2], width:[.6,.9]}];

document.addEventListener('DOMContentLoaded', function() {
    scn = document.getElementById('avascene');
    //generateTrees(2);
});

var generateFlora = function(num){
    for(i = 0; i < num; i++){
        var p = Math.floor(getRandomArbitrary(0, _plantInfo.length));
        var t = document.createElement('a-image');
        t.setAttribute('src', '#' + _plantInfo[p].name);
        t.setAttribute('width', getRandomArbitrary(_plantInfo[p].width[0], _plantInfo[p].width[1]));
        t.setAttribute('height', getRandomArbitrary(_plantInfo[p].height[0], _plantInfo[p].height[1]));
        var py = 0;
        p > 3? py = -9.1: 0;
        t.setAttribute('position', getRandomArbitrary(-60, 60) + ' ' + py + ' ' +getRandomArbitrary(-60, 60));
        t.setAttribute('look-at', '#cam');
        scn.appendChild(t);
    }
};

/*******************************************UTILS */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}