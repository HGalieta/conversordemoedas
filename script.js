function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var moedaEntrada = document.getElementsByName("entrada");
  var moedaSaida = document.getElementsByName("saida");
  var resultado = document.getElementById("valorConvertido");

  for (var i = 0; i < moedaEntrada.length; i++) {
    if (moedaEntrada[i].checked == true) {
      var entradaEscolhida = moedaEntrada[i].value;
    }
  }

  for (var i = 0; i < moedaSaida.length; i++) {
    if (moedaSaida[i].checked == true) {
      var saidaEscolhida = moedaSaida[i].value;
    }
  }

  if (entradaEscolhida == saidaEscolhida) {
    resultado.innerHTML =
      "Você deve selecionar moedas diferentes para realizar uma conversão.";
  } else if (entradaEscolhida == "brl" && saidaEscolhida == "usd") {
    var realDolar = valorNumerico / 5.09;
    resultado.innerHTML =
      "R$ " + valorNumerico + " equivale a US$ " + realDolar.toFixed(2);
  } else if (entradaEscolhida == "brl" && saidaEscolhida == "eur") {
    var realEuro = valorNumerico / 5.61;
    resultado.innerHTML =
      "R$ " + valorNumerico + " equivale a &#8364; " + realEuro.toFixed(2);
  } else if (entradaEscolhida == "brl" && saidaEscolhida == "btc") {
    var realBit = valorNumerico * 0.0000048;
    resultado.innerHTML =
      "R$ " + valorNumerico + " equivale a &#8383; " + realBit;
  } else if (entradaEscolhida == "usd" && saidaEscolhida == "eur") {
    var dolarEuro = valorNumerico / 1.1;
    resultado.innerHTML =
      "US$ " + valorNumerico + " equivale a &#8364; " + dolarEuro.toFixed(2);
  } else if (entradaEscolhida == "usd" && saidaEscolhida == "brl") {
    var dolarReal = valorNumerico * 5.09;
    resultado.innerHTML =
      "US$ " + valorNumerico + " equivale a R$ " + dolarReal.toFixed(2);
  } else if (entradaEscolhida == "usd" && saidaEscolhida == "btc") {
    var dolarBit = valorNumerico * 0.000024;
    resultado.innerHTML = "US$ " + valorNumerico + " equivale a R$ " + dolarBit;
  } else if (entradaEscolhida == "eur" && saidaEscolhida == "brl") {
    var euroReal = valorNumerico * 5.61;
    resultado.innerHTML =
      "&#8364; " + valorNumerico + " equivale a R$ " + euroReal.toFixed(2);
  } else if (entradaEscolhida == "eur" && saidaEscolhida == "usd") {
    var euroDolar = valorNumerico * 1.1;
    resultado.innerHTML =
      "&#8364; " + valorNumerico + " equivale a US$ " + euroDolar.toFixed(2);
  } else if (entradaEscolhida == "eur" && saidaEscolhida == "btc") {
    var euroBit = valorNumerico * 0.000027;
    resultado.innerHTML =
      "&#8364; " + valorNumerico + " equivale a &#8383; " + euroBit;
  } else if (entradaEscolhida == "btc" && saidaEscolhida == "brl") {
    var bitReal = valorNumerico / 0.0000048;
    resultado.innerHTML =
      "&#8383; " + valorNumerico + " equivale a R$ " + bitReal.toFixed(2);
  } else if (entradaEscolhida == "btc" && saidaEscolhida == "usd") {
    var bitDolar = valorNumerico / 0.000024;
    resultado.innerHTML =
      "&#8383; " + valorNumerico + " equivale a US$ " + bitDolar.toFixed(2);
  } else if (entradaEscolhida == "btc" && saidaEscolhida == "eur") {
    var bitEuro = valorNumerico / 0.000027;
    resultado.innerHTML =
      "&#8383; " + valorNumerico + " equivale a &#8364; " + bitEuro.toFixed(2);
  }
}