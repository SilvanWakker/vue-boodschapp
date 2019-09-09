Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    title: 'you found me, plz no hurt',
    visible: true,
    todos: [
      { id: 1, text: 'Clean dishes' },
      { id: 2, text: 'Clean toilet' },
      { id: 3, text: 'Take out trash' },
    ]
  },
  methods: {
    clearList: function() {
      alert('byby');
      this.todos = [];
    }
  }
});

