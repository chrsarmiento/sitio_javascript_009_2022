$(document).ready(function() {

    $('#button01').click(function() {
        var ancho = screen.width;
        var alto = screen.height;
        $('#accion01').text('La resolución de tu pantalla es: ' + ancho + "x" + alto + " px");
    });

    $('#button02_1').on('click', function(){
        $('#accion02').hide(1000);
    });

    $('#button02_2').on('click', function(){
        $('#accion02').show('slow');
    });

    $('#button02_3').on('click', function(){
        $('#accion02').toggle(3000, function() {
            alert('Yo puedo ocultar o mostrar el texto según su estado');
        });
    });

    $('#accion02').on('click', function(){
        $(this).hide();
    });

    $('#accion02').on('mouseover', function(){
        $(this).css('color','red');
    });

    $('#accion02').on('mouseout', function(){
        $(this).css('color','black');
    });

    $('#button03_1').on('click', function(){
        $('#accion03').removeClass("text-danger").addClass("text-purple");
    });

    $('#button03_4').on('click', function(){
        $('#accion03').removeClass("text-purple").addClass("text-danger");
    });

    $('#button03_2').on('click', function(){
        $('#accion03').addClass("fst-italic");
    });

    $('#button03_3').on('click', function(){
        $('#accion03').removeClass("text-purple").removeClass("fst-italic");
    });

    $('#button04').on('click',function() {
        $('#accion04').slideDown('slow');
    });

    $('#button05').on('click',function() {
        $('#accion05').slideUp('slow');
    });

    $('#button06').on('click',function() {
        $('#accion06').slideToggle('slow');
    });

    $('#button07_1').on('click', function() {
        $('#accion07').attr('src','assets/img/pic_bulbon.gif').attr('alt','Luz encendida');
    });

    $('#button07_2').on('click', function() {
        $('#accion07').prop('src','assets/img/pic_bulboff.gif').prop('alt','Luz apagada');
    });

});