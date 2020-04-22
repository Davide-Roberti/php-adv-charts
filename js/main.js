

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
