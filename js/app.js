const { createApp } = Vue

createApp({
  data() {
    return {
       toDoList: [
        {
            text: "Oggi devo fare...",
            done: false
        },
       ],
       inputValue: ""
    }
  },
  methods: {
    addDecoration (i) {
        if(i.done === true)
           return "text-decoration-line-through"  
    },
    removeTask(i) {
        this.toDoList.splice(i, 1)
    },
    addTask() {
        if(this.inputValue !== "")
        {
        let newTask = {
            text: this.inputValue,
            done: false
            }
        this.toDoList.push(newTask)
        this.inputValue = "" //input reset
        } 
        else
        alert("inserisci qualcosa!")
    },
    taskCompleted(i){
        if(i.done !== true) i.done = true
        else i.done = false
    }
  }
}).mount('#app')