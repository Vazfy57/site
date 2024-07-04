document.addEventListener('alpine:init', () => {
    Alpine.data('alpine', () => ({

        sidebar: false,
        language: '',
        chart_data: [
            {
                x: [200, 210, 220, 300, 205, 255, 265, 275, 230, 240, 250, 260, 270, 280, 215, 225, 235, 245, 290, 285],
                y: [905, 940, 950, 930,  945, 955, 965, 910, 920, 900, 1000, 915, 925, 960, 970, 980, 990, 935, 975, 985],
                mode: 'markers',
                type: 'scatter',
                name: 'Grupo 1',
                marker: {
                    size: 12,
                    color: 'rgba(255, 0, 0, 0.6)',
                },
            },
            {
                x: [660, 680, 640,600, 620, 700,  840, 860, 880, 620, 800, 820, 640, 720, 740, 760, 780, 660, 680, 700],
                y: [300, 320, 390, 380,305, 400, 360, 325, 330, 340, 370, 335, 345, 315, 350,  310, 355, 365, 375, 385],
                mode: 'markers',
                type: 'scatter',
                name: 'Grupo 2',
                marker: {
                    size: 12,
                    color: 'rgba(0, 255, 0, 0.6)',
                },
            },
            {
                x: [840, 860, 820, 810, 840, 860, 880, 820, 900,830, 850, 880, 900, 800, 870, 890, 800, 810, 830, 850],
                y: [1000, 1020, 1100, 1120, 1140, 1160, 1180, 1040, 1060, 1080, 1200, 1010, 1030, 1050, 1070, 1090, 1110, 1130, 1150, 1170],
                mode: 'markers',
                type: 'scatter',
                name: 'Grupo 3',
                marker: {
                    size: 12,
                    color: 'rgba(0, 0, 255, 0.6)',
                },
            }
        ],
        layout: {
            title: 'Clusterização de Clientes',
            xaxis: {
                title: 'Lifetime Value (LTV) em dias',
            },
            yaxis: {
                title: 'Ticket Médio em $',
            },
        },

        init() {
            Plotly.newPlot('chart', this.chart_data, this.layout)
        },

    }))
});
