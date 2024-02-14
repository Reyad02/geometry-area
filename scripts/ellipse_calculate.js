backgroundColorChange();
backgroundColorBack();
function calculateEllipseArea() {
    const a = calculate('ellipse-p');
    const b = calculate('ellipse-b');
    const area = 0.5 * a * b;
    setArea('ellipse-area',area);
}

function calculate(value) {
    return parseFloat(document.getElementById(value).value);
}

function setArea(elementId, area){
    document.getElementById('res-ellipse').style.display='inline';
    document.getElementById(elementId).innerText=area;
}

function backgroundColorChange() {
    document.getElementById('ellipse-contianer').addEventListener('mouseover', function () {
        document.getElementById('ellipse-contianer').classList.add('bg-fuchsia-300');
        // document.getElementById('ellipse-contianer').style.backgroundColor = 'gray';
    })
}
function backgroundColorBack() {
    document.getElementById('ellipse-contianer').addEventListener('mouseout', function () {
        document.getElementById('ellipse-contianer').classList.remove('bg-fuchsia-300');
    })
}