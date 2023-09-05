<template>
  <v-container fluid :style="{ backgroundColor: 'var(--lavender-blush)' }">
    <v-row>
      <v-col cols="12">
        <v-card :color="'var(--licorice)'">
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
        <v-card :color="'var(--licorice)'" class="mx-auto flex-grow-1">
          <v-card-title class="headline" :style="{ color: 'var(--jonquil)' }">
            HOJE
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
                        :id="exercise.id"
                        v-model="exercise.checked"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content class="mb-4">
                      <v-list-item-title>{{ exercise.name }}</v-list-item-title>
                    </v-list-item-content>
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
        <v-card :color="'var(--licorice)'">
          <v-card-actions class="d-flex justify-space-between">
            <v-col
              v-for="day in daysOfWeek"
              :key="day"
              cols="1"
              class="d-flex justify-center">
              <v-btn
                @click="selectedDay = day"
                :color="'var(--rosewood)'"
                text
                :style="{ color: 'var(--jonquil)', width: '100%' }">
                {{ day }}
              </v-btn>
            </v-col>
          </v-card-actions>
          <v-card-text v-if="selectedDay" :style="{ color: 'var(--licorice)' }">
            <h2>{{ selectedDay }}</h2>
            <v-list>
              <v-list-item
                v-for="exercise in weekExercises[selectedDay]"
                :key="exercise.id">
                <v-list-item-content>
                  <v-list-item-title
                    :style="{ color: 'var(--battleship-gray)' }">
                    {{ exercise.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userName: localStorage.getItem("userName"),
      todayExercises: [
        { id: 1, name: "Push-up", checked: false },
        { id: 2, name: "Sit-up", checked: false },
        { id: 3, name: "Sit-up", checked: false },
        { id: 4, name: "Sit-up", checked: false },
        { id: 5, name: "Sit-up", checked: false },
      ],
      weekExercises: {
        Segunda: [{ id: 1, name: "Push-up" }],
        Terça: [
          { id: 2, name: "Sit-up" },
          { id: 3, name: "Sit-up" },
          { id: 4, name: "Sit-up" },
        ],
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
  methods: {
    toggleCheckbox(exercise) {
      exercise.checked = !exercise.checked;
    },
  },
};
</script>

<style scoped>
.clickable-card {
  cursor: pointer;
}
</style>
