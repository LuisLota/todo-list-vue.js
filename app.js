const app = new Vue({
el: "#app",
data: {
    title: 'Todo-List ',
    newTodo: '',
    dayOfWeek: '',
    todos: [],
    numberTask:0,
    dateNow: ''
    
},

methods: {

    addTodo(){
       // console.log(this.newTodo);
        this.todos.push({
            title: this.newTodo,
            
            done: false
        });

        this.newTodo = '';
        this.numberTask+=1;
        
    },

    removeTodo(todo){
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex,1);
    },

    allDone(){

        this.todos.forEach(todo => {
        todo.done = true;   
        
        });
    },


}
});