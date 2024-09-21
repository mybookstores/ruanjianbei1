<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  
  
}
::-webkit-scrollbar-thumb { 
  background-color: #c1c1c1;
}
::-webkit-scrollbar-track { 
  
  background: transparent;
  
}

</style>
