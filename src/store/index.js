import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:{
      AgreementTodos:{
        name: 'Agreement',
        color: 'blue',
        tasks: [{title: 'agree'}]
      },
      newTodos:{
        name: 'New',
        color: 'red',
        tasks: [{title: 'new'}]
      },
      InProgressTodos:{
        name: 'InProgress',
        color: 'black',
        tasks: [{title: 'inprogres'}]
      },
      ReadyTodos:{
        name: 'Ready',
        color: 'green',
        tasks: [{title: 'ready'}]
      },
      FinalizeTodos:{
        name: 'Final',
        color: 'pink',
        tasks: [{title: 'Final'}]
      },
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
