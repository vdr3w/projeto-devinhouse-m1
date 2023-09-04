<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/alunos">Alunos</router-link>
        <router-link to="/exercicios">Exercícios</router-link>
        <router-link to="/login">Sair</router-link>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style scoped>
header {
  background-color: #f4f4f4;
  padding: 1rem;
  text-align: center;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: black;
}
</style>
