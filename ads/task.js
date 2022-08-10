function rotation (){
    let rotator = Array.from(document.getElementsByClassName('rotator')[0]['children']);
    let currentPosition = 0;
    let delay = 1000;
    let interval = setTimeout(function tick() {
            if (rotator[currentPosition]['className'] == 'rotator__case rotator__case_active'){
                rotator[currentPosition]['className'] = 'rotator__case';
                rotator[currentPosition+1]['className'] = 'rotator__case rotator__case_active'
                rotator[currentPosition+1]['style']['color'] = rotator[currentPosition+1]['dataset']['color'];
                if (currentPosition === rotator.length-2){
                    rotator[0]['className'] = 'rotator__case rotator__case_active'
                    rotator[currentPosition+1]['className'] = 'rotator__case';
                    currentPosition = -1;
                }
                currentPosition++;
                delay = rotator[currentPosition]['dataset']['speed']
                interval = setTimeout(tick, delay);
            }
    }, delay)    
}

rotation ()

