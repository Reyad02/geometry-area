backgroundColorChange();
backgroundColorBack();
function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidth = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidth);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLength = rectangleLengthInput.value;
    const length = parseFloat(rectangleLength);


    const res = width * length;
    const resOfRectangle = document.getElementById('res-rectangle');
    resOfRectangle.style.display = 'inline';
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = res;


}

function backgroundColorChange() {
    document.getElementById('rectangle-container').addEventListener('mouseover', function () {
        document.getElementById('rectangle-container').style.backgroundColor = 'aquamarine';
    })
}
function backgroundColorBack() {
    document.getElementById('rectangle-container').addEventListener('mouseout', function () {
        document.getElementById('rectangle-container').style.backgroundColor = 'white';
    })
}