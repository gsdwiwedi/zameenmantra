<template>
  <div class="relative w-full max-w-4xl mx-auto overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
    <!-- Carousel Heading -->
    <h2 v-scroll class="text-3xl font-bold text-center mb-4">Client Testimonials</h2>
    <p v-scroll class="text-lg text-gray-600 text-center mb-8">WHAT PEOPLE SAY ABOUT US.</p>

    <!-- Carousel Content -->
    <div v-scroll class="flex transition-transform duration-300 ease-in-out" :style="`transform: translateX(-${currentIndex * 100}%);`">
      <div v-for="(testimonial, index) in testimonials" :key="index" class="min-w-full p-4">
        <div class="bg-white shadow-lg rounded-lg p-6">
          <p class="text-center flex justify-center"><UserCircleIcon class="h-16 text-black" /></p>
          <p class="text-gray-600">{{ testimonial.text }}</p>
          <p class="text-lg font-semibold mt-4">{{ testimonial.author }}</p>
        </div>
      </div>
    </div>

    <!-- Previous and Next Buttons -->
    <button @click="prev" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-white p-3 rounded-full">
      &lt;
    </button>
    <button @click="next" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-white p-3 rounded-full">
      &gt;
    </button>

    <!-- Dots Navigation -->
    <div class="flex justify-center mt-6 space-x-2">
      <button
        v-for="(dot, dotIndex) in testimonials.length"
        :key="dotIndex"
        @click="goToSet(dotIndex)"
        :class="`w-3 h-3 rounded-full ${dotIndex === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {UserCircleIcon} from "@heroicons/vue/24/outline"
const currentIndex = ref(0);
const testimonials = ref([
  {
    text: "The best part about working with Antrionil J was that he was always more focused on answering my questions, giving me good advice, and finding honest solutions that met my needs than he was on doing a deal. I would recommend.",
    author: "Antrionil J",
  },
  {
    text: "Another testimonial text goes here. This is a sample testimonial for demonstration purposes.",
    author: "John Doe",
  },
  {
    text: "Yet another testimonial text goes here. This is a sample testimonial for demonstration purposes.",
    author: "Jane Smith",
  },
  {
    text: "Sample testimonial text for the second set. This is a sample testimonial for demonstration purposes.",
    author: "Alice Johnson",
  },
  {
    text: "Sample testimonial text for the second set. This is a sample testimonial for demonstration purposes.",
    author: "Bob Brown",
  },
  {
    text: "Sample testimonial text for the second set. This is a sample testimonial for demonstration purposes.",
    author: "Charlie Davis",
  },
]);

function prev() {
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
}
function next() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
}
function goToSet(index: number) {
  currentIndex.value = index;
}
</script>

<style scoped>
/* Add necessary styles for better responsiveness and visuals */
button {
  transition: background-color 0.3s;
}
button:hover {
  background-color: #4b5563; /* Darker gray on hover */
}
</style>
