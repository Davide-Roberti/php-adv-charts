<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/style.css">
        <title>adc-charts</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    </head>
    <body>

        <div class="container">
            <canvas id="grafico-linea"></canvas>
        </div>

        <?php include 'database.php'; ?>;

        <script>

            var data = <?php echo json_encode($data); ?>;
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
        </script>

        <!-- <script src="js/main.js" charset="utf-8"></script> -->
    </body>
</html>
