window.addEventListener('load', pageLoaded);

// Inputs type range
var iptRangeR = document.querySelector('#inputR');
var iptRangeG = document.querySelector('#inputG');
var iptRangeB = document.querySelector('#inputB');

// Result div
var result = document.querySelector('#result');

// Onload page function
function pageLoaded() {    
    
    setColorResult(0, 0, 0);
    
    iptRangeR.addEventListener('change', getAllvaluesUpdated);
    iptRangeG.addEventListener('change', getAllvaluesUpdated);
    iptRangeB.addEventListener('change', getAllvaluesUpdated);
}

function getAllvaluesUpdated(){
    var listRanges = Array.from(document.querySelectorAll('input[type=range]'));
    var colorRgb = [];
    
    for (var index = 0; index < listRanges.length; index++) {
        const rangeInput = listRanges[index];
        rangeInput.nextElementSibling.value = rangeInput.value;
        colorRgb.push(rangeInput.nextElementSibling.value);        
    }

    setColorResult(colorRgb[0], colorRgb[1], colorRgb[2]);
}

function setColorResult(r, g, b) {
    result.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
