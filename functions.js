var fecha = [];
var total = [];


let url = 'https://www.datos.gov.co/resource/4wtf-sdh2.json';
fetch(url)

.then(respuesta=>respuesta.json())

.then(function transformar (respuesta)
{
    respuesta.forEach(function agregar(respuesta)
    {
        if (respuesta.a_o != undefined && respuesta.total != undefined) {
            total.push(respuesta.total);
            fecha.push(respuesta.a_o);
        }
    });

    var graf1=
    {
        y: total,
        x: fecha,
        type: 'bar',
        marker: {
        color: 'rgb(123,456,789)',
            line: {
            color: 'rgb(255,0,0)',
            width: 0.1
            }
        }
    };
    var datosGraficas = [graf1];

    var layout =
    {
        title: 'Inventa',
        xaxis:
        {
            title: 'Año'
        },
        yaxis:
        {
            title: 'Cabezas de ganado'
        },
        font: {
    family: 'Courier New, monospace',
    size: 18,
    color: '#7f7f7f'
  }
    };
    Plotly.newPlot('grafico', datosGraficas, layout);
    var graf2=
    {
        y: total,
        x: fecha,
        type: 'scatter',
        marker: {
        color: 'rgb(123,456,789)',
            line: {
            color: 'rgb(255,0,0)',
            width: 0.1
            }
        }

    };
    var datosGrafica2 = [graf2];
    Plotly.newPlot('graafico', datosGrafica2, layout);
});

