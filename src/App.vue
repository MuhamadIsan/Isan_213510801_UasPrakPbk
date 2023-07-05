<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li :class="{ 'active': $route.path === '/' }"><router-link to="/" class="nav-link">Foto</router-link></li>
         <li :class="{ 'active': $route.path === '/lokasi' }"><router-link to="/lokasi" class="nav-link">Lokasi</router-link></li>
          <li :class="{ 'active': $route.path === '/game' }"><router-link to="/game" class="nav-link">Game</router-link></li>
          <li :class="{ 'active': $route.path === '/cuaca' }"><router-link to="/cuaca" class="nav-link">Cuaca</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
*{
  box-sizing: border-box;
  
}
#app {
  text-align: center;
}
body {
  background-color: #FFE4A7;
}
header {
  background: #A4907C;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  max-width: 80%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap; 
}

nav li {
  display: inline-block;
  margin-right: 10px;
  font-weight: bold;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
  font-family:Arial, Helvetica, sans-serif;
}

nav a:hover {
  background-color: #A76F6F; 
  text-decoration: none;
}

.active {
  background-color: #A76F6F;
  border-radius: 4px;
  width: auto;
}

@media (max-width: 600px) {
  nav ul {
    flex-wrap: wrap;
    justify-content: center; /* Added */
  }

  nav li {
    width: auto; /* Modified */
    margin: 0 5px; /* Added */
  }
}
</style>