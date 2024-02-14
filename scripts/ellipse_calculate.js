backgroundColorChange();
backgroundColorBack();
function calculateEllipseArea() {
    const a = calculateEllipse('ellipse-a');
    const b = calculateEllipse('ellipse-b');
    const area = 0.5 * a * b;
    setEllipseArea('ellipse-area',area);
}

function calculateEllipse(value) {
    return parseFloat(document.getElementById(value).value);
}

function setEllipseArea(elementId, area){
    document.getElementById('res-ellipse').style.display='inline';
    document.getElementById(elementId).innerText=area;
}

function backgroundColorChange() {
    document.getElementById('ellipse-contianer').addEventListener('mouseover', function () {
        document.getElementById('ellipse-contianer').classList.add('bg-fuchsia-300');
    })
}
function backgroundColorBack() {
    document.getElementById('ellipse-contianer').addEventListener('mouseout', function () {
        document.getElementById('ellipse-contianer').classList.remove('bg-fuchsia-300');
    })
}