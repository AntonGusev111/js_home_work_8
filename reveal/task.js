function showBlock(){
    let reveal = document.getElementsByTagName('div')
    for (let i =0; i<reveal.length; i++){
        if(reveal[i].className=='reveal'){
            const {top, bottom} = reveal[i].getBoundingClientRect();
            console.log(top, bottom)
            if (top < window.innerHeight){
            reveal[i].className = 'reveal reveal_active'; 
            }
            if (top > window.innerHeight){
            reveal[i].className  = 'reveal';
            }
        }
    }

}

window.addEventListener('scroll', function() {

    showBlock();
});
