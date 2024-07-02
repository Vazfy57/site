document.addEventListener('alpine:init', () => {
    Alpine.data('alpine', () => ({

        sidebar: false,
        selected_products: [],
        recommended_products: [],
        language: '',
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
