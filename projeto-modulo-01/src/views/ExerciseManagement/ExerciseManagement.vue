<template>
  <div>
    <h1>
      Exercícios
      <i class="fas fa-dumbbell"></i>
    </h1>
    <form @submit.prevent="handleAddExercise" class="form-exercise">
      <input placeholder="Nome do exercício" v-model="newExercise" />
      <button type="submit">Adicionar</button>
    </form>
    <ul>
      <li v-for="exercise in exercises" :key="exercise.id">
        {{ exercise.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newExercise: "",
      exercises: [], // This will be populated from the API in the future
    };
  },
  methods: {
    handleAddExercise() {
      // Logic to add a new exercise will go here
      this.exercises.push({ id: Date.now(), description: this.newExercise });
      this.newExercise = "";
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  display: flex;
  align-items: center;
}

h1 i {
  margin-left: 0.5rem;
}

.form-exercise {
  margin-top: 1rem;
}

ul {
  margin-top: 1rem;
}
</style>
