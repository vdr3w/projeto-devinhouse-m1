<template>
  <div style="background-color: var(--lavender-blush)">
    <v-app style="background-color: var(--lavender-blush)">
      <v-navigation-drawer
        app
        style="
          background-color: var(--licorice);
          color: var(--battleship-gray);
        ">
      </v-navigation-drawer>

      <v-app-bar
        v-if="showAppBar"
        app
        style="background-color: var(--licorice)">
        <v-toolbar-title style="color: var(--jonquil)">
          <div style="display: flex; align-items: center">
            <v-icon class="text-h3">mdi-weight-lifter</v-icon>
            <p class="text-h4 d-none d-sm-flex" style="margin: 0">DevInGym</p>
          </div>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn
          to="/"
          text
          :style="{
            color: 'var(--jonquil)',
            'background-color': 'var(--rosewood)',
            'margin-right': '0.5rem',
          }">
          <p class="font-weight-bold d-none d-sm-flex">Home</p>
          <v-icon class="d-flex d-sm-none">mdi-home-account</v-icon>
        </v-btn>
        <v-btn
          to="/alunos"
          text
          :style="{
            color: 'var(--jonquil)',
            'background-color': 'var(--rosewood)',
            'margin-right': '0.5rem',
          }">
          <p class="font-weight-bold d-none d-sm-flex">Alunos</p>
          <v-icon class="d-flex d-sm-none">mdi-account-multiple</v-icon>
        </v-btn>
        <v-btn
          to="/exercicios"
          text
          :style="{
            color: 'var(--jonquil)',
            'background-color': 'var(--rosewood)',
            'margin-right': '0.5rem',
          }">
          <p class="font-weight-bold d-none d-sm-flex">Exercícios</p>
          <v-icon class="d-flex d-sm-none">mdi-dumbbell</v-icon>
        </v-btn>
        <v-btn
          to="/login"
          text
          :style="{
            color: 'var(--rosewood)',
            'background-color': 'var(--jonquil)',
            'margin-right': '0.5rem',
          }">
          <p class="font-weight-bold d-none d-sm-flex">Sair</p>
          <v-icon class="d-flex d-sm-none">mdi-logout</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main
        style="background-color: var(--lavender-blush); min-height: 100vh">
        <RouterView />
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const showAppBar = ref(true);

watchEffect(() => {
  showAppBar.value = !["/login", "/register"].includes(route.path);
});
</script>

<style>
:root {
  --jonquil: #f9c80e;
  --lavender-blush: #f6e8ea;
  --licorice: #22181c;
  --rosewood: #5a0001;
  --battleship-gray: #7e8987;
}
</style>
