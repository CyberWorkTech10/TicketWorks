function criarGrafico(tipo, nomeSerie, dadosSerie, categorias) {
    var options = {
        chart: {
            type: tipo
        },
        series: [{
            name: nomeSerie,
            data: dadosSerie
        }],
        xaxis: {
            categories: categorias
        }
    }
    var chart = new ApexCharts(document.querySelector(`#chart`), options);
    chart.render();
}

var tipoGrafico = `line`;
var nomeDaSerie = `vendas`;
var dadosDaSerie = [30, 40, 50, 60, 70, 91, 125, 110, 50];
var categoriasDoEixoX = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999];

criarGrafico(tipoGrafico, nomeDaSerie, dadosDaSerie, categoriasDoEixoX);