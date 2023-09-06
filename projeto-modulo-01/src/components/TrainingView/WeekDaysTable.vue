<template>
  <v-row>
    <v-col cols="12">
      <v-card :color="'#22181c'">
        <v-card-actions class="d-flex justify-space-between">
          <v-col
            v-for="day in daysOfWeek"
            :key="day.id"
            cols="1"
            class="d-flex justify-center">
            <v-btn
              @click="selectDay(day.id)"
              :color="'var(--rosewood)'"
              text
              :style="{ color: 'var(--jonquil)', width: '100%' }">
              {{ day.title }}
            </v-btn>
          </v-col>
        </v-card-actions>
        <v-card-text v-if="selectedDay" :style="{ color: '#22181c' }">
          <h2>{{ selectedDay }}</h2>
          <v-list>
            <v-list-item
              v-for="exercise in weekExercises[selectedDay]"
              :key="exercise.id">
              <v-list-item>
                Exercício: {{ exercise.exercise_description }} | Peso:
                {{ exercise.weight }} Kgs | {{ exercise.repetitions }} rep. |
                Intervalo: {{ exercise.break_time }} seg.
              </v-list-item>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["daysOfWeek", "weekExercises"],
  data() {
    return {
      selectedDay: null,
    };
  },
  mounted() {
    const currentDayIndex = new Date().getDay();
    const daysOfWeek = [
      "domingo",
      "segunda",
      "terca",
      "quarta",
      "quinta",
      "sexta",
      "sabado",
    ];
    this.selectedDay = daysOfWeek[currentDayIndex];
    this.$emit("update:selectedDay", this.selectedDay);
  },
  methods: {
    selectDay(dayId) {
      this.selectedDay = dayId;
      this.$emit("update:selectedDay", this.selectedDay);
    },
  },
};
</script>
