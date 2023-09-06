<template>
  <v-row>
    <v-col v-for="exercise in exercisesForToday" :key="exercise.id" cols="6">
      <v-card @click="toggleCheckbox(exercise)" class="mb-2 clickable-card">
        <v-card-text
          class="d-flex align-center"
          :style="{
            backgroundColor: exercise.checked
              ? 'rgba(0, 255, 0, 0.2)'
              : 'rgba(255, 0, 0, 0.1)',
            opacity: exercise.checked ? 0.5 : 1,
          }">
          <v-list-item-action class="mt-1 custom-checkbox">
            <v-checkbox
              :id="exercise.id.toString()"
              v-model="exercise.checked"></v-checkbox>
          </v-list-item-action>
          <v-list-item class="mb-4">
            <v-list-item-title>
              {{ exercise.exercise_description }}
            </v-list-item-title>
            <v-list-item-subtitle>
              Peso: {{ exercise.weight }} Kgs | {{ exercise.repetitions }} rep.
              | Intervalo: {{ exercise.break_time }} seg.
            </v-list-item-subtitle>
          </v-list-item>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["todayExercises", "currentDay", "weekExercises"],
  computed: {
    exercisesForToday() {
      return this.weekExercises[this.currentDay] || [];
    },
  },
  created() {},
  methods: {
    toggleCheckbox(exercise) {
      this.$emit("toggle-exercise", exercise);
    },
  },
};
</script>
