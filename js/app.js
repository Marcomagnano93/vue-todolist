const { createApp } = Vue

createApp({
  data() {
    return {
       toDoList: [
        {
            text: "Fai la spesa",
            done: false
        },
        {
            text: "Fai i compiti",
            done: true
        },
        {
            text: "Fatti la doccia",
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
    taskCompleted(i) {
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
        this.inputValue = ""
        console.log(this.toDoList)} //input reset
        else
        alert("inserisci qualcosa!")
    }
  }
}).mount('#app')