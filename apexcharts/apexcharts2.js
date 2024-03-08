function criarGrafico(tipo, categorias) {
    var options = {
        chart: {
            type: tipo
        },
        series: [44, 55, 13, 33],
            chartoptions: {
                labels: [`apple`, `mango`, `orange`, `watermelon`]
            }
        ,
        xaxis: {
            categories: categorias
        }
    }
    var chart = new ApexCharts(document.querySelector(`#chart`), options);
    chart.render();
}

var tipoGrafico = `pie`;
var nomeDaSerie = `vendas`;

criarGrafico(tipoGrafico, nomeDaSerie);