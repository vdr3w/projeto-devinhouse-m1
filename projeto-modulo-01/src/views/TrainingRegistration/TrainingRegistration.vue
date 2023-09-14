<template>
  <div
    style="
      background-color: var(--lavender-blush);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    ">
    <v-card
      :elevation="5"
      rounded="xl"
      style="
        width: 500px;
        padding: 20px;
        background-color: white;
        color: var(--battleship-gray);
      ">
      <v-card-title class="text-h4" style="color: var(--licorice)">
        <span class="cursive-title text-uppercase">Cadastro de Treinos</span>
      </v-card-title>

      <v-form @submit.prevent="handleFormSubmit">
        <v-select
          label="Exercício"
          v-model="exercise_id"
          :items="exercises"
          item-title="description"
          item-value="id"
          placeholder="SELECIONE UM EXERCÍCIO"
          style="color: var(--licorice)"
          required>
        </v-select>

        <v-text-field
          label="Repetições"
          type="number"
          v-model="repetitions"
          required
          style="color: var(--licorice)"></v-text-field>

        <v-text-field
          label="Peso"
          type="number"
          v-model="weight"
          required
          style="color: var(--licorice)"></v-text-field>

        <v-text-field
          label="Tempo de Pausa (segundos)"
          type="number"
          v-model="break_time"
          required
          style="color: var(--licorice)"></v-text-field>

        <v-textarea
          label="Observações"
          v-model="observations"
          style="color: var(--licorice)"></v-textarea>

        <v-select
          label="Dia da Semana"
          v-model="day"
          :items="weekDays"
          item-title="text"
          item-value="value"
          style="color: var(--licorice)"
          required>
        </v-select>

        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
          ">
          <v-btn
            type="submit"
            style="background-color: var(--rosewood); color: var(--jonquil)">
            <p class="font-weight-medium">Cadastrar</p>
          </v-btn>
          <router-link to="/alunos">
            <v-btn
              style="background-color: var(--rosewood); color: var(--jonquil)">
              <p class="font-weight-medium">Voltar</p>
            </v-btn></router-link
          >
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student_id: null, // Adicionado aqui
      exercise_id: "",
      repetitions: 1,
      weight: "",
      break_time: "",
      observations: "",
      weekDays: [
        { text: "Segunda-feira", value: "segunda" },
        { text: "Terça-feira", value: "terca" },
        { text: "Quarta-feira", value: "quarta" },
        { text: "Quinta-feira", value: "quinta" },
        { text: "Sexta-feira", value: "sexta" },
        { text: "Sábado", value: "sabado" },
        { text: "Domingo", value: "domingo" },
      ],
      day: this.getCurrentDay(),
      exercises: [],
    };
  },
  mounted() {
    this.student_id = this.$route.params.id; // Capturando o student_id
    axios
      .get("http://localhost:3000/exercises")
      .then((response) => {
        this.exercises = response.data;
      })
      .catch((error) => {
        console.error("Erro ao buscar exercícios:", error);
      });
  },
  methods: {
    handleFormSubmit() {
      const payload = {
        student_id: this.student_id,
        exercise_id: this.exercise_id,
        repetitions: this.repetitions,
        weight: this.weight,
        break_time: this.break_time,
        observations: this.observations,
        day: this.day,
      };

      axios
        .post("http://localhost:3000/workouts", payload)
        .then((response) => {
          console.log("Dados enviados com sucesso:", response);
        })
        .catch((error) => {
          console.error("Erro ao enviar dados:", error);
        });
    },
    getCurrentDay() {
      const dayMapping = [
        "domingo",
        "segunda",
        "terca",
        "quarta",
        "quinta",
        "sexta",
        "sabado",
      ];
      return dayMapping[new Date().getDay()];
    },
  },
};
</script>

<style>
:root {
  --jonquil: #f9c80e;
  --lavender-blush: #f6e8ea;
  --licorice: #22181c;
  --rosewood: #5a0001;
  --battleship-gray: #7e8987;
}

.cursive-title {
  font-family: "Impact", sans-serif !important;
}
</style>
