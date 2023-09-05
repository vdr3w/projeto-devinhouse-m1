<template>
  <div style="background-color: #f6e8ea">
    <v-container fluid>
      <!-- Centralização vertical para "Bem-vindo" -->
      <v-row class="fill-height" align="center">
        <v-col cols="12">
          <p class="text-center text-h4 text-uppercase">
            Bem vindo, {{ userName }}
          </p>
        </v-col>
      </v-row>

      <!-- Centralização vertical para "Imagem" -->
      <v-row class="fill-height" align="center">
        <v-col cols="12" class="d-flex align-center justify-center">
          <v-tooltip text="🥺 Faça carinho na Mel 🐾🐶🧡">
            <template v-slot:activator="{ props }">
              <v-img
                v-bind="props"
                max-width="400"
                :width="341"
                aspect-ratio="16/9"
                cover
                src="https://i.imgur.com/GcjBaP9.jpeg"
                @click="triggerAnimation">
              </v-img></template
          ></v-tooltip>
        </v-col>
      </v-row>
      <!-- Centralização vertical para "Hora" -->
      <v-row class="fill-height" align="center">
        <v-col cols="12">
          <p class="text-center text-h4 font-weight-black text-medium-emphasis">
            Hora Atual: {{ currentTime }}
          </p>
        </v-col>
      </v-row>

      <!-- Centralização vertical e horizontal para os cards -->
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" class="d-flex flex-column align-center justify-center">
          <!-- Card 1 -->
          <v-card
            min-width="300"
            max-width="320"
            class="square-card elevation-2 mb-4"
            style="
              background-color: white;
              color: var(--licorice);
              border: 3px solid var(--licorice);
            ">
            <v-card-title class="border-bottom">
              <h3>Nº de Alunos</h3>
            </v-card-title>
            <v-card-text class="px-4">
              <p class="text-h4">{{ amount_students }}</p>
            </v-card-text>
            <v-card-actions class="px-4">
              <router-link to="/novo-aluno">
                <v-btn
                  prepend-icon="mdi-account-multiple-plus"
                  style="
                    background-color: var(--rosewood);
                    color: var(--jonquil);
                  "
                  >Cadastrar</v-btn
                ></router-link
              ></v-card-actions
            >
          </v-card>

          <!-- V-Card 2 -->
          <v-card
            min-width="300"
            max-width="320"
            class="square-card elevation-2"
            style="
              background-color: white;
              color: var(--licorice);
              border: 3px solid var(--licorice);
            ">
            <v-card-title class="border-bottom">
              <h3>Nº de Exercícios</h3>
            </v-card-title>
            <v-card-text class="px-4">
              <p class="text-h4">{{ amount_exercises }}</p>
            </v-card-text>
            <v-card-actions class="px-4">
              <router-link to="/exercicios">
                <v-btn
                  prepend-icon="mdi-file-document-edit"
                  style="
                    background-color: var(--rosewood);
                    color: var(--jonquil);
                  "
                  >Cadastrar</v-btn
                ></router-link
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const amount_students = ref(0);
const amount_exercises = ref(0);

const user = JSON.parse(localStorage.getItem("user-info"));
const userName = ref(user ? user.name : "");

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/dashboard");
    amount_students.value = response.data.amount_students;
    amount_exercises.value = response.data.amount_exercises;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
};

const currentTime = ref(new Date().toLocaleTimeString());

const updateTime = () => {
  currentTime.value = new Date().toLocaleTimeString();
};

setInterval(updateTime, 1000);

onMounted(fetchData);

const heartEmojis = ["❤", "💚", "🧡", "💙", "💜", "🤎", "🖤", "🐕", "🐶", "🐾"];

const triggerAnimation = () => {
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent =
      heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.setProperty("--n", Math.random());
    document.body.appendChild(heart);

    setTimeout(() => {
      document.body.removeChild(heart);
    }, 5000);
  }
};
</script>

<style>
/* Seu estilo aqui */

.heart {
  font-size: 2em;
  position: absolute;
  animation: fall 5s linear infinite;
}

@keyframes fall {
  0% {
    top: -50px;
    left: calc(100% * var(--n));
  }
  100% {
    top: 100vh;
    left: calc(100% * var(--n));
  }
}

/* Define your color scheme */
:root {
  --jonquil: #f9c80e;
  --lavender-blush: #f6e8ea;
  --licorice: #22181c;
  --rosewood: #5a0001;
  --battleship-gray: #7e8987;
}
</style>
