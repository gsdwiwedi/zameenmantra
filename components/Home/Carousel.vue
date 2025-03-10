<template>
  <div class="p-8">
    <div class="mb-6 text-center">
      <h1 v-scroll class="text-3xl font-bold">Our Best Deals</h1>
      <p v-scroll>Check out some of the latest and best properties published on our website.</p>
    </div>

    <!-- Carousel Container -->
    <div class="relative w-full max-w-6xl mx-auto overflow-hidden">
      <!-- Carousel Content -->
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="`transform: translateX(-${currentSlide * (100 / cardsPerRow)}%);`"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="!p-4"
          :style="`flex: 0 0 ${100 / cardsPerRow}%;`"
          v-scroll
        >
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <!-- Card Image -->
            <img
              :src="card.image"
              :alt="card.title"
              class="w-full h-48 object-cover"
            />
            <!-- Card Content -->
            <div class="p-4">
              <h3 class="text-lg font-bold">{{ card.title }}</h3>
              <p class="text-gray-600">{{ card.description }}</p>
              <p class="text-lg font-semibold text-green-600">{{ card.price }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Dots Navigation -->
      <div class="flex justify-center mt-6 space-x-2">
        <button
          v-for="(dot, dotIndex) in totalDots"
          :key="dotIndex"
          @click="goToSlide(dotIndex)"
          :class="`w-3 h-3 rounded-full ${dotIndex === currentSlide ? 'bg-gray-800' : 'bg-gray-300'}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const currentSlide = ref(0);
const cardsPerRow = ref(3); // Make it reactive
const cards = [
  {
    title: "Independent House/Villa",
    description: "Builder Floor Greater Kailash-2",
    price: "$12.00.00,000",
    image: "/p1.jpeg",
  },
  {
    title: "Builder Floor Greater Kailash-1",
    description: "Sale in Greater ...",
    price: "$16.00.00,000",
    image: "/p1.jpeg",
  },
  {
    title: "Newly designed Second Floor",
    description: "Brand new interior...",
    price: "$32.00.00,000",
    image: "/p1.jpeg",
  },
  {
    title: "Luxurious Villa",
    description: "Prime location, modern amenities",
    price: "$40.00.00,000",
    image: "/p1.jpeg",
  },
  {
    title: "Spacious Apartment",
    description: "City center, 3 BHK",
    price: "$25.00.00,000",
    image: "/p1.jpeg",
  },
  {
    title: "Eco-Friendly Home",
    description: "Green building, solar powered",
    price: "$30.00.00,000",
    image: "/p1.jpeg",
  },
];

const totalDots = computed(() => Math.max(cards.length - cardsPerRow.value + 1, 1));

function goToSlide(index) {
  if (index >= 0 && index < totalDots.value) {
    currentSlide.value = index;
  }
}

// Function to update the number of cards per row based on screen width
const updateCardsPerRow = () => {
  if (window.innerWidth <= 640) {
    cardsPerRow.value = 1;
  } else if (window.innerWidth <= 1024) {
    cardsPerRow.value = 2;
  } else {
    cardsPerRow.value = 3;
  }
};

onMounted(() => {
  updateCardsPerRow();
  window.addEventListener("resize", updateCardsPerRow);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateCardsPerRow);
});
</script>


<style scoped>
/* Adjust the carousel for responsiveness */
@media (max-width: 1024px) {
  .p-4 {
    flex: 0 0 50%; /* Two cards per row for medium screens */
  }
}

@media (max-width: 640px) {
  .p-4 {
    flex: 0 0 100%; /* One card per row for small screens */
  }
}
</style>
