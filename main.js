let result = document.querySelector('.results');
let inputs = document.querySelectorAll('.input');
let number = inputs[0];
let content = inputs[1];
let selection = inputs[2];
let inputsStyle = 'width: 250px; padding: 10px; font-size: 16px; border-radius: 6px;';
let contentStyle = 'width: 200px; background-color: #fc592c; color: white; padding: 10px; font-size 16px; text-align: center; border-radius: 6px; font-weight: bold';

document.body.style.cssText = 'font-family: Arial, Helvetica, sans-serif';

result.parentElement.style.cssText = 'display: flex; flex-direction: column; gap: 25px; align-items: center; padding: 25px 10px';
result.style.cssText = 'max-width: 860px; margin-top: 20px; display: flex; flex-wrap: wrap; justify-content: center; gap: 20px';

for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.cssText = `${inputsStyle} background-color: #fafafa; border: 1px solid #ccc`;
}

selection.nextElementSibling.style.cssText = `${inputsStyle} color: white; background-color: #009058; border: none; cursor: pointer`;

document.forms[0].addEventListener('submit', function (e) {
    e.preventDefault();
    if (content.value) {
        while (result.firstElementChild) {
            result.removeChild(result.firstElementChild);
        }
        for (let i = 0; i < number.value; i++) {
            let innerBox = document.createElement(`${selection.value}`);
            innerBox.className = 'box';
            let boxContent = document.createTextNode(`${content.value}`);
            innerBox.setAttribute('id', `id-${i + 1}`);
            innerBox.setAttribute('title', `Element`);
            innerBox.appendChild(boxContent);
            innerBox.style.cssText = contentStyle;
            result.appendChild(innerBox);
            console.log(innerBox);
        }
    }
})
