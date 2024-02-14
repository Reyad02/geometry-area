backgroundColorChange();
backgroundColorBack();
// function calculateParallelogramArea(){
//     const base = getParallogramBase();
//     console.log(base);
// }

// function getParallogramBase(){
//     const baseInput = document.getElementById('parallelogram-width');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }

function calculateParallelogramArea() {
    const width = getInputValueById('parallelogram-width');
    const height = getInputValueById('parallelogram-height');
    const res = width * height;
    setValue('parallelogram-area',res);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    return parseFloat(inputField.value);
}

function setValue(elementId, area) {
    const resDiv = document.getElementById('res-parallelogram');
    resDiv.style.display='inline';
    const parallelogramAreaSpan = document.getElementById(elementId);
    parallelogramAreaSpan.innerText=area; 
    

}

function backgroundColorChange() {
    document.getElementById('parallelogram-container').addEventListener('mouseover', function () {
        // document.getElementById('parallelogram-container').style.backgroundColor = 'silver';
        document.getElementById('parallelogram-container').classList.add('bg-yellow-100');
    })
}
function backgroundColorBack() {
    document.getElementById('parallelogram-container').addEventListener('mouseout', function () {
        // document.getElementById('parallelogram-container').style.backgroundColor = 'white';
        document.getElementById('parallelogram-container').classList.remove('bg-yellow-100');

    })
}