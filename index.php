<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>adc-charts</title>
        <link rel="stylesheet" href="css/stile.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    </head>
    <body>


        <div class="container">
            <div class="milestone-1">
                <h2>Milestone 1</h2>
                <canvas id="grafico-linea"></canvas>
            </div>
        </div>
        <div class="milestone-2">
            <h2>Milestone 2</h2>
            <div class="container">
                <canvas id="secondo-grafico-linea"></canvas>
            </div>

            <div class="container">
                <canvas id="grafico-torta"></canvas>
            </div>
        </div>
        <div class="milestone-3">
            <h2>Milestone 3</h2>
            <?php $level = $_GET['level']; ?>

            <?php if ($level == 'guest' || $level == 'employee' || $level == 'clevel') { ?>
                <div class="container">
                    <canvas id="terzo-grafico-linea"></canvas>
                </div>
            <?php } ?>
            <?php if ($level == 'employee' || $level == 'clevel') { ?>
                <div class="container">
                    <canvas id="secondo-grafico-torta"></canvas>
                </div>
            <?php } ?>
            <?php if ($level == 'clevel') { ?>
                <div class="container">
                    <canvas id="grafico-multilinea"></canvas>
                </div>
            <?php } ?>
        </div>


        <?php include 'database.php'; ?>;

        <!-- <script>

            var data = <?php /* echo json_encode($data); */ ?>;
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
        </script> -->

        <script src="js/main.js" charset="utf-8"></script>
    </body>
</html>
