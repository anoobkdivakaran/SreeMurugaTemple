$(document).ready(function() {
    getCurrentYear();
})

function getCurrentYear() {
    var d = new Date();
    var n = d.getFullYear();
    $('#copyyear').html("2020 - " + n);
}