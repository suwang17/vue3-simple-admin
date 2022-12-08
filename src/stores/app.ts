import { ref, computed } from "vue";
import { defineStore } from "pinia";

interface AppState {
    collapse?: boolean;
  }
export const useAppStore = defineStore({
    id: 'app-app',
    state: (): AppState => ({
      collapse: false,
    }),
    getters: {
     
    },
    actions: {
     
    }
});