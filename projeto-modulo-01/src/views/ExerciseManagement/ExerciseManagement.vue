<template>
  <v-container style="background-color: var(--lavender-blush)">
    <v-row>
      <v-col>
        <v-card
          elevation="12"
          style="background-color: var(--licorice); color: var(--jonquil)"
          class="ma-10 mx-auto pa-4 pa-md-6"
          min-width="320px"
          max-width="80%">
          <v-card-title class="d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <v-icon right style="color: var(--jonquil)">mdi-dumbbell</v-icon>
              Exercícios
            </div>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleAddExercise">
              <v-text-field
                label="Nome do exercício"
                v-model="newExercise"
                :rules="[rules.required]"
                style="color: var(--jonquil)"></v-text-field>
              <v-btn
                type="submit"
                style="
                  background-color: var(--jonquil);
                  color: var(--rosewood);
                ">
                Cadastrar Exercicio
              </v-btn>
            </v-form>
            <v-divider
              class="my-5"
              style="background-color: var(--jonquil)"></v-divider>
            <v-table density="compact" class="elevation-1 my-5">
              <thead class="bg-grey-lighten-2">
                <tr>
                  <th
                    class="text-left font-weight-black text-overline text-h6"
                    style="color: var(--battleship-gray)">
                    Exercícios
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="exercise in exercises" :key="exercise.id">
                  <td>
                    <span style="color: var(--licorice)">{{
                      exercise.description
                    }}</span>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog v-model="dialogVisible" max-width="290">
    <v-card style="background-color: var(--licorice); color: var(--jonquil)">
      <v-card-title class="headline">{{ dialogTitle }}</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          style="color: var(--jonquil)"
          text
          @click="dialogVisible = false">
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newExercise: "",
      exercises: [],
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: true,
          value: "id",
        },
        { text: "Descrição", value: "description" },
      ],
      rules: {
        required: (value) => !!value || "O nome do exercício é obrigatório.",
      },
      dialogVisible: false,
      dialogTitle: "",
    };
  },
  mounted() {
    this.fetchExercises();
  },
  methods: {
    async fetchExercises() {
      try {
        const response = await axios.get("http://localhost:3000/exercises");
        this.exercises = response.data;
      } catch (error) {
        console.error("Erro ao buscar exercícios:", error);
      }
    },
    async handleAddExercise() {
      if (!this.newExercise) return;

      try {
        const response = await axios.post("http://localhost:3000/exercises", {
          description: this.newExercise,
        });
        this.exercises.push(response.data);
        this.newExercise = "";
        this.dialogTitle = "Exercício cadastrado!";
        this.dialogVisible = true;
        setTimeout(() => {
          this.dialogVisible = false;
        }, 3000);
        this.fetchExercises();
      } catch (error) {
        console.error("Erro ao adicionar exercício:", error);
        this.dialogTitle = "Erro ao adicionar exercício!";
        this.dialogVisible = true;
      }
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
</style>
