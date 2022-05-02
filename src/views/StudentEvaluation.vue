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
              <router-link class="nav-link" to="/student"
                >Início<span class="sr-only"></span
              ></router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/studentevaluation"
                >Provas(você está aqui)</router-link
              >
            </li>
            <li>
              <router-link class="nav-link" to="/studentgrade"
                >Notas</router-link
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
        <h1 class="main-title" tabindex="0">Realizar Avaliação</h1>
        <p>{{ this.userNameComputed }}</p>
        <label
          class="label-question"
          v-for="(test, index) in this.userTestName"
          :key="index"
          >{{ test.title }}</label
        >
        <div class="form-test">
          <div
            v-for="(questiontest, index) in this.listAlternativesTest"
            :key="index"
          >
            <br />

            <input
              class="form-check-input"
              type="radio"
              value="value-1"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              class="form-check-label input-label"
              for="flexRadioDefault1"
              >{{ questiontest.text }}</label
            >
          </div>
        </div>

        <button class="btn btn-outline-success btn-action">
          Finalizar Prova
        </button>
      </section>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "StudentEvaluation",
  data() {
    return {
      listUsersTest: [],
      userTestID: "",
      userTestName: "",
      questionTestID: "",
      listQuestionTest: [],
      listAlternativesTest: [],
    };
  },
  created() {
    this.getUserLogin();
    this.getTestQuestion();
    this.getAlternativeQuestion();
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
          this.userTestID = response.data.testId;
          return response.data;
        })
        .then(console.log)
        .catch((e) => {
          console.log(e);
        });
    },

    getTestQuestion() {
      axios
        .get(
          `https://group3-anima.herokuapp.com/Question/a4471dfc-ec00-47b2-25d3-08da2c7a9549`,
          {
            headers: { Authorization: `Bearer ${this.tokenComputed}` },
          }
        )
        .then((response) => {
          this.listQuestionTest = response.data;
          this.getFilterTest();
          console.log(this.listQuestionTest);
          return response.data;
        })
        .then(console.log)
        .catch((e) => {
          console.log(e);
        });
    },

    getAlternativeQuestion() {
      axios
        .get(
          `https://group3-anima.herokuapp.com/Alternative/89f8d50e-0817-4343-2bb6-08da2c7aa697`,
          {
            headers: { Authorization: `Bearer ${this.tokenComputed}` },
          }
        )
        .then((response) => {
          this.listAlternativesTest = response.data;
          return response.data;
        })
        .then(console.log)
        .catch((e) => {
          console.log(e);
        });
    },

    getFilterTest() {
      this.userTestName = this.listQuestionTest.filter((question) => {
        if (question.questionId === "89f8d50e-0817-4343-2bb6-08da2c7aa697") {
          return question.title;
        }
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

.nav-brand-default {
  padding: 15px;
}
.nav-logoff {
  margin-right: 5px;
}

.main-title {
  color: #0c827e;
  margin-top: 16px;
}

.label-question {
  color: white;
  margin-top: 20px;
}

.input-label {
  padding-left: 8px;
}

.main-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
}

.btn-action {
  margin-top: 16px;
}
</style>
