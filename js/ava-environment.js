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
        this.generateFlora(this.data.numPlants, false);
        this.generateFlora(this.data.numPlants, true);
        this.playBGSound();
    },
    generateFlora: function(num, weed){
        for(i = 0; i < num; i++){
            var sp = (weed)? 4 : 0;
            var ep = (weed)? _plantInfo.length: 4;
            var p = Math.floor(getRandomArbitrary(sp, ep));
            var t = document.createElement('a-image');
            t.setAttribute('src', '#' + _plantInfo[p].name);
            t.setAttribute('width', getRandomArbitrary(_plantInfo[p].width[0], _plantInfo[p].width[1]));
            var th = getRandomArbitrary(_plantInfo[p].height[0], _plantInfo[p].height[1]);
            t.setAttribute('height', th);
            var py = (th/2);
            plantPos = (weed)? 20:200;
            t.setAttribute('position', getRandomArbitrary(-plantPos, plantPos) + ' ' + py + ' ' +getRandomArbitrary(-plantPos, plantPos));
            t.setAttribute('look-at', '#cam');
            this.el.appendChild(t);
            console.log(getRandomArbitrary(-weed, weed));
        }
    },
    generateClouds: function(num){
        for(i = 0; i < num; i++){
            var  t = Math.round(Math.random());
            var c = document.createElement('a-image');
            c.setAttribute('src', '#cloud' + t);
            c.setAttribute('width', getRandomArbitrary(5, 25));
            c.setAttribute('height', getRandomArbitrary(5, 25));
            c.setAttribute('transparent', 'true');
            c.setAttribute('opacity', Math.random());
            var ch = getRandomArbitrary(40, 70);
            c.setAttribute('position', getRandomArbitrary(-200, 200) + ' ' + ch + ' ' +getRandomArbitrary(-200, 200));
            //c.setAttribute('rotation', '-90 0 0');
            c.setAttribute('look-at', '#cam');
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