//Dropdown Menu #1
let One = document.querySelector('.containerOne');

let contents = [...document.querySelectorAll('.hide')];
contents.forEach((element)=>{
    element.addEventListener('click',()=>{
        if(element.parentNode.querySelector('.dlt')){
            element.parentNode.querySelector('.dlt').remove();
        }
        
        if(checkDisplay(contents)){
            One.style.maxHeight='15.5vh';
            contents.forEach((e)=>{
                e.style.display='block';
            });
        }
        else{
            contents.forEach((e)=>{
                if(e!=element){
                    e.style.display='none';
                }
            })
            One.style.maxHeight='5vh';
        }
    })
})

function checkDisplay(arr){
    let flag = false;
    arr.forEach((e)=>{
        if(e.style.display=='none'){
            flag = true;
        }
    })
    return flag
}

function initMenu(){
    [...document.querySelectorAll('.hide')].forEach(e=>{
        if(!e.classList.contains('dlt')){
            e.style.display='none'
        }
    });
    One.style.maxHeight='5vh';
}

document.addEventListener('DOMContentLoaded',initMenu);


//Dropdown Menu #2
let button = document.querySelector('.flip');
button.addEventListener('click',()=>{
    if(button.textContent=='^'){
        button.textContent='v'
    }
    else{
        button.textContent='^'
    }

    let popples = [...document.querySelectorAll('.pop>h6')]
    if(checkDisplay(popples)){
        popples.forEach(e=>e.style.display='block');
    }
    else{
        popples.forEach(e=>e.style.display='none');
    }
})
