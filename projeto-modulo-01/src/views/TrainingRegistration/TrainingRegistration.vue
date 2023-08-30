<template>
  <div>
    <h1>Cadastro de Treinos</h1>
    <form @submit.prevent="handleFormSubmit">
      <div>
        <label for="exercise">Exercício:</label>
        <select id="exercise" v-model="exercise_id">
          <!-- Options here -->
        </select>
      </div>

      <div>
        <label for="repetitions">Repetições:</label>
        <input
          type="number"
          id="repetitions"
          min="1"
          v-model="repetitions"
          required />
      </div>

      <div>
        <label for="weight">Peso:</label>
        <input type="number" id="weight" v-model="weight" required />
      </div>

      <div>
        <label for="break_time">Tempo de Pausa(segundos):</label>
        <input type="number" id="break_time" v-model="break_time" required />
      </div>

      <div>
        <label for="observations">Observações:</label>
        <textarea id="observations" v-model="observations"></textarea>
      </div>

      <div>
        <label for="day">Dia da Semana:</label>
        <select id="day" v-model="day">
          <option value="segunda">Segunda-feira</option>
          <option value="terca">Terça-feira</option>
          <option value="quarta">Quarta-feira</option>
          <option value="quinta">Quinta-feira</option>
          <option value="sexta">Sexta-feira</option>
          <option value="sabado">Sábado</option>
          <option value="domingo">Domingo</option>
        </select>
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exercise_id: "",
      repetitions: 1,
      weight: "",
      break_time: "",
      observations: "",
      day: new Date().getDay().toString(),
    };
  },
  methods: {
    handleFormSubmit() {
      // Axios
    },
  },
};
</script>
