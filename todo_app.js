const todoApp = () => ({
  todos: [],
  addTodo(event) {
    // supress the submit so the the page does not refersh 
    event.preventDefault();

    // retrieve data directly from DOM with magic property root
    var item = this.$root.querySelector('.user_input_task').value;
		
    if (item) {
      const id = this.todos.length;
      // use spread function to add new todo
	  this.todos = [
        ...this.todos,
        {
          id,
          item: item,
          completed: false,
          editing: false
        }
      ];  
      // reset the input field 
      this.$root.querySelector('.user_input_task').value = '';
    }
  },
  remove(event, id) {
    // so supress the submit so the the page does not refersh 
    event.preventDefault();
		
    // we will use filter to remove todos based on id
    this.todos = this.todos.filter((todo) => todo.id !== id);
  },
  setEdit(task) {
    // set edit state to true
    task.editing = true;
		
    // focus the input field when user click on the task
    this.$root.querySelector('#task_edit-'+ (task.id).toString()).focus();
  },
  completeTodo(task) {
    task.completed = !task.completed;
  }
});