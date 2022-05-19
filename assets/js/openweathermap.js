$.getScript("assets/js/scripts_key.js", function() {
    getKey();
});

$('#buscar_clima').on('click', function() {
    var ciudad = $('#ciudad_buscada').val();
    if(ciudad.trim().length > 0){
        var units = 'metric';
        var lang = 'es';
        var apiid = getKey();
        var url1 = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=${units}&lang=${lang}&appid=${apiid}`;
    
        $.getJSON(url1, function(data1) {
            var url2 = `https://restcountries.com/v3.1/alpha/${data1.sys.country}`;
            $.getJSON(url2, function(data2) {
                var html = `<h4 id="ciudad" class="text-capitalize">${data1.name} (${data2[0].translations.spa.common}): ${data1.weather[0].description}</h4>
                <h4 id="temperatura">Temperatura: ${data1.main.temp}°C</h4>
                <h4 id="coordenadas">Coordenadas: ${data1.coord.lat},${data1.coord.lon}</h4>`;
                var icon_url = `http://openweathermap.org/img/w/${data1.weather[0].icon}.png`;
                var html_img = `<img class="img-clima" src="${icon_url}" alt="">`;            
                $('#info-clima').html(html);
                $('#icon-clima').html(html_img);
            });            
        }).fail(function() {
            Swal.fire({
                title: 'Error!',
                text: 'No se encuentra la ciudad buscada!!!',
                icon: 'error',
                confirmButtonText: 'Continuar'
              })
        });

    }
    else{
        Swal.fire({
            title: 'Error!',
            text: 'Debes ingresar el nombre de una ciudad para su búsqueda!!!',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
    }
});

function buscarPais(code) {
    var url = `https://restcountries.com/v3.1/alpha/${code}`;
    $.get(url, function(data) {
        return 'Chile';
    });
}
