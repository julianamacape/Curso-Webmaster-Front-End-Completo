let slider = document.getElementById('myrange')
let output = document.getElementById('value')

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}

/* using percentage

slider.oninput = function(){
    output.innerHTML = `${this.value}%`;
}

(CSS)

.slider::after {
    content: '100%';
}

.slider::before {
    content: '0%';
}
*/

slider.addEventListener('mousemove',function(){
    let x = slider.value;
    let color = `linear-gradient(90deg, #79d983 ${x}%, #edffef ${x}%)`;
    slider.style.background = color
})