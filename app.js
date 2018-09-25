const app = new Vue({
el: "#app",
data: {
    title: 'Todo-List ',
    newTodo: '',
    dayOfWeek: '',
    todos: []
},

methods: {

    showTime(){
      // DAY OF THE WEEK
    },



    addTodo(){
       // console.log(this.newTodo);
        this.todos.push({
            title: this.newTodo,
            
            done: false
        });

        this.newTodo = '';
        
    },

    removeTodo(todo){
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex,1);
    },

    allDone(){

       
        this.todos.forEach(todo => {
        todo.done = true;   
        });
    }
}
});