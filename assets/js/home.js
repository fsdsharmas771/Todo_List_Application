let category = document.querySelectorAll('.cat-egory');
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