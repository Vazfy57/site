document.addEventListener('alpine:init', () => {
    Alpine.data('alpine', () => ({

        sidebar: false,
        language: '',
        big_numbers: [
            {
                'title': 'Total de Investimento',
                'value': 'R$ 1835',
            },
            {
                'title': 'Total de Receita',
                'value': 'R$ 2471',
            },
            {
                'title': 'Total de Cliques',
                'value': '5032',
            },
            {
                'title': 'Total de Visitas',
                'value': '3984',
            },
        ],
        charts_data: [
            {
                'title': 'Divisão do Share',
                'subtitle': 'Mostra o share de investimento para o próximo mês',
                'type': 'bar',
                'data': {
                    'labels': ['Facebook', 'Instagram', 'Google', 'Tiktok', 'Bing'],
                    'datasets': [{
                        'talabel': 'Share',
                        'data': [15, 28, 42, 5, 10],
                        'backgroundColor': 'rgb(99, 102, 241, 0.8)',
                    }],
                },
            },
            {
                'title': 'CPA por Mídia',
                'subtitle': 'Mostra o CPA de cada mídia',
                'type': 'bar',
                'data': {
                    'labels': ['Facebook', 'Instagram', 'Google', 'Tiktok', 'Bing'],
                    'datasets': [{
                        'label': 'CPA',
                        'data': [65, 59, 80, 81, 56],
                        'backgroundColor': 'rgb(99, 102, 241, 0.8)',
                    }],
                },
            },
            {
                'title': 'Retorno sobre Investimento',
                'subtitle': 'Mostra o retorno diário de cada investimento',
                'type': 'scatter',
                'data': {
                    'datasets': [{
                        'label': 'Investimento / Retorno',
                        'data': [
                            {
                                'x': 33.38229,
                                'y': 495.38995,
                            },
                            {
                                'x': 25.11254,
                                'y': 424.00574,
                            },
                            {
                                'x': 7.19762,
                                'y': 130.83500,
                            },
                            {
                                'x': 7.43046,
                                'y': 309.18403,
                            },
                            {
                                'x': 29.26572,
                                'y': 864.86470,
                            },
                        ],
                        'backgroundColor': 'rgb(99, 102, 241, 0.8)',
                    }],
                },
            },
            {
                'title': 'Previsão de Receita (milhões)',
                'subtitle': 'Mostra a previsão de receita para o próximo mês',
                'type': 'line',
                'data': {
                    'labels': ['01/2024', '02/2024', '03/2024', '04/2024', '05/2024', '06/2024', '07/2024'],
                    'datasets': [{
                        'label': 'Receita',
                        'data': [50, 37, 92, 138, 250, 312, 374],
                        'backgroundColor': [
                            'rgb(99, 102, 241, 0.8)',
                            'rgb(99, 102, 241, 0.8)',
                            'rgb(99, 102, 241, 0.8)',
                            'rgb(99, 102, 241, 0.8)',
                            'rgb(225, 29, 72, 0.8)',
                            'rgb(225, 29, 72, 0.8)',
                            'rgb(225, 29, 72, 0.8)',
                        ],
                    }],
                },
            },
        ],

        init() {
            setTimeout(() => {
                this.gerar_graficos()
            }, 0)
        },

        gerar_graficos() {
            charts = document.getElementsByTagName('canvas')
            for (i = 0; i < charts.length; i++) {
                new Chart(charts[i], {
                    type: this.charts_data[i].type,
                    data: this.charts_data[i].data,
                    options: {
                        pointRadius: 7,
                        pointHoverRadius: 7,
                        plugins: {
                            legend: {
                                display: false,
                            },
                            datalabels: {
                                anchor: 'end',
                                align: 'top',
                                formatter: Math.round,
                                font: {
                                  weight: 'bold'
                                }
                              }
                        },
                        scales: {
                            x: {
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    font: {
                                        size: 14,
                                    },
                                },
                            },
                            y: {
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    font: {
                                        size: 14,
                                    },
                                },
                                beginAtZero: true,
                            },
                        },
                    },
                })
            }
        },

    }))
})
