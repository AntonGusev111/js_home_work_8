function switchBook(element){
    const book = document.querySelector('.book');

    if(element.classList[1] == 'font-size_active' || element.classList[1] == 'font-size_big'|| element.classList[1] == 'font-size_small'){
        if(element.dataset.size==undefined && book.classList[1]==undefined){
            return false
        }
        if(element.dataset.size==undefined && book.classList[1]!=undefined){
            book.classList.replace(book.classList[1],'b');
            return false
        }
        else {
        if (book.classList[1]==undefined){
            book.classList.toggle('book_fs-'+element.dataset.size)
            return false
        }
        else{
            book.classList.replace(book.classList[1],'book_fs-'+element.dataset.size)
            return false
        }
        }
    }
    if(element.dataset.textColor){       
        if (book.classList[2] == undefined){          
            book.classList.toggle('book_color-'+element.dataset.textColor);
            return false
        }
        book.classList.replace(book.classList[2],'book_color-'+element.dataset.textColor)
        return false
    }
    if(element.dataset.bgColor){
        if (book.classList[3] == undefined){  
            book.classList.toggle('book_color-black');       
            book.classList.toggle('book_bg-'+element.dataset.bgColor);
            return false
        }
        book.classList.replace(book.classList[3],'book_bg-'+element.dataset.bgColor)
        return false
    }  

}

function switchOff(list){
    let marker = '';
    if (list[0].parentElement.className=='book__control book__control_font-size'){
        marker = 'font-size_active';
    }
    if (list[0].parentElement.className=='book__control book__control_color'){
        marker = 'color_active';
    }
    if (list[0].parentElement.className=='book__control book__control_background'){
        marker = 'color_active';
    }
    for (let i = 0; i < list.length; i++){
        list[i].classList.remove(marker);
    }
    return false
}

function selection() {
    const colorArr = Array.from(document.getElementsByClassName('book__control book__control_color')[0].children);
    const fontArr = Array.from(document.getElementsByClassName('book__control book__control_font-size')[0].children);
    const bgCollorArray = Array.from(document.getElementsByClassName('book__control book__control_background')[0].children);
    const toollBarArray = colorArr.concat(bgCollorArray,fontArr);
    for (let i = 0; i < toollBarArray.length; i++){
        toollBarArray[i].onclick=()=>{
            if (toollBarArray[i].parentElement.className == 'book__control book__control_font-size'){
                switchOff(fontArr);
                toollBarArray[i].className = toollBarArray[i].className + ' font-size_active'
                switchBook(toollBarArray[i]);
                return false
            }
            if (toollBarArray[i].parentElement.className == 'book__control book__control_color'){
                switchOff(colorArr);
                toollBarArray[i].className = toollBarArray[i].className + ' color_active'
                switchBook(toollBarArray[i]);
                return false
            }
            if (toollBarArray[i].parentElement.className == 'book__control book__control_background'){
                switchOff(bgCollorArray);
                toollBarArray[i].className = toollBarArray[i].className + ' color_active'
                switchBook(toollBarArray[i]);
                return false
            }
            return false 
        }
        
    }
    
}

selection()
