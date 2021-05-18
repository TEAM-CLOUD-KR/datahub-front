function line_bar_chart(canvas, labels, dataset, type) {
    const data = {
        labels: labels,
        datasets: dataset
    };
    const config = {
        type: type,
        data: data,
        options: {}
    };
    const myChart = new Chart(
        canvas,
        config
    );
}


function circle_chart(canvas, labels, dataset, type) {
    const data = {
        labels: labels,
        datasets: dataset
    };
    const config = {
        type: type,
        data: data,
    };

    const myChart = new Chart(
        canvas,
        config
    );
}

function mixed_chart(canvas, labels, dataset ){
    const data = {
        labels: labels,
        datasets: dataset,
    };

    const config = {
        type: 'scatter',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const myChart = new Chart(
        canvas,
        config
    );
}
