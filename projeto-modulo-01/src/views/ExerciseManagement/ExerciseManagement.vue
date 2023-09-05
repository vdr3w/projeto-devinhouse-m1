<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          elevation="12"
          class="ma-10 mx-auto pa-4 pa-md-6"
          min-width="320px"
          max-width="80%">
          <v-card-title>
            <v-icon right>mdi-dumbbell</v-icon>
            Exercícios
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleAddExercise">
              <v-text-field
                label="Nome do exercício"
                v-model="newExercise"
                :rules="[rules.required]"></v-text-field>
              <v-btn type="submit" color="primary">Cadastrar Exercicio</v-btn>
            </v-form>
            <v-divider class="my-5"></v-divider>
            <v-table density="compact" class="elevation-1 my-5">
              <thead class="bg-grey-lighten-2">
                <tr>
                  <th class="text-left font-weight-black text-overline text-h6">
                    Exercícios
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="exercise in exercises" :key="exercise.id">
                  <td>
                    <span>{{ exercise.description }}</span>
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
    <v-card>
      <v-card-title class="headline">{{ dialogTitle }}</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialogVisible = false">
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
      dialogVisible: false, // Nova variável para controlar a visibilidade do diálogo
      dialogTitle: "", // Nova variável para o título do diálogo
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
