

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
        graficoLinea('#secondo-grafico-linea', data);
        graficoTorta('#grafico-torta', data);

    },
    error: function () {
        alert('errorissimo')
    }
});

//milestone 3

$.ajax({
    url: 'server3.php',
    method: 'GET',
    success: function (data) {
        graficoLinea('#terzo-grafico-linea', data)
        graficoTorta('#secondo-grafico-torta', data)
        var objectEff = data.team_efficiency.data;
        var team = [];
        var efficenza = [];
        for (var key in objectEff) {
            team.push(key);
            efficenza.push(objectEff[key]);
        }
        graficoTeam(team[0], team[1], team[2], efficenza[0], efficenza[1], efficenza[2]);
    },
    error: function () {
        alert('errorissimo')
    }
});

//funzioni

function graficoLinea (selettore, dataInput) {
    var ctx = $(selettore);
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

function graficoTorta (selettore, dataInput) {

    var nomiVenditori = Object.keys(dataInput.fatturato_by_agent.data);
    var datiVenditori = Object.values(dataInput.fatturato_by_agent.data);
    // console.log(nomiVenditori);
    // console.log(datiVenditori);

    var ctx = $(selettore);
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



function graficoTeam (label1, label2, label3, efficenza1, efficenza2, efficenza3) {
    var ctx = $('#grafico-multilinea');
    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
            datasets:
            [
                {
                label: label1,
                borderColor: 'pink',
                data: efficenza1,
                },
                {
                label: label2,
                borderColor: 'blue',
                data: efficenza2,
                },
                {
                label: label3,
                borderColor: 'green',
                data: efficenza3,
                }
            ]
        }
    });
}
