document.addEventListener('alpine:init', () => {
    Alpine.data('alpine', () => ({

        sidebar: false,
        contact_modal: false,
        message_modal: false,
        contact: {},
        language: '',
        selected_intelligence: '',
        navbar: {
            portuguese: [
                {
                    title: 'Soluções',
                    href: '#solutions',
                },
                {
                    title: 'Desenvolvimento',
                    href: '#development',
                },
                {
                    title: 'Blog',
                    href: '#blog',
                },
                {
                    title: 'Dúvidas',
                    href: '#faq',
                },
            ],
            english: [
                {
                    title: 'Solutions',
                    href: '#solutions',
                },
                {
                    title: 'Development',
                    href: '#development',
                },
                {
                    title: 'Blog',
                    href: '#blog',
                },
                {
                    title: 'Faq',
                    href: '#faq',
                },
            ],
        },
        intelligences: {
            portuguese: [
                {
                    title: 'MediaMax',
                    description: 'Quantifica o efeito do investimento no retorno em diferentes mídias para distribuir os investimentos de forma ótima, maximizando o retorno sobre investimento',
                    advantages: [
                        {
                            title: 'Qual o problema que essa solução resolve?',
                            description: 'MediaMax resolve o desafio de otimizar os investimentos em publicidade ao determinar a alocação mais eficaz de recursos entre diferentes canais de mídia, maximizando assim o retorno sobre o investimento (ROI)',
                        },
                        {
                            title: 'Como a solução resolve esse problema?',
                            description: 'Utiliza modelos de regressão linear para analisar históricos de dados de campanhas, identificando quais investimentos em mídia geram os maiores retornos. Com essas informações, a solução recomenda a melhor distribuição de orçamento para alcançar metas específicas de lucro e engajamento',
                        },
                        {
                            title: 'Porque solucionar esse problema agora?',
                            description: 'Com o crescente custo das campanhas de mídia e a diversificação de canais de marketing, nunca foi tão importante garantir que cada real investido seja utilizado da maneira mais eficiente. Solucionar esse problema agora permite às empresas otimizar seus orçamentos e melhorar a eficácia geral de suas estratégias de marketing em um ambiente competitivo',
                        },
                    ],
                },
                {
                    title: 'LeadPredictor',
                    description: 'Estima as chances de conversão e o valor retorno esperado de cada lead para priorizar o atendimento, otimizando os esforços do time de vendas',
                    advantages: [
                        {
                            title: 'Qual o problema que essa solução resolve?',
                            description: 'LeadPredictor aborda o problema de identificar quais leads têm maior probabilidade de conversão, permitindo que as empresas foquem seus esforços e recursos nos contatos mais promissores',
                        },
                        {
                            title: 'Como a solução resolve esse problema?',
                            description: 'Aplica técnicas avançadas de machine learning para analisar padrões e características de leads que converteram no passado, utilizando esses insights para prever o comportamento de novos leads e sua probabilidade de conversão',
                        },
                        {
                            title: 'Porque solucionar esse problema agora?',
                            description: 'A eficiência em vendas é crucial em mercados altamente competitivos. Agilizar o processo de conversão de leads não apenas melhora a lucratividade, mas também otimiza recursos internos e aumenta a satisfação do cliente ao reduzir esforços desnecessários',
                        },
                    ],
                },
                {
                    title: 'BasketBoost',
                    description: 'Recomenda produtos que complementam a cesta de compras do cliente para oferecer itens relevantes, conquistando o cliente e aumentando o valor do ticket médio',
                    advantages: [
                        {
                            title: 'Qual o problema que essa solução resolve?',
                            description: 'BasketBoost facilita o aumento do valor médio das compras ao sugerir produtos adicionais que são relevantes e atraentes para os clientes durante o processo de checkout',
                        },
                        {
                            title: 'Como a solução resolve esse problema?',
                            description: 'Analisando históricos de compras e padrões de comportamento dos clientes, BasketBoost utiliza algoritmos de recomendação para identificar e sugerir produtos que complementam itens já selecionados no carrinho de compras',
                        },
                        {
                            title: 'Porque solucionar esse problema agora?',
                            description: 'Com o aumento da concorrência no comércio eletrônico, maximizar o valor de cada transação é crucial. Proporcionar sugestões personalizadas e oportunas pode melhorar significativamente a experiência de compra do cliente, aumentando a receita e a fidelidade do cliente simultaneamente',
                        },
                    ],
                },
                {
                    title: 'ChurnPredict',
                    description: 'Identifica sinais de desengajamento de usuários para estimar as chances de cancelamento, permitindo intervenções preventivas para retenção de clientes',
                    advantages: [
                        {
                            title: 'Qual o problema que essa solução resolve?',
                            description: 'ChurnPredict visa prever e mitigar o cancelamento de assinaturas, um desafio significativo para empresas com modelos de negócio baseados em receita recorrente',
                        },
                        {
                            title: 'Como a solução resolve esse problema?',
                            description: 'Utiliza modelos preditivos para identificar sinais e padrões comportamentais que antecedem o cancelamento de assinaturas. Ao reconhecer esses indicadores precocemente, a solução possibilita intervenções proativas para reter clientes',
                        },
                        {
                            title: 'Porque solucionar esse problema agora?',
                            description: 'Manter clientes é frequentemente mais econômico do que adquirir novos. No contexto de aumento de competição e elevadas expectativas de serviço, prevenir o churn é essencial para sustentar o crescimento e a estabilidade financeira a longo prazo',
                        },
                    ],
                },
            ],
            english: [
                {
                    title: 'MediaMax',
                    description: 'Quantifies the effect of investment on returns in different media to distribute investments optimally, maximizing return on investment',
                    advantages: [
                        {
                            title: 'What problem does this solution solve?',
                            description: 'MediaMax addresses the challenge of optimizing advertising investments by determining the most effective allocation of resources among different media channels, thus maximizing return on investment (ROI)',
                        },
                        {
                            title: 'How does the solution solve this problem?',
                            description: 'Uses linear regression models to analyze historical campaign data, identifying which media investments generate the highest returns. With this information, the solution recommends the best budget distribution to achieve specific profit and engagement goals',
                        },
                        {
                            title: 'Why solve this problem now?',
                            description: 'With the rising cost of media campaigns and the diversification of marketing channels, it has never been more important to ensure that every dollar invested is used as efficiently as possible. Solving this problem now allows companies to optimize their budgets and improve the overall effectiveness of their marketing strategies in a competitive environment',
                        },
                    ],
                },
                {
                    title: 'LeadPredictor',
                    description: 'Estimates the chances of conversion and the expected return value of each lead to prioritize follow-ups, optimizing the sales team’s efforts',
                    advantages: [
                        {
                            title: 'What problem does this solution solve?',
                            description: 'LeadPredictor addresses the problem of identifying which leads have the highest probability of conversion, allowing companies to focus their efforts and resources on the most promising contacts',
                        },
                        {
                            title: 'How does the solution solve this problem?',
                            description: 'Applies advanced machine learning techniques to analyze patterns and characteristics of leads that converted in the past, using these insights to predict the behavior of new leads and their probability of conversion',
                        },
                        {
                            title: 'Why solve this problem now?',
                            description: 'Efficiency in sales is crucial in highly competitive markets. Speeding up the lead conversion process not only improves profitability but also optimizes internal resources and increases customer satisfaction by reducing unnecessary efforts',
                        },
                    ],
                },
                {
                    title: 'BasketBoost',
                    description: 'Recommends products that complement the customer’s shopping cart to offer relevant items, engaging the customer and increasing the average ticket value',
                    advantages: [
                        {
                            title: 'What problem does this solution solve?',
                            description: 'BasketBoost facilitates the increase of average purchase value by suggesting additional products that are relevant and attractive to customers during the checkout process',
                        },
                        {
                            title: 'How does the solution solve this problem?',
                            description: 'By analyzing purchase histories and customer behavior patterns, BasketBoost uses recommendation algorithms to identify and suggest products that complement items already selected in the shopping cart',
                        },
                        {
                            title: 'Why solve this problem now?',
                            description: 'With increasing competition in e-commerce, maximizing the value of each transaction is crucial. Providing personalized and timely suggestions can significantly improve the customer’s shopping experience, boosting revenue and customer loyalty simultaneously',
                        },
                    ],
                },
                {
                    title: 'ChurnPredict',
                    description: 'Identifies signs of user disengagement to estimate cancellation chances, enabling preventive interventions for customer retention',
                    advantages: [
                        {
                            title: 'What problem does this solution solve?',
                            description: 'ChurnPredict aims to predict and mitigate subscription cancellations, a significant challenge for companies with recurring revenue business models',
                        },
                        {
                            title: 'How does the solution solve this problem?',
                            description: 'Uses predictive models to identify signs and behavioral patterns that precede subscription cancellations. By recognizing these indicators early, the solution enables proactive interventions to retain customers',
                        },
                        {
                            title: 'Why solve this problem now?',
                            description: 'Retaining customers is often more economical than acquiring new ones. In the context of increasing competition and high service expectations, preventing churn is essential to sustaining long-term growth and financial stability',
                        },
                    ],
                },                
            ],
        },
        developments: {
            portuguese: [
                {
                    title: 'Negócio',
                    description: 'Envolve a identificação de problemas e oportunidades, o estabelecimento de indicadores claros e a definição de critérios',
                    svg: '<svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>',
                },
                {
                    title: 'Dados',
                    description: 'Preparação dos dados para a modelagem, envolvendo limpeza, transformação, seleção e integração',
                    svg: '<svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>',
                },
                {
                    title: 'Aprendizado',
                    description: 'Treinamento e a validação dos modelos de machine learning são aplicados para obter o melhor desempenho possível',
                    svg: '<svg class="size-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"></circle><path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path></svg>',
                },
                {
                    title: 'Deploy',
                    description: 'Pode-se envolver a implementação direto em um sistema, endpoints ou outras formas de utilizar os resultados',
                    svg: '<svg class="size-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>',
                },
            ],
            english: [
                {
                    title: 'Business',
                    description: 'Involves identifying problems and opportunities, establishing clear indicators, and defining criteria',
                    svg: '<svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>',
                },
                {
                    title: 'Data',
                    description: 'Data preparation for modeling, involving cleaning, transformation, selection, and integration',
                    svg: '<svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>',
                },
                {
                    title: 'Learning',
                    description: 'Training and validating machine learning models to achieve the best possible performance',
                    svg: '<svg class="size-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"></circle><path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path></svg>',
                },
                {
                    title: 'Deploy',
                    description: 'May involve direct implementation in a system, endpoints, or other ways to utilize the results',
                    svg: '<svg class="size-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>',
                },
            ],
        },
        posts: {
            portuguese: [
                {
                    title: 'O que é ciência de dados?',
                    description: 'Ciência de dados é o estudo das relações entre uma variável aleatória de interesse e variáveis aleatórias explicativas, a fim de diminuir a incerteza sobre a variável de interesse',
                    date: 'Março 18, 2023',
                    url: 'https://blog.vazfy.com/2023/03/o-que-e-ciencia-de-dados.html',
                },
                {
                    title: 'Porque coletar dados faz empresas crescerem mais rápido?',
                    description: 'Dados não são só a informação, é o mapa para você encontrar o caminho da lucratividade',
                    date: 'Março 29, 2023',
                    url: 'https://blog.vazfy.com/2023/03/porque-coletar-dados-faz-sua-empresa.html',
                },
                {
                    title: 'Como ciência de dados está revolucionando o mercado?',
                    description: 'Com Data Science as empresas tomam decisões baseadas em dados que levam a maior eficiência, economia de custos e crescimento de receita',
                    date: 'Abril 13, 2023',
                    url: 'https://blog.vazfy.com/2023/04/como-ciencia-de-dados-esta.html',
                },
            ],
            english: [
                {
                    title: 'What is Data Science?',
                    description: 'Data Science is the study of the relationships between a random variable of interest and explanatory random variables, in order to reduce uncertainty about the variable of interest',
                    date: 'March 18, 2023',
                    url: 'https://blog.vazfy.com/2023/03/o-que-e-ciencia-de-dados.html',
                },
                {
                    title: 'Why does data collection make companies grow faster?',
                    description: 'Data is not just information, it is the map to find the path to profitability',
                    date: 'March 29, 2023',
                    url: 'https://blog.vazfy.com/2023/03/porque-coletar-dados-faz-sua-empresa.html',
                },
                {
                    title: 'How is Data Science revolutionizing the market?',
                    description: 'With Data Science, companies make data-driven decisions that lead to greater efficiency, cost savings, and revenue growth',
                    date: 'April 13, 2023',
                    url: 'https://blog.vazfy.com/2023/04/como-ciencia-de-dados-esta.html',
                },                
            ],
        },
        questions: {
            portuguese: [
                {
                    title: 'Quais são os benefícios esperados de implementar machine learning em meu negócio?',
                    description: 'Implementar machine learning no seu negócio pode aumentar a eficiência operativa, melhorar a tomada de decisões através de insights mais precisos e personalizados, e proporcionar uma vantagem competitiva ao automatizar tarefas complexas e identificar oportunidades de mercado',
                },
                {
                    title: 'Quais dados são necessários para desenvolver uma solução de machine learning eficaz?',
                    description: 'Para desenvolver uma solução de machine learning eficaz, são necessários dados relevantes e de alta qualidade, incluindo dados históricos sobre operações, transações e comportamento dos clientes, além de informações adicionais específicas do setor para enriquecer o modelo',
                },
                {
                    title: 'Quanto tempo leva para desenvolver e implementar uma solução de machine learning?',
                    description: 'O desenvolvimento e implementação de uma solução de machine learning geralmente levam de alguns meses a um ano, dependendo da complexidade do projeto, da quantidade de dados necessários e da integração com os sistemas existentes',
                },
                {
                    title: 'Como a solução de machine learning será integrada aos sistemas existentes?',
                    description: 'A solução de machine learning será integrada aos sistemas existentes através de APIs, serviços web ou módulos personalizados, garantindo compatibilidade e facilitando a comunicação entre o novo modelo e os sistemas atuais, sem interromper suas operações',
                },
                {
                    title: 'Como garantir a privacidade e a segurança dos dados ao usar machine learning',
                    description: 'Para garantir a privacidade e a segurança dos dados ao usar machine learning, são implementadas práticas rigorosas de criptografia, controle de acesso, anonimização de dados sensíveis e conformidade com regulamentos de proteção de dados, além de monitoramento contínuo para detectar e responder a possíveis ameaças',
                },
                {
                    title: 'Como medir o sucesso de uma solução de machine learning?',
                    description: 'A qualidade do algoritimo de machine learning é medida por métricas específicas, como precisão, F1-score ou EQM. Medimos também o sucesso da solução através de indicadores financeiros e/ou de performance usados no seu negócio',
                },
            ],
            english: [
                {
                    title: 'What are the expected benefits of implementing machine learning in my business?',
                    description: 'Implementing machine learning in your business can increase operational efficiency, improve decision-making through more accurate and personalized insights, and provide a competitive advantage by automating complex tasks and identifying market opportunities',
                },
                {
                    title: 'What data is needed to develop an effective machine learning solution?',
                    description: 'To develop an effective machine learning solution, relevant and high-quality data is required, including historical data on operations, transactions, and customer behavior, as well as additional industry-specific information to enrich the model',
                },
                {
                    title: 'How long does it take to develop and implement a machine learning solution?',
                    description: 'The development and implementation of a machine learning solution typically take from a few months to a year, depending on the complexity of the project, the amount of data required, and the integration with existing systems',
                },
                {
                    title: 'How will the machine learning solution be integrated with existing systems?',
                    description: 'The machine learning solution will be integrated with existing systems through APIs, web services, or custom modules, ensuring compatibility and facilitating communication between the new model and current systems without disrupting operations',
                },
                {
                    title: 'How to ensure data privacy and security when using machine learning?',
                    description: 'To ensure data privacy and security when using machine learning, rigorous practices such as encryption, access control, anonymization of sensitive data, and compliance with data protection regulations are implemented, along with continuous monitoring to detect and respond to potential threats',
                },
                {
                    title: 'How to measure the success of a machine learning solution?',
                    description: 'The quality of the machine learning algorithm is measured by specific metrics such as accuracy, F1-score, or RMSE. We also measure the success of the solution through financial and/or performance indicators used in your business',
                },
            ],
        },

        init() {
            this.language = new URLSearchParams(window.location.search).get('lang')
            if (this.language == 'en') {
                this.selected_intelligence = this.intelligences.english[0]
            } else {
                this.selected_intelligence = this.intelligences.portuguese[0]
            }
        },

        send_contact() {
            this.contact.user_id = document.cookie.split('; ').find(cookie => cookie.startsWith('_ga=')) ? document.cookie.split('; ').find(cookie => cookie.startsWith('_ga=')).split('=')[1] : undefined
            this.contact.device = window.innerWidth <= 640 ? 'Mobile' : window.innerWidth <= 1024 ? 'Tablet' : 'Desktop'
            this.contact.date = new Date().toISOString().split('T')[0]

            fetch('https://script.google.com/macros/s/AKfycbwLQzuy219r1hphKSBmX8Db-05RHv4ymdjgBDExYea5HwE6UqXiNmhHw99l1Jk55JDdUg/exec', {
                method: 'POST',
                body: JSON.stringify(this.contact),
            })
            this.contact_modal = false
            this.contact = {}
            this.message_modal = true
            setTimeout(() => {
                this.message_modal = false
            }, 5000)
        },

    }))
})
