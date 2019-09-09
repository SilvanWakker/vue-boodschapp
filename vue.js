Vue.component('shopping-list-item', {
  props: ['item'],
  template: '<li>{{ item.text }}</li>'
});

var app = new Vue({
  el: '#app',
  data: {
    shoppingListItems: [
      { id: 1, text: 'Soup' },
      { id: 2, text: 'Bread' },
      { id: 3, text: 'Salami' },
    ]
  },
  methods: {
    clearList: function() {
      if (confirm('Are you sure you want to delete all items in your shopping list?')) {
        this.shoppingListItems = [];
      }
    }
  }
});

