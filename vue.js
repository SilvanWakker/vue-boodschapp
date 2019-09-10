Vue.component('shopping-list-item', {
  props: ['item'],
  template: `
<li>
<div>
    <label for="item-text">Name</label>
    <input v-model="item.text" value="item.text" name="item-text">
    <label for="item-quantity">Quantity</label>
    <input v-model="item.quantity" value="item.quantity" name="item-quantity">
</div>
<div>
    <button @click="$emit('check-item', item.id)">Check off</button>
    <button @click="$emit('delete-item', item.id)">Delete</button>
</div>
</li>`,
});


var app = new Vue({
  el: '#app',
  data: {
    // The new item input value.
    newItem: null,
    newQuantity: 1,
    // The ID of the next item.
    nextId: 4,
    shoppingListItems: [
      {id: 1, text: 'Soup', quantity: 1, checkedOff: false},
      {id: 2, text: 'Bread', quantity: 1, checkedOff: false},
      {id: 3, text: 'Salami', quantity: 1, checkedOff: false},
    ]
  },
  methods: {
    /**
     * Add item to shopping list items and clear the newItem input.
     *
     * @param event
     */
    addItem: function (event) {
      // Validate the name and quantity input.
      if (this.newItem !== null && this.newItem.replace(/\s/g, '').length
          && this.newQuantity !== null && !isNaN(this.newQuantity) && this.newQuantity > 0) {
        this.shoppingListItems.push({
          id: this.nextId,
          text: this.newItem,
          checkedOff: false,
          quantity: this.newQuantity,
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

    /**
     * Marks an item as checked off.
     *
     * @param id
     *   The ID of the item to check off.
     */
    checkItem(id) {
      for (let i = 0; i < this.shoppingListItems.length; i++) {
        if (this.shoppingListItems[i].id === id) {
          this.shoppingListItems[i].checkedOff = true;
        }
      }
    },
  }
});
