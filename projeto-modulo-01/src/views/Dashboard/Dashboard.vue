<template>
  <div>
    <h1>Dashboard</h1>
    <h2>Bem vindo, {{ userName }}</h2>
    <div class="cards">
      <div class="card">
        <h3>Qtd de Alunos</h3>
        <p>{{ amount_students }}</p>
      </div>
      <div class="card">
        <h3>Numero de Exercicios</h3>
        <p>{{ amount_exercises }}</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-between;
}

.card {
  width: 45%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}
</style>
