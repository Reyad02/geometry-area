backgroundColorChange();
backgroundColorBack();
function calculateTriangleAree() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBase = triangleBaseInput.value;
    const base = parseFloat(triangleBase);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeight = triangleHeightInput.value;
    const height = parseFloat(triangleHeight);


    const res = 0.5 * base * height;
    const resDiv = document.getElementById('res-div');
    resDiv.style.display = 'inline';
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = res;

}

function backgroundColorChange() {
    document.getElementById('triangle-container').addEventListener('mouseover', function () {
        document.getElementById('triangle-container').style.backgroundColor = 'lightpink';
    })
}
function backgroundColorBack() {
    document.getElementById('triangle-container').addEventListener('mouseout', function () {
        document.getElementById('triangle-container').style.backgroundColor = 'white';
    })
}