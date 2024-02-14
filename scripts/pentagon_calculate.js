backgroundColorChange();
backgroundColorBack();
function calculatePentagonArea() {
    const d1 = calculate('pentagon-p');
    const d2 = calculate('pentagon-b');
    const area = 0.5 * p * b;
    setArea('pentagon-area',area);
}

function calculate(value) {
    return parseFloat(document.getElementById(value).value);
}

function setArea(elementId, area){
    document.getElementById('res-pentagon').style.display='inline';
    document.getElementById(elementId).innerText=area;
}

function backgroundColorChange() {
    document.getElementById('pentagon-contianer').addEventListener('mouseover', function () {
        document.getElementById('pentagon-contianer').style.backgroundColor = 'coral';
    })
}
function backgroundColorBack() {
    document.getElementById('pentagon-contianer').addEventListener('mouseout', function () {
        document.getElementById('pentagon-contianer').style.backgroundColor = 'white';
    })
}