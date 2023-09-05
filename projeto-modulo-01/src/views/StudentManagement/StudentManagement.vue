<template>
  <v-container style="background-color: var(--lavender-blush)">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8" lg="8">
        <v-card
          elevation="12"
          style="background-color: var(--licorice)"
          min-width="300">
          <v-card-title
            class="d-flex align-center justify-space-between"
            style="color: var(--jonquil)">
            <div class="d-flex align-center">
              <v-icon class="mr-5" right style="color: var(--jonquil)"
                >mdi-account-group</v-icon
              >
              ALUNOS
            </div>
            <router-link to="/novo-aluno">
              <v-btn
                size="small"
                style="background-color: var(--jonquil); color: var(--rosewood)"
                prepend-icon="mdi-account-multiple-plus">
                <p class="font-weight-bold">Novo aluno</p>
              </v-btn>
            </router-link>
          </v-card-title>

          <v-card-text style="color: var(--jonquil)">
            <v-form>
              <v-text-field
                label="Buscar aluno"
                prepend-icon="mdi-magnify"
                v-model="searchQuery"
                style="color: var(--jonquil)"></v-text-field>
              <v-btn
                @click="searchStudents"
                style="background-color: var(--jonquil); color: var(--rosewood)"
                ><p class="font-weight-bold">Buscar</p>
              </v-btn>
            </v-form>
            <v-divider
              class="my-5"
              style="background-color: var(--jonquil)"></v-divider>
            <v-table class="elevation-1 my-5">
              <thead class="bg-grey-lighten-2">
                <tr>
                  <th
                    style="width: 70%; color: var(--battleship-gray)"
                    class="text-left">
                    <v-icon>mdi-account-school</v-icon>
                    <span
                      class="text-left font-weight-black text-overline text-h6"
                      >Nome</span
                    >
                  </th>
                  <th
                    style="width: 15%; color: var(--battleship-gray)"
                    class="text-left font-weight-black text-overline text-h6">
                    Treinos
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="student in filteredStudents" :key="student.id">
                  <td style="color: var(--licorice)">
                    <span class="text-subtitle-1">{{ student.name }}</span>
                  </td>
                  <td class="d-flex align-center">
                    <router-link to="/cadastro-treinos">
                      <v-btn
                        icon="mdi-text-box-plus-outline"
                        density="compact"
                        style="
                          background-color: var(--rosewood);
                          color: var(--jonquil);
                        "></v-btn>
                    </router-link>
                    <router-link to="/visualizacao-treinos">
                      <v-btn
                        class="ml-3"
                        density="compact"
                        icon="mdi-eye-outline"
                        style="
                          background-color: var(--rosewood);
                          color: var(--jonquil);
                        "></v-btn>
                    </router-link>
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

<style>
.new-button {
  background-color: var(--jonquil);
  color: var(--rosewood);
}

:root {
  --jonquil: #f9c80e;
  --lavender-blush: #f6e8ea;
  --licorice: #22181c;
  --rosewood: #5a0001;
  --battleship-gray: #7e8987;
}
</style>
