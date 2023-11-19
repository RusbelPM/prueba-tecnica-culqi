import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// Define y exporta un almacén de contador utilizando Pinia
export const useCounterStore = defineStore('counter', () => {
  // Define un estado reactivo para el contador
  const count = ref(0);

  // Calcula el doble del contador utilizando una propiedad computada
  const doubleCount = computed(() => count.value * 2);

  // Define una función para incrementar el contador
  function increment() {
    count.value++;
  }
  return { count, doubleCount, increment };
});
