document.addEventListener('alpine:init', () => {
    Alpine.data('alpine', () => ({

        sidebar: false,
        contact_modal: false,
        selected_intelligence: '',
        intelligences: [
            {
                'title': 'MarkFy',
                'description': 'A ferramenta definitiva para entender o impacto de suas estratégias de marketing. Identifique as mídias mais eficazes, otimize seus investimentos e maximize o retorno sobre seus esforços',
                'advantages': [
                    {
                        'title': '1 - Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                    {
                        'title': '1 - Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                    {
                        'title': '1 - Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                ],
            },
            {
                'title': 'LeadFy',
                'description': 'Nossa solução de pontuação para leads avalia e classifica com base em seu potencial de conversão. Identifique os leads mais promissores, personalize suas estratégia e aumente suas taxas de conversão',
                'advantages': [
                    {
                        'title': '2 - Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                    {
                        'title': '2 - Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                    {
                        'title': '2 - Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                ],
            },
            {
                'title': 'PriceFy',
                'description': 'Através de técnicas de aprendizado de máquina avançadas, nossa solução oferece estimativas precisas, levando em consideração fatores como demanda, custos e preferências do cliente',
                'advantages': [
                    {
                        'title': '3 - Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                    {
                        'title': '3 - Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                    {
                        'title': '3 - Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                ],
            },
            {
                'title': 'ChurnFy',
                'description': 'Com base em variáveis como histórico de compras, interações e dados demográficos, oferecemos insights precisos para a gestão de churn e tomada de decisões estratégicas',
                'advantages': [
                    {
                        'title': '4 - Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                    {
                        'title': '4 - Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                    {
                        'title': '4 - Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                ],
            },
        ],
        developments: [
            {
                'title': 'Negócio',
                'description': 'Envolve a identificação de problemas e oportunidades, o estabelecimento de indicadores claros e a definição de critérios',
            },
            {
                'title': 'Dados',
                'description': 'Preparação dos dados para a modelagem, envolvendo limpeza, transformação, seleção e integração',
            },
            {
                'title': 'Aprendizado',
                'description': 'Treinamento e a validação dos modelos de machine learning são aplicados para obter o melhor desempenho possível',
            },
            {
                'title': 'Deploy',
                'description': 'Pode-se envolver a implementação direto em um sistema, endpoints ou outras formas de utilizar os resultados',
            },
        ],

        init() {
            this.selected_intelligence = this.intelligences[0]
        }

    }))
})
