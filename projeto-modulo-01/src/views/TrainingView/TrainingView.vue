<template>
  <div>
    <h1>TREINOS - {{ userName }}</h1>

    <h1>HOJE</h1>
    <ul>
      <li v-for="exercise in todayExercises" :key="exercise.id">
        <input type="checkbox" :id="exercise.id" />
        <label :for="exercise.id">{{ exercise.name }}</label>
      </li>
    </ul>

    <div class="week-card">
      <button v-for="day in daysOfWeek" :key="day" @click="selectedDay = day">
        {{ day }}
      </button>

      <div v-if="selectedDay">
        <h2>{{ selectedDay }}</h2>
        <ul>
          <li v-for="exercise in weekExercises[selectedDay]" :key="exercise.id">
            {{ exercise.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: localStorage.getItem("userName"),
      todayExercises: [
        { id: 1, name: "Push-up" },
        { id: 2, name: "Sit-up" },
      ],
      weekExercises: {
        Segunda: [{ id: 1, name: "Push-up" }],
        Terça: [{ id: 2, name: "Sit-up" }],
      },
      daysOfWeek: [
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
        "Domingo",
      ],
      selectedDay: null,
    };
  },
};
</script>

<style scoped>
.week-card {
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
