

// document.getElementById('.loginButton').addEventListener('click',function()
// {
//     document.querySelector('.loginModal').style.display = 'block';
// })

$(document).ready(function() {

    $('#loginButton').on('click', function() {
        $('#loginModal').modal()
    });
    $('#loginModal').on('hidden.bs.modal', function(e) {})
    $(".dismiss").on('click', function() {
        $('#loginModal').modal('hide')
    });
    $('#reverseTable').on('click', function() {
        $('#reverseModal').modal()
    });
    $('#reverseModal').on('hidden.bs.modal', function(e) {})
    $(".dismiss").on('click', function() {
        $('#reverseModal').modal('hide')
    });
});