let category = document.querySelectorAll('.cat-egory');
let checkbox = document.querySelectorAll('.cb');
let deletebtn = document.getElementById('db');
let disc = document.getElementsByClassName('disc');
console.log(disc[0]);
let checked = false;
for(let i=0;i<category.length;i++){
    if(category[i].innerText=='Work'){
        category[i].style.background='red';
    }else if(category[i].innerText=='Personal'){
        category[i].style.background='green';
    }else if(category[i].innerText=='School'){
        category[i].style.background='yellow';
    }else if(category[i].innerText=='Cleaning'){
        category[i].style.background='cyan';
    }else{
        category[i].style.background='orange';
    }
}
for(let i =0;i<checkbox.length;i++){
    let atr = checkbox[i].dataset.info ;
    checkbox[i].addEventListener('click',function(){
        if(checked==false){
            deletebtn.href = `/delete/delete_todo/?id=${atr}`// to change the href of anchor tag having dlt btn
            disc[i].classList.add('linethrough-colourchange');
            checked=true;
        }else{
            deletebtn.href = '';
            disc[i].classList.remove('linethrough-colourchange');
            checked=false;
        }
        
    })
}
