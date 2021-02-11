$(document).ready(function(){
    $('select').change(function(){
        let choice = window.document.getElementById('cars').value
        alert(`You chose: ${choice}`)
    })
})