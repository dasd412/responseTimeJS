

const screen=document.querySelector("#screen");

screen.addEventListener('click',function(){

    if(screen.classList.contains('waiting')){

        screen.classList.remove('waiting');
        screen.classList.add('ready');
        screen.textContent='If it is green, then click!';
    }
    else if(screen.classList.contains('ready')){

        screen.classList.remove('ready');
        screen.classList.add('now');
        screen.textContent='now click!!!';
    }else if(screen.classList.contains('now')){

        screen.classList.remove('now');
        screen.classList.add('waiting');
        screen.textContent='Click and restart!!';
    }

});