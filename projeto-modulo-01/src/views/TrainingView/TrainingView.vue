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
            <TodayExerciseList
              :todayExercises="todayExercises"
              :currentDay="selectedDay"
              :weekExercises="weekExercises"
              @toggle-exercise="toggleCheckbox" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <WeekDaysTable
      :daysOfWeek="daysOfWeek"
      :weekExercises="weekExercises"
      @update:selectedDay="selectedDay = $event" />
  </v-container>
</template>

<script>
import axios from "axios";
import TodayExerciseList from "../../components/TrainingView/TodayExerciseList.vue";
import WeekDaysTable from "../../components/TrainingView/WeekDaysTable.vue";

export default {
  components: {
    TodayExerciseList,
    WeekDaysTable,
  },
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
      this.todayExercises = this.weekExercises[newDay] || [];
    },
  },
  computed: {
    selectedDayTitle() {
      return this.selectedDay
        ? this.daysOfWeek.find((day) => day.id === this.selectedDay).title
        : "";
    },
  },
  methods: {
    async fetchWorkouts() {
      try {
        const studentId = this.$route.params.id;
        const response = await axios.get(
          `http://localhost:3000/workouts?student_id=${studentId}`
        );
        const workouts = response.data.workouts;

        // Inicializar weekExercises com objetos vazios para cada dia da semana
        const weekExercises = {
          segunda: [],
          terca: [],
          quarta: [],
          quinta: [],
          sexta: [],
          sabado: [],
          domingo: [],
        };

        for (const workout of workouts) {
          const dayOfWeek = workout.day.toLowerCase();

          // Verificar se o dia da semana existe no objeto weekExercises
          if (weekExercises.hasOwnProperty(dayOfWeek)) {
            weekExercises[dayOfWeek].push({
              id: workout.id,
              exercise_description: workout.exercise_description,
              weight: workout.weight,
              repetitions: workout.repetitions,
              break_time: workout.break_time,
              name: workout.exercise_description,
            });
          }
        }

        this.weekExercises = weekExercises;
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    },
    async toggleCheckbox(exercise) {
      exercise.checked = !exercise.checked;

      try {
        const studentId = this.$route.params.id;
        const dayOfWeek = this.selectedDay;
        await axios.post("http://localhost:3000/workouts/check", {
          workout_id: exercise.id,
          student_id: studentId,
          day_of_week: dayOfWeek,
        });
        console.log("Exercício atualizado com sucesso!");
      } catch (error) {
        console.error("Erro ao atualizar o exercício:", error);
      }
    },
  },
  async created() {
    await this.fetchWorkouts();
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
    const currentDay = daysOfWeek[currentDayIndex];
    this.selectedDay = currentDay;

    if (this.weekExercises[this.selectedDay]) {
      this.todayExercises = this.weekExercises[this.selectedDay];
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
