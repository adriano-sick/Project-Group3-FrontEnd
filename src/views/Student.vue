<template>
  <div class="container">
    <nav>
      <router-link to="/studentgrade">Alunos - Notas</router-link>
      <router-link to="/studentevaluation">Alunos - Provas</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Student",
  data() {
    return {
      nameLogin: "",
      gradeLogin: "",
    };
  },
  computed: {
    ...mapGetters(["grade"]),
    ...mapMutations(["SET_GRADE"]),
  },
  created() {
    //this.getTestLogin();
  },
  methods: {
    getTestLogin() {
      axios
        .get("https://group3-anima.herokuapp.com/Test", {
          headers: {
            Authorization: "Bearer",
          },
        })
        .then((response) => {
          this.nameLogin = response.data.name;
          this.gradeLogin = response.data.grade;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}
</style>
