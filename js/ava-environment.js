var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const _plantInfo = [{name:'alder', height:[15,20], width:[5,7]},
                    {name:'birch', height:[18,21], width:[6,8]},
                    {name:'pine', height:[20,25], width:[8,12]},
                    {name:'hazel',height:[10,12], width:[8,11]},
                    {name:'meadowsweet', height:[.5,1.2], width:[.3,.6]},
                    {name:'bracken', height:[.6,2], width:[.6,.9]}];

AFRAME.registerSystem('ava-environment', {
    schema:{
        numPlants:{type:'number', default:20},
        numClouds:{type:'number', default:10}},
    init: function(){
        this.generateClouds(this.data.numClouds);
        this.generateFlora(this.data.numPlants);
        this.playBGSound();
    },
    generateFlora: function(num){
        for(i = 0; i < num; i++){
            var p = Math.floor(getRandomArbitrary(0, _plantInfo.length));
            var t = document.createElement('a-image');
            t.setAttribute('src', '#' + _plantInfo[p].name);
            t.setAttribute('width', getRandomArbitrary(_plantInfo[p].width[0], _plantInfo[p].width[1]));
            var th = getRandomArbitrary(_plantInfo[p].height[0], _plantInfo[p].height[1]);
            t.setAttribute('height', th);
            var py = (th/2)-.3;
            t.setAttribute('position', getRandomArbitrary(-60, 60) + ' ' + py + ' ' +getRandomArbitrary(-60, 60));
            t.setAttribute('look-at', '#cam');
            this.el.appendChild(t);
        }
    },
    generateClouds: function(num){
        for(i = 0; i < num; i++){
            var  t = Math.round(Math.random());
            var c = document.createElement('a-image');
            c.setAttribute('src', '#cloud' + t);
            c.setAttribute('width', getRandomArbitrary(5, 20));
            c.setAttribute('height', getRandomArbitrary(5, 10));
            var ch = getRandomArbitrary(30, 50);
            c.setAttribute('position', getRandomArbitrary(-60, 60) + ' ' + ch + ' ' +getRandomArbitrary(-60, 60));
            c.setAttribute('rotation', '-90 0 0');
            this.el.appendChild(c);
        }
    },
    playBGSound: function(){
        var bgSound = document.getElementById('ambient');
        var src = audioCtx.createMediaElementSource(bgSound);
        src.connect(audioCtx.destination);
        bgSound.play();
    
    }
});