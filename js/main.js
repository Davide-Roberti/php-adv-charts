

// var data = [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322];
//
// var ctx = $('#grafico-linea');
// var chart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
//         datasets: [{
//             label: 'Vendite',
//             backgroundColor: 'pink',
//             borderColor: 'blue',
//             lineTension: 0.3,
//             data: data
//         }]
//     }
// });

$.ajax({
    url: 'server.php',
    method: 'GET',
    success: function (data) {
        var ctx = $('#grafico-linea');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
                datasets: [{
                    label: 'Vendite',
                    backgroundColor: 'pink',
                    borderColor: 'blue',
                    lineTension: 0.3,
                    data: data
                }]
            }
        });
    },
    error: function () {
        alert('errorissimo')
    }
});


// seconda milestone

$.ajax({
    url: 'server2.php',
    method: 'GET',
    success: function (data) {
        graficoLinea(data);
        graficoTorta(data);

    },
    error: function () {
        alert('errorissimo')
    }
});


function graficoLinea (dataInput) {
    var ctx = $('#secondo-grafico-linea');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
            datasets: [{
                label: 'Vendite',
                backgroundColor: 'pink',
                borderColor: 'blue',
                lineTension: 0.3,
                data: dataInput.fatturato.data
            }]
        }
    });
}

function graficoTorta (dataInput) {

    var nomiVenditori = Object.keys(dataInput.fatturato_by_agent.data);
    var datiVenditori = Object.values(dataInput.fatturato_by_agent.data);

    var ctx = $('#grafico-torta');
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: nomiVenditori,
            datasets: [{
                data: datiVenditori,
                backgroundColor: ['lightblue', 'green', 'pink', 'lightcoral']
            }]
        },
    });
}
