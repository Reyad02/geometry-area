backgroundColorChange();
backgroundColorBack();
function calculateRhombusArea() {
    const d1 = calculateD('rhombus-d1');
    const d2 = calculateD('rhombus-d2');
    const area = 0.5 * d1 * d2;
    setRhombusArea('rhombus-area',area);
}

function calculateD(value) {
    return parseFloat(document.getElementById(value).value);
}

function setRhombusArea(elementId, area){
    document.getElementById('res-rhombus').style.display='inline';
    document.getElementById(elementId).innerText=area;
}

function backgroundColorChange() {
    document.getElementById('rhombus-contianer').addEventListener('mouseover', function () {
        document.getElementById('rhombus-contianer').style.backgroundColor = 'lightblue';
    })
}
function backgroundColorBack() {
    document.getElementById('rhombus-contianer').addEventListener('mouseout', function () {
        document.getElementById('rhombus-contianer').style.backgroundColor = 'white';
    })
}