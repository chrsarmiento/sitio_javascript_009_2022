$(document).ready(function() {
    for(let i=1; i<=898; i++){
        var url = `<img id=${i} class="img-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">`;
        $('#listado-pokemon').append(url);
    }
});

$(document).on('mouseover', '.img-pokemon', function() {
    var id = $(this).attr('id');
    $(this).css('background-color','lightgray');
    var url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    console.log(id);

    $.get(url, function(data) {
        $('#nombre-pokemon').text(capitalizarTexto(data.name));
        $('#imagen-pokemon').attr('src',data.sprites.front_default).attr('alt',data.name);
        
        var tipo = '<h5 class="card-title fw-bold">Type</h5><ul>';
        for(let i=0; i < data.types.length; i++){
            tipo = tipo + (`<li>${capitalizarTexto(data.types[i].type.name)}</li>`);
        }
        tipo = tipo + '</ul>';
        $('#tipo-pokemon').html(tipo);

        var peso = `<h5 class="card-title fw-bold">Weight</h5><p class="card-text">${data.weight/10} kgs.</p>`;
        $('#peso-pokemon').html(peso);

        var estatura = `<h5 class="card-title fw-bold">Height</h5><p class="card-text">${data.height/10} mts.</p>`;
        $('#estatura-pokemon').html(estatura);

    },"json").fail(function() {
        alert("Ups!!!");
    });
});

$(document).on('mouseout', '.img-pokemon', function() {
    var id= $(this).attr('id');
    $(this).css('background-color','transparent');
    $('#nombre-pokemon').text('');
    $('#imagen-pokemon').attr('src',"#").attr('alt','');
    $('#tipo-pokemon').html('');
    $('#peso-pokemon').html('');
    $('#estatura-pokemon').html('');
});

function capitalizarTexto(texto) {
    var capitalizado = texto.substr(0,1).toUpperCase() + texto.substr(1, texto.length).toLowerCase();
    return capitalizado;
}

