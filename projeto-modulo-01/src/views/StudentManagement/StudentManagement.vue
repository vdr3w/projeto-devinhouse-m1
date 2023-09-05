<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8" lg="8">
        <v-card elevation="12">
          <v-card-title>
            <v-icon right>mdi-account-group</v-icon>
            ALUNOS
            <router-link to="/novo-aluno">
              <v-btn left class="new-button">NOVO</v-btn></router-link
            >
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Buscar aluno"
                prepend-icon="mdi-magnify"
                v-model="searchQuery"></v-text-field>
              <v-btn color="primary" @click="searchStudents">Buscar</v-btn>
            </v-form>
            <v-divider class="my-5"></v-divider>
            <v-table class="elevation-1 my-5">
              <thead class="bg-grey-lighten-2">
                <tr>
                  <th
                    style="width: 70%"
                    class="text-left font-weight-black text-overline text-h6">
                    Alunos
                  </th>
                  <th
                    style="width: 15%"
                    class="text-left font-weight-black text-overline text-h6">
                    Treinos
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="student in filteredStudents" :key="student.id">
                  <td>
                    <span>{{ student.name }}</span>
                  </td>
                  <td class="d-flex align-center">
                    <router-link to="/cadastro-treinos">
                      <v-btn
                        color="cyan-darken-4"
                        icon="mdi-text-box-plus-outline"
                        density="compact"></v-btn
                    ></router-link>
                    <router-link to="/visualizacao-treinos"
                      ><v-btn
                        color="cyan-darken-4"
                        class="ml-3"
                        density="compact"
                        icon="mdi-eye-outline"></v-btn
                    ></router-link>
                  </td>
                </tr>
              </tbody>
            </v-table>
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
      students: [],
      searchQuery: "",
    };
  },
  computed: {
    filteredStudents() {
      return this.students.filter((student) =>
        student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    searchStudents() {},
  },
  mounted() {
    axios
      .get("http://localhost:3000/students")
      .then((response) => {
        this.students = response.data.students;
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  },
};
</script>

<style scoped>
.new-button {
  background-color: blue;
  color: white;
}
</style>
