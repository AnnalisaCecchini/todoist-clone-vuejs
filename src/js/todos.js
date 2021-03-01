import Vue from 'vue';

const todos = new Vue ({
    el: '#todos', 
    data: {
        newItem: '',
        indexItem: 0,
        items: [],
        picked: ''
    },
    methods: {
        addItem() {
            if (this.newItem.trim() !=='') {
                this.items.push({
                    name: this.newItem, 
                    picked: this.picked, 
                    completed: false
                });

                this.newItem = '';
                this.picked = null;
            }
        },
        completedItem(index) {
            this.items[index].completed = !this.items[index].completed;
            console.log( this.items[index].completed);
            
        },
        removeItem(index) {
            this.indexItem = index;
            this.items.splice(index,1);
            
        },
    }
});