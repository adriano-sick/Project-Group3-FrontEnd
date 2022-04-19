<template>
  <div class="container-default">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span class="navbar-brand mb-0 h1 nav-brand-default">Infinite</span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Início<span class="sr-only">(você está aqui)</span></a
            >
          </li>
          <li>
            <router-link class="nav-link" to="/studentevaluation"
              >Provas</router-link
            >
          </li>
          <li>
            <router-link class="nav-link" to="/studentgrade">Notas</router-link>
          </li>
        </ul>
      </div>

      <div
        class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse nav-logoff"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Sair</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="banner-text">
      <p>Bem vindo(a) estudante!</p>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "Student",
};
</script>

<style>
.container-default {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: black;
}

.nav-student {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: center;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}
.nav-student a {
  text-decoration: none;
  margin-bottom: 20px;
}

.banner-text {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: center;
  font-size: 40px;
  color: #0c827e;
}

.nav-brand-default {
  padding: 15px;
}
.nav-logoff {
  margin-right: 5px;
}
</style>
