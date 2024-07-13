<template>
  <div id="header">
    <h2>ExampleLogo</h2>
  </div>

  <div id="main">
    <slot></slot>
  </div>

  <div id="footer">
    <h2>ExampleFooter</h2>
  </div>
</template>

<style scoped>
#header {
  width: 100%;
  background-color: #252525;
  padding: 10px;
  color: white;
}

#main {
  width: 100%;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

#footer {
  width: 100%;
  color: white;
  padding: 10px;
  background-color: rgb(254, 38, 38);
}
</style>
