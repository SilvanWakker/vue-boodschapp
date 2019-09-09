Vue.component('shopping-list-item', {
  props: ['item'],
  template: '<li>{{ item.text }}</li>'
});


var app = new Vue({
  el: '#app',
  data: {
    newItem: null,
    shoppingListItems: [
      {id: 1, text: 'Soup', checkedOff: false},
      {id: 2, text: 'Bread', checkedOff: false},
      {id: 3, text: 'Salami', checkedOff: false},
    ]
  },
  methods: {
    /**
     * Add item to shopping list items and clear the newItem input.
     *
     * @param event
     */
    addItem: function(event) {
      this.shoppingListItems.push({
        id: this.shoppingListItems.length + 1,
        text: this.newItem,
        checkedOff: false,
      });
      this.newItem = null;
    },

    /**
     * Clears all shopping list items.
     */
    clearList: function () {
      if (confirm('Are you sure you want to delete all items in your shopping list?')) {
        this.shoppingListItems = [];
      }
    }
  }
});
