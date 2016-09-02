<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col-md-10">
        <a class="btn btn-default "  href="#/page">Page</a>
        <a class="btn btn-default"  href="#/system_config">System Config</a>
      </div>
      <div class="col-md-2">
        <a class="btn btn-default" href="#/Login">Login</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}
.page {
  text-align: center;
}
code {
  background-color: #f0f0f0;
  padding: 3px 5px;
  border-radius: 2px;
}
</style>
<script>

</script>
