<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <!--<router-view/>-->
    <g-button icon="settings">点我</g-button>
    <g-button icon="settings" icon-position="right">点我</g-button>
    <g-button icon="settings" icon-position="left">点我</g-button>
  </div>
</template>

<style lang="scss">
*{margin: 0;padding: 0;box-sizing: border-box;}
:root{
  --font-size: 14px;
  --button-height: 32px;
  --button-bg: #FFF;
  --button-active-bg: #eee;
  --border-color: #999;
  --border-color-hover: #666;
  --border-radius: 4px;
  --color: #333;
}
body{font-size: var(--font-size)}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
