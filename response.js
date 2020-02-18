

const screen=document.querySelector("#screen");

let startTime,endTime;//variable gloabalizing 

screen.addEventListener('click',function(){
   


    if(screen.classList.contains('waiting')){

        screen.classList.remove('waiting');
        screen.classList.add('ready');
        screen.textContent='If it is green, then click!';
        
        setTimeout(function(){
            startTime=Date.now();
            screen.click();
        },Math.floor(Math.random()*1000)+2000);

    }
    else if(screen.classList.contains('ready')){
      

        screen.classList.remove('ready');
        screen.classList.add('now');
        screen.textContent='now click!!!';
      
    }else if(screen.classList.contains('now')){


        endTime=Date.now();
        console.log('your response time is : ',(endTime-startTime)/1000,'ms');

        screen.classList.remove('now');
        screen.classList.add('waiting');
        screen.textContent='Click and restart!!';
    }

});