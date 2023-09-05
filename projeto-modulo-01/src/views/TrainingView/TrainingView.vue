<template>
  <v-container fluid :style="{ backgroundColor: 'var(--lavender-blush)' }">
    <v-row>
      <v-col>
        <v-card :color="'var(--licorice)'">
          <v-card-title class="headline" :style="{ color: 'var(--jonquil)' }">
            TREINOS - {{ userName }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card max-width="700px" :color="'var(--licorice)'" class="mx-auto">
          <v-card-title class="headline" :style="{ color: 'var(--jonquil)' }">
            HOJE
          </v-card-title>
          <v-card-text :style="{ color: 'var(--battleship-gray)' }">
            <v-row>
              <v-col
                v-for="exercise in todayExercises"
                :key="exercise.id"
                cols="12">
                <v-card class="mb-2">
                  <v-card-text class="d-flex align-center">
                    <v-list-item-action>
                      <v-checkbox :id="exercise.id"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
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
      <v-col>
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
        { id: 1, name: "Push-up" },
        { id: 2, name: "Sit-up" },
      ],
      weekExercises: {
        Segunda: [{ id: 1, name: "Push-up" }],
        Terça: [{ id: 2, name: "Sit-up" }],
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
};
</script>
