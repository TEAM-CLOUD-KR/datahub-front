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

function stepped_line(canvas,labels,datasets){
    const data = {
        labels: labels,
        datasets: datasets
    };
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            interaction: {
                intersect: false,
                axis: 'x'
            },
            plugins: {
                title: {
                    display: true,
                    text: (ctx) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
                }
            }
        }
    };
    const actions = [
        {
            name: 'Step: false (default)',
            handler: (chart) => {
                chart.data.datasets.forEach(dataset => {
                    dataset.stepped = false;
                });
                chart.update();
            }
        },
        {
            name: 'Step: true',
            handler: (chart) => {
                chart.data.datasets.forEach(dataset => {
                    dataset.stepped = true;
                });
                chart.update();
            }
        },
        {
            name: 'Step: before',
            handler: (chart) => {
                chart.data.datasets.forEach(dataset => {
                    dataset.stepped = 'before';
                });
                chart.update();
            }
        },
        {
            name: 'Step: after',
            handler: (chart) => {
                chart.data.datasets.forEach(dataset => {
                    dataset.stepped = 'after';
                });
                chart.update();
            }
        },
        {
            name: 'Step: middle',
            handler: (chart) => {
                chart.data.datasets.forEach(dataset => {
                    dataset.stepped = 'middle';
                });
                chart.update();
            }
        }
    ];
    const myChart = new Chart(
        canvas,
        config
    );
}

function combo_chart(){
    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

    const labels = [];

    for (let i = 0; i < DATA_COUNT; ++i) {
        labels.push(Utils.newDate(i));
    }

    const data = {
        labels: labels,
        datasets: [{
            type: 'bar',
            label: 'Dataset 1',
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
            borderColor: Utils.CHART_COLORS.red,
            data: Utils.numbers(NUMBER_CFG),
        }, {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
            borderColor: Utils.CHART_COLORS.blue,
            data: Utils.numbers(NUMBER_CFG),
        }, {
            type: 'line',
            label: 'Dataset 3',
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
            borderColor: Utils.CHART_COLORS.green,
            fill: false,
            data: Utils.numbers(NUMBER_CFG),
        }]
    };
    const config = {
        type: 'line',
        data: data,
        options: {
            plugins: {
                title: {
                    text: 'Chart.js Combo Time Scale',
                    display: true
                }
            },
            scales: {
                x: {
                    type: 'time',
                    display: true,
                    offset: true,
                    time: {
                        unit: 'day'
                    }
                },
            },
        },
    };
    const actions = [
        {
            name: 'Randomize',
            handler(chart) {
                chart.data.datasets.forEach(dataset => {
                    dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});
                });
                chart.update();
            }
        },
    ];

}
