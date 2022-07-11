const container = document.querySelector('.container'); 
let userValue;
const slider = document.querySelector(".slider");
const eraser = document.querySelector('.eraser'); 
const reset = document.querySelector('.reset'); 
const colorful = document.querySelector('.random-colors');
const black = document.querySelector('.black') ;
const buttons = document.querySelectorAll('button');
const gridStatus = document.querySelector(".grid-status");
let erased = false; 
let colored = false; 
let blacked = true;
let reseted = false;


buttons.forEach(button => button.addEventListener('click', () => {
    if (button.className === "eraser") {
        colorful.style.background = 'white';
        black.style.background = 'white';
        eraser.style.background = '#80FFCC';
        erased = true; 
        colored = false; 
        blacked = false; 
        reseted = false; 
        console.log('hey')
    } else if (button.className === 'black') {
        colorful.style.background = 'white';
        black.style.background = '#80FFCC';
        eraser.style.background = 'white';
        blacked = true; 
        colored = false; 
        erased = false; 
        reseted = false; 
        console.log('hello');
    } else if (button.className === 'random-colors') {
        colorful.style.background = '#80FFCC';
        black.style.background = 'white';
        eraser.style.background = 'white';
        colored = true; 
        blacked = false; 
        erased = false;
        reseted = false; 
    } else if (button.className === 'reset') {
        reseted = true; 
        colored = false; 
        blacked = false; 
        erased = false;
    }; 
}));





slider.addEventListener('click', () => {  
    container.textContent = '';
    gridStatus.textContent = `${slider.value}x${slider.value}`
    for (let i = 0; i < slider.value * slider.value; i++) {
        const grid = document.createElement('div');
        grid.classList.add('child');
        grid.setAttribute('style', `width: ${500/slider.value}px; height: ${500/slider.value}px; padding: 0px; margin: 0px;`);
        container.appendChild(grid);    
    };
    const containerChildren = document.querySelectorAll('.child');

    containerChildren.forEach(btn => btn.addEventListener('mouseenter', () => {  
       if (blacked) {
           btn.style.transition = '.5s'; 
           btn.style.background = 'rgba(19, 19, 19, 0.8)'; 
       } else if (erased) {
            btn.style.background = 'none';
       } else if (colored) {
            function random_rgba() {
                let o = Math.round, r = Math.random, s = 255;
                return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
            }
            
            let color = random_rgba();
            btn.style.background = color;
       };
       
    }));
  
    });



reset.addEventListener('click', () => {
    location.reload(true);
});

