<template>
  <div>
    <div class="header">
      <h1>ALUNOS</h1>
      <button class="new-button">NOVO</button>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Buscar aluno" v-model="searchQuery" />
      <button class="search-button">Buscar</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>NOME</th>
          <th>AÇÕES</th>
        </tr>
      </thead>
      <tbody>
        <!-- Placeholder para os alunos -->
      </tbody>
    </table>
  </div>
</template>

<script setup>
// Placeholder para a lógica do componente
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-bar {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
