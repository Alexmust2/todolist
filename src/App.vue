<template>
  <div class="main_container">
    <div 
      class="todos_container"  
      v-for="(list, index) in $store.state.todos" 
      :key="index"
    >
        <h1 class="list_title" :style="{background:list.color}">{{ list.name }}</h1>
        <ul>
          <li 
            v-for="task in list.tasks" 
            :key="task.id"
          >
          {{ task.title }}
        </li>
        </ul>
    </div>
  </div>
</template>

<script>
import store from './store/index';


export default {
  name: 'App',
  mounted(){
    console.log(store.state.todos)
  }
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

.main_container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  height: 100vh;
  width: 1920px;
}

.todos_container {
  width: 350px;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-self: center;

  border: 2px solid black;
  border-radius: 25px;
  .list_title {
    align-self: center;

    width: 350px;
    height: 50px;

    border: 2px solid black;
    border-radius: 25px 25px 0 0;

    color: antiquewhite;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

  }
  ul {
    padding: 15px;
  }
  li { 
    list-style: none;
  }
}

</style>
