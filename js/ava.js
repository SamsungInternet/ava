document.addEventListener('DOMContentLoaded', function() {

});

/*******************************************UTILS */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var hideSplash = function(){
    document.querySelector('#splash').style.display = 'none';
};

var showSplash = function(){
    document.querySelector('#splash').style.display = 'block';
};