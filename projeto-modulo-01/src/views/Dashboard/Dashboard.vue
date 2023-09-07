<template>
  <div class="background-color">
    <v-container fluid class="pa-2 pa-md-4">
      <v-row
        class="fill-height pa-1 pa-md-2 d-flex justify-space-between align-center">
        <v-col cols="auto" class="pa-1 pa-md-2">
          <p class="headline">Bem vindo, {{ userName }}</p>
        </v-col>
        <v-col cols="auto" class="pa-1 pa-md-2">
          <p class="headline font-weight-black">
            Hora Atual: {{ currentTime }}
          </p>
        </v-col>
      </v-row>

      <v-row class="fill-height pa-1 pa-md-2 justify-center align-center">
        <v-col cols="auto" class="pa-1 pa-md-2 mx-auto">
          <v-card
            max-height="210"
            min-height="210"
            min-width="300"
            max-width="320"
            class="square-card elevation-2"
            style="
              background-color: white;
              color: var(--licorice);
              border: 3px solid var(--licorice);
            ">
            <v-card-title class="border-bottom">
              <v-icon small left>mdi-account-group</v-icon>
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
        </v-col>

        <v-col cols="auto" class="pa-1 pa-md-2 mx-auto">
          <v-card
            max-height="210"
            min-height="210"
            min-width="300"
            max-width="320"
            class="square-card elevation-2"
            style="
              background-color: white;
              color: var(--licorice);
              border: 3px solid var(--licorice);
            ">
            <v-card-title class="border-bottom">
              <v-icon small left>mdi-account-group</v-icon>
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

      <v-row class="fill-height justify-center align-center">
        <v-col cols="12" md="12" lg="12">
          <v-card
            max-width="400"
            class="elevation-2 mx-auto"
            style="background-color: white; text-align: center">
            <v-tooltip text="🥺 Faça carinho na Mel 🐾🐶🧡">
              <template v-slot:activator="{ props }">
                <v-img
                  max-width="400"
                  v-bind="props"
                  class="responsive-image"
                  src="https://i.imgur.com/GcjBaP9.jpeg"
                  @click="triggerAnimation"></v-img>
              </template>
            </v-tooltip>
          </v-card>
        </v-col>
      </v-row>

      <div
        v-for="emoji in activeEmojis"
        :key="emoji.id"
        :style="emoji.style"
        class="heart">
        {{ emoji.text }}
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
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

const emojis = ["❤", "💚", "🧡", "💙", "💜", "🤎", "🖤", "🐕", "🐶", "🐾"];

const activeEmojis = ref([]);

const triggerAnimation = () => {
  for (let i = 0; i < 10; i++) {
    const emoji = {
      id: Date.now() + i,
      text: emojis[Math.floor(Math.random() * emojis.length)],
      style: `--n: ${Math.random()};`,
    };
    activeEmojis.value.push(emoji);
    setTimeout(() => {
      const index = activeEmojis.value.indexOf(emoji);
      if (index > -1) {
        activeEmojis.value.splice(index, 1);
      }
    }, 5000);
  }
};
</script>

<style>
.background-color {
  background-color: #f6e8ea;
}

.responsive-image {
  max-width: 100%;
  height: auto;
}

.headline {
  font-size: 2rem;
}

@media (max-width: 600px) {
  .headline {
    font-size: 1.5rem;
  }
}

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

:root {
  --jonquil: #f9c80e;
  --lavender-blush: #f6e8ea;
  --licorice: #22181c;
  --rosewood: #5a0001;
  --battleship-gray: #7e8987;
}

.responsive-image {
  width: 100%;
  height: auto;
}
</style>
