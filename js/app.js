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
       linedText: "text-decoration-line-through"
    }
  },
  methods: {
    addDecoration (i) {
        if(i.done === true)
           return "text-decoration-line-through"
        
    }
  }
}).mount('#app')