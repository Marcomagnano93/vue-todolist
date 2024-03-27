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
            done: false
        },
        {
            text: "Fatti la doccia",
            done: false
        },
       ]
    }
  }
}).mount('#app')