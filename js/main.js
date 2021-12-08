const cusMouse = document.getElementById("cusMouse");

document.body.addEventListener('pointermove', ev => {
    ev.preventDefault()

    let cliY = ev.pageY;
    let cliX = ev.pageX;

    cusMouse.style.top  = (cliY - 5) + 'px';
    cusMouse.style.left = (cliX - 8) + 'px';

});