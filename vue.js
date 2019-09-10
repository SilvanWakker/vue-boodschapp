Vue.component('shopping-list-item', {
  props: ['item'],
  template: `
<li>
<div>
    <input v-model="item.text" value="item.text">
</div>
<div>
    <button @click="$emit('delete-item', item.id)">Delete</button>
</div>
</li>`,
});


var app = new Vue({
  el: '#app',
  data: {
    // The new item input value.
    newItem: null,
    // The ID of the next item.
    nextId: 4,
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
    addItem: function (event) {
      // Only add the item if input is value, ie has value and does not only
      // contain whitespace.
      if (this.newItem !== null && this.newItem.replace(/\s/g, '').length) {
        this.shoppingListItems.push({
          id: this.nextId,
          text: this.newItem,
          checkedOff: false,
        });
        this.newItem = null;
        this.nextId++;
      }
    },

    /**
     * Clears all shopping list items.
     */
    clearList: function () {
      if (confirm('Are you sure you want to delete all items in your shopping list?')) {
        this.shoppingListItems = [];
      }
    },

    /**
     * Delete an item from the shopping list.
     *
     * @param id
     *   The ID of the item to delete.
     */
    deleteItem(id) {
      for (let i = 0; i < this.shoppingListItems.length; i++) {
        if (this.shoppingListItems[i].id === id) {
          this.shoppingListItems.splice(i, 1);
        }
      }
    },
  }
});
