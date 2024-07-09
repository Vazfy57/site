document.addEventListener('alpine:init', () => {
    Alpine.data('alpine', () => ({

        language: '',
        sidebar: false,
        contact_modal: false,
        message_modal: false,
        contact: {},
        selected_products: [],
        recommended_products: [],
        products: [
            'Arroz',
            'Feijão',
            'Café',
            'Macarrão',
            'Trigo',
            'Ovo',
            'Cebola',
            'Alho',
            'Carne',
            'Cerveja',
            'Sorvete',
            'Queijo',
        ],

        send_contact() {
            this.contact.user_id = document.cookie.split('; ').find(cookie => cookie.startsWith('_ga=')) ? document.cookie.split('; ').find(cookie => cookie.startsWith('_ga=')).split('=')[1] : undefined
            this.contact.device = window.innerWidth <= 640 ? 'Mobile' : window.innerWidth <= 1024 ? 'Tablet' : 'Desktop'
            this.contact.source = 'Site'
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

        add_product(product) {
            let index = this.selected_products.indexOf(product);
            if (index !== -1) {
                this.selected_products.splice(index, 1);
            } else {
                this.selected_products.push(product);
            }
        },

        generate_recommended_products() {
            if (this.selected_products.length == 0) {
                return
            }

            const non_selected_products = this.products.filter(product => 
                !this.selected_products.includes(product)
            );

            for (let i = non_selected_products.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [non_selected_products[i], non_selected_products[j]] = [non_selected_products[j], non_selected_products[i]];
            }

            this.recommended_products = non_selected_products.slice(0, Math.floor(Math.random() * 2) + 2);
        },

    }))
});
