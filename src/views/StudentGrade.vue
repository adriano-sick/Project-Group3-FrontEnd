<template>
  <div class="container-default">
    <main class="main-content">
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
              <router-link class="nav-link" to="/student">Início</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/studentevaluation"
                >Provas</router-link
              >
            </li>
            <li>
              <router-link class="nav-link" to="/studentgrade"
                >Notas(você está aqui)</router-link
              >
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
      <section class="main-section">
        <h1 class="main-title" tabindex="0">Consultar as suas notas</h1>
        <p class="student-name">{{ this.userNameComputed }}</p>
        <table>
          <thead>
            <th>Prova</th>
            <th>Nota</th>
          </thead>
          <tbody>
            <tr v-for="(studenttest, index) in this.listUsersTest" :key="index">
              <th>{{ studenttest.name }}</th>
              <th>{{ studenttest.grade }}</th>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "StudentGrade",
  data() {
    return {
      listUsersTest: [],
    };
  },
  created() {
    this.getUserLogin();
  },
  computed: {
    ...mapGetters(["token", "users", "userID", "userName"]),
    tokenComputed() {
      return this.$store.state.token;
    },
    userIDComputed() {
      return this.$store.state.userID;
    },
    userNameComputed() {
      return this.$store.state.userName;
    },
  },
  methods: {
    backRoot() {
      this.$router.push("/");
    },

    getUserLogin() {
      axios
        .get(`https://group3-anima.herokuapp.com/Test/${this.userIDComputed}`, {
          headers: { Authorization: `Bearer ${this.tokenComputed}` },
        })
        .then((response) => {
          this.listUsersTest = response.data;
          return response.data;
        })
        .then(console.log)
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
.container-default {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: black;
}
.main-title {
  color: #0c827e;
  margin-top: 16px;
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
}

.nav-brand-default {
  padding: 15px;
}
.nav-logoff {
  margin-right: 5px;
}

.student-name {
  margin-top: 12px;
  font-size: 24px;
  color: gray;
}

table {
  font-family: "Arial";
  margin: 25px auto;
  border-collapse: collapse;
  border: 1px solid #00cccc;
  box-shadow: 0px 0px 20px;
  margin-top: 60px;
}

table th,
table td {
  color: white;
  border: 1px solid #eee;
  padding: 12px 35px;
  border-collapse: collapse;
  background-color: black;
}
</style>
