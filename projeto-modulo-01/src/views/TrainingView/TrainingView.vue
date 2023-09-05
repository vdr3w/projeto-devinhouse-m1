<template>
  <v-container fluid :style="{ backgroundColor: 'var(--lavender-blush)' }">
    <v-row>
      <v-col cols="12">
        <v-card :color="'#22181c'">
          <v-card-title
            class="headline"
            :style="{
              color: 'var(--jonquil)',
              display: 'flex',
              justifyContent: 'space-between',
            }">
            <div class="d-flex align-center">
              <span>TREINOS - {{ userName }}</span>
            </div>
            <div class="d-flex align-center">
              <router-link to="/alunos">
                <v-btn
                  style="
                    background-color: var(--jonquil);
                    color: var(--rosewood);
                  ">
                  <span class="font-weight-bold">Voltar</span>
                </v-btn>
              </router-link>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card :color="'#22181c'" class="mx-auto flex-grow-1">
          <v-card-title class="headline" :style="{ color: 'var(--jonquil)' }">
            {{ selectedDayTitle }}
          </v-card-title>
          <v-card-text :style="{ color: 'var(--battleship-gray)' }">
            <v-row>
              <v-col
                v-for="exercise in todayExercises"
                :key="exercise.id"
                cols="6">
                <v-card
                  @click="toggleCheckbox(exercise)"
                  class="mb-2 clickable-card">
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
                        Peso: {{ exercise.weight }} Kgs |
                        {{ exercise.repetitions }} rep. | Intervalo:
                        {{ exercise.break_time }} seg.
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

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
                @click="selectedDay = day.id"
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
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userName: this.$route.params.userName || this.$route.query.nome,
      todayExercises: [],
      weekExercises: {},
      daysOfWeek: [
        { id: "segunda", title: "Segunda" },
        { id: "terca", title: "Terça" },
        { id: "quarta", title: "Quarta" },
        { id: "quinta", title: "Quinta" },
        { id: "sexta", title: "Sexta" },
        { id: "sabado", title: "Sábado" },
        { id: "domingo", title: "Domingo" },
      ],
      selectedDay: null,
    };
  },
  watch: {
    selectedDay(newDay) {
      // Update todayExercises array based on the selected day
      this.todayExercises = this.weekExercises[newDay];
    },
  },
  methods: {
    toggleCheckbox(exercise) {
      exercise.checked = !exercise.checked;
    },
    async fetchWorkouts() {
      try {
        const studentId = this.$route.params.id;
        const response = await axios.get(
          `http://localhost:3000/workouts?student_id=${studentId}`
        );
        const workouts = response.data.workouts;

        for (const workout of workouts) {
          const dayOfWeek = workout.day.toLowerCase();

          if (!this.weekExercises[dayOfWeek]) {
            this.weekExercises[dayOfWeek] = [];
          }

          this.weekExercises[dayOfWeek].push({
            id: workout.id,
            exercise_description: workout.exercise_description,
            weight: workout.weight,
            repetitions: workout.repetitions,
            break_time: workout.break_time,
            name: workout.exercise_description, // Mantenha esta linha se necessário para outras partes do código
          });
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    },
  },
  computed: {
    selectedDayTitle() {
      return this.selectedDay
        ? this.daysOfWeek.find((day) => day.id === this.selectedDay).title
        : "";
    },
    exerciseListByDay() {
      return (exerciseId) => {
        const exercises = this.todayExercises.filter(
          (exercise) => exercise.id === exerciseId
        );
        return exercises;
      };
    },
  },
  created() {
    const studentId = 1; // Replace with the actual student ID
    this.fetchWorkouts(studentId);

    // Get the current day index (0 for Sunday, 1 for Monday, etc.)
    const currentDayIndex = new Date().getDay();

    // Map the day index to the corresponding day of the week
    const daysOfWeek = [
      "domingo",
      "segunda",
      "terca",
      "quarta",
      "quinta",
      "sexta",
      "sabado",
    ];
    const currentDay = daysOfWeek[currentDayIndex];

    // Set the selected day to the current day
    this.selectedDay = currentDay;

    console.log("All Exercises:", this.weekExercises);

    // Filter exercises for the current day from API response
    if (this.weekExercises[currentDay]) {
      this.todayExercises = this.weekExercises[currentDay];
    }
  },
};
</script>

<style>
.clickable-card {
  cursor: pointer;
}

:root {
  --jonquil: #f9c80e;
  --lavender-blush: #f6e8ea;
  --licorice: #22181c;
  --rosewood: #5a0001;
  --battleship-gray: #7e8987;
}
</style>
