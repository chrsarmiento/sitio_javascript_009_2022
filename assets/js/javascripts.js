function Saludar() {
    var date = new Date();
    document.getElementById('saludo').innerHTML = "Hola hoy es " + date;
    var time = setTimeout(function() {Saludar()}, 1000);
}

function Sumar() {
    var valor1 = document.getElementById('num1').value;
    var valor2 = document.getElementById('num2').value;

    try {
        if(valor1 == '' || valor2 == '') throw "Debes ingresar todos los valores solicitados.";

        if(isNaN(valor1) || isNaN(valor2)) throw "Debes ingresar solo valores números para operar.";


        valor1 = Number(valor1);
        valor2 = Number(valor2);
        var resultado = valor1 + valor2;
        document.getElementById('resultado').innerHTML = valor1 + " + " + valor2 + " = " + resultado;
        document.getElementById('error').style.display = 'none';
    } catch (error) {
        document.getElementById('error').innerHTML = error;
    }
}

function Restar() {
    var valor1 = document.getElementById('num1').value;
    var valor2 = document.getElementById('num2').value;

    try {
        if(valor1 == '' || valor2 == '') throw "Debes ingresar todos los valores solicitados.";

        if(isNaN(valor1) || isNaN(valor2)) throw "Debes ingresar solo valores números para operar.";


        valor1 = Number(valor1);
        valor2 = Number(valor2);
        var resultado = valor1 - valor2;
        document.getElementById('resultado').innerHTML = valor1 + " - " + valor2 + " = " + resultado;
        document.getElementById('error').style.display = 'none';
    } catch (error) {
        document.getElementById('error').innerHTML = error;
    }
}

function Multiplicar() {
    var valor1 = document.getElementById('num1').value;
    var valor2 = document.getElementById('num2').value;

    try {
        if(valor1 == '' || valor2 == '') throw "Debes ingresar todos los valores solicitados.";

        if(isNaN(valor1) || isNaN(valor2)) throw "Debes ingresar solo valores números para operar.";


        valor1 = Number(valor1);
        valor2 = Number(valor2);
        var resultado = valor1 * valor2;
        document.getElementById('resultado').innerHTML = valor1 + " * " + valor2 + " = " + resultado;
        document.getElementById('error').style.display = 'none';
    } catch (error) {
        document.getElementById('error').innerHTML = error;
    }
}

function Dividir() {
    var valor1 = document.getElementById('num1').value;
    var valor2 = document.getElementById('num2').value;

    try {
        if(valor1 == '' || valor2 == '') throw "Debes ingresar todos los valores solicitados.";

        if(isNaN(valor1) || isNaN(valor2)) throw "Debes ingresar solo valores números para operar.";

        if(valor2 == '0') throw "Error: división por 0.";

        valor1 = Number(valor1);
        valor2 = Number(valor2);
        var resultado = valor1 / valor2;
        document.getElementById('resultado').innerHTML = valor1 + " / " + valor2 + " = " + resultado;
        document.getElementById('error').style.display = 'none';
    } catch (error) {
        document.getElementById('error').innerHTML = error;
    }
}

function indicadoresEconomicos() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','https://mindicador.cl/api',true);
    xmlhttp.send();
    var intentos = 0;
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            document.getElementById('valorUf').innerHTML = data.uf.nombre + " : " +  new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(data.uf.valor);
            document.getElementById('valorDolar').innerHTML = data.dolar.nombre + " : " +  new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(data.dolar.valor);
            document.getElementById('valorEuro').innerHTML = data.euro.nombre + " : " +  new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(data.euro.valor);
        }
        else{
            intentos++;
            console.log(intentos);
        }
    }
}
