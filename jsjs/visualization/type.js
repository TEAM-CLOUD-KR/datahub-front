function line_bar_chart(canvas, label, dataset, type) {
    const data = {
        labels: label,
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
