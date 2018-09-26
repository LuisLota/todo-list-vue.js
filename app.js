const app = new Vue({
el: "#app",
data: {
    title: 'Todo App ',
    newTodo: '',
    todos: [],
    numberTask: 0
   
},

methods: {

    addTodo(){
        this.todos.push({
            title: this.newTodo,    
            done: false

        });
        this.did = false;
        this.newTodo = '';
        this.numberTask+=1;
        localStorage.setItem('tasks',JSON.stringify(this.todos)); 
         
    },

    removeTodo(todo){
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex,1);
        this.numberTask < 0 ? this.numberTask = 0 :  this.numberTask-=1;
     this.newTodo = '';
    },

    remove(todo){
        const todoIndex = this.todos.indexOf(todo);
      
    }
  
}
});