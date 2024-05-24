document.addEventListener('alpine:init', () => {
    Alpine.data('alpine', () => ({

        sidebar: false,
        contact_modal: false,
        message_modal: false,
        contact: {},
        selected_intelligence: '',
        message: '',
        message_status: '',
        intelligences: [
            {
                'title': 'MarkFy',
                'description': 'A ferramenta definitiva para entender o impacto de suas estratégias de marketing. Identifique as mídias mais eficazes, otimize seus investimentos e maximize o retorno sobre seus esforços',
                'advantages': [
                    {
                        'title': 'Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                    {
                        'title': 'Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                    {
                        'title': 'Quais problemas de negócio a solução resolve?',
                        'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit consectetur vero velit praesentium numquam non. Nisi saepe consequuntur delectus molestias quaerat assumenda fuga fugiat? Tenetur voluptatibus sunt voluptatem amet.',
                    },
                    {
                        'title': 'Quais problemas de negócio a solução resolve?',
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
                'svg': '<svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>',
            },
            {
                'title': 'Dados',
                'description': 'Preparação dos dados para a modelagem, envolvendo limpeza, transformação, seleção e integração',
                'svg': '<svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>'
            },
            {
                'title': 'Aprendizado',
                'description': 'Treinamento e a validação dos modelos de machine learning são aplicados para obter o melhor desempenho possível',
                'svg': '<svg class="size-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"></circle><path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path></svg>'
            },
            {
                'title': 'Deploy',
                'description': 'Pode-se envolver a implementação direto em um sistema, endpoints ou outras formas de utilizar os resultados',
                'svg': '<svg class="size-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>'
            },
        ],

        init() {
            this.selected_intelligence = this.intelligences[0]
        },

        send_contact() {
            fetch('', {
                method: 'GET',
            })
            this.contact_modal = false
            this.contact = {}
            this.message = 'Formulario enviado com sucesso!'
            this.message_status = 'success'
            this.message_modal = true
            setTimeout(() => {
                this.message_modal = false
            }, 5000)
        },

    }))
})
