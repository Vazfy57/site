document.addEventListener('alpine:init', () => {
    Alpine.data('alpine', () => ({

        sidebar: false,
        contact_modal: false,
        message_modal: false,
        contact: {},
        selected_intelligence: '',
        intelligences: [
            {
                title: 'MediaMax',
                description: 'Quantifica o efeito do investimento no retorno em diferentes mídias para distribuir os investimentos de forma ótima, maximizando o retorno sobre investimento.',
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
                description: 'Estima as chances de conversão e o valor retorno esperado de cada lead para priorizar o atendimento, otimizando os esforços do time de vendas.',
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
        developments: [
            {
                title: 'Negócio',
                description: 'Envolve a identificação de problemas e oportunidades, o estabelecimento de indicadores claros e a definição de critérios',
                svg: '<svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>',
            },
            {
                title: 'Dados',
                description: 'Preparação dos dados para a modelagem, envolvendo limpeza, transformação, seleção e integração',
                svg: '<svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>'
            },
            {
                title: 'Aprendizado',
                description: 'Treinamento e a validação dos modelos de machine learning são aplicados para obter o melhor desempenho possível',
                svg: '<svg class="size-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"></circle><path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path></svg>'
            },
            {
                title: 'Deploy',
                description: 'Pode-se envolver a implementação direto em um sistema, endpoints ou outras formas de utilizar os resultados',
                svg: '<svg class="size-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>'
            },
        ],
        posts: [
            {
                title: 'O que é ciência de dados?',
                description: 'Ciência de dados é o estudo das relações entre uma variável aleatória de interesse e variáveis aleatórias explicativas, a fim de diminuir a incerteza sobre a variável de interesse',
                date: 'Março 18, 2023',
                url: 'https://blog.vazfy.tech/2023/03/o-que-e-ciencia-de-dados.html',
            },
            {
                title: 'Porque coletar dados faz empresas crescerem mais rápido?',
                description: 'Dados não são só a informação, é o mapa para você encontrar o caminho da lucratividade',
                date: 'Março 29, 2023',
                url: 'https://blog.vazfy.tech/2023/03/porque-coletar-dados-faz-sua-empresa.html',
            },
            {
                title: 'Como ciência de dados está revolucionando o mercado?',
                description: 'Com Data Science as empresas tomam decisões baseadas em dados que levam a maior eficiência, economia de custos e crescimento de receita',
                date: 'Abril 13, 2023',
                url: 'https://blog.vazfy.tech/2023/04/como-ciencia-de-dados-esta.html',
            },
        ],
        questions: [
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

        init() {
            this.selected_intelligence = this.intelligences[0]
        },

        send_contact() {
            this.contact.device = window.innerWidth <= 640 ? 'Mobile' : window.innerWidth <= 1024 ? 'Tablet' : 'Desktop'
            this.contact.date = new Date().toISOString().split('T')[0]
            fetch('https://script.google.com/macros/s/AKfycbykFuqq2GRQQVmAYLOdKapyyirEidQikeyLLo6G7nTg4k4k4HS-P9tqXkdtMcQTHTEtSg/exec', {
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
