<template>
  <div class="px-4 sm:px-6 lg:px-8 my-16">
    <!-- LATEST LISTINGS Section -->
    <section class="max-w-6xl mx-auto">
      <h2 v-scroll class="text-3xl font-bold text-gray-900 text-center mb-4">LATEST LISTINGS</h2>
      <p v-scroll class="text-lg text-gray-600 text-center mb-8">
        Under the terms of the listless and best properties published on our website.
      </p>

      <!-- Card Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" v-if="status === 'success'">
  <!-- Loop through each property -->
  <div v-for="(item, index) in data.properties" :key="index">
    <!-- Property Card -->
    <div v-scroll="{ delay: 100 }" class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <!-- Property Image -->
      <img v-if="item.images && item.images.length > 0" :src="item.images[0]" alt="Property Image" class="w-full h-56 object-cover">
      <img v-else src="/p2.jpeg" alt="Property Image" class="w-full h-56 object-cover">

      <div class="p-6">
        <!-- Property Name -->
        <h3 class="text-xl font-bold text-gray-900 mb-3 truncate">{{ item.property_name.slice(0, 24) }}</h3>

        <!-- Address -->
        <p class="text-gray-600 text-sm mb-4">
          {{ item.address.flat_name }}, {{ item.address.city }}, {{ item.address.pincode }}, {{ item.address.country }}
        </p>

        <!-- Price -->
        <p class="text-lg font-semibold text-blue-600 mb-4">${{ item.price }}</p>

        <!-- Description -->
        <p class="text-gray-700 text-sm mb-4 line-clamp-3">{{ item.description }}</p>

        <!-- Beds and Washrooms -->
        <div class="flex space-x-6 mb-4">
          <div class="flex items-center text-gray-600">
            <span class="mr-2">🛏️</span>
            <span>{{ item.beds }} Beds</span>
          </div>
          <div class="flex items-center text-gray-600">
            <span class="mr-2">🚿</span>
            <span>{{ item.washrooms }} Washrooms</span>
          </div>
        </div>

        <!-- Amenities -->
        <div class="mb-4">
          <h4 class="text-md font-semibold text-gray-900 mb-2">Amenities:</h4>
          <ul class="flex flex-wrap gap-2">
            <li v-for="(amenity, amenityIndex) in item.amenities" :key="amenityIndex"
              class="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors duration-200">
              {{ amenity }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  </div>
</template>
<script setup>
const propertyData = ref([]);
const isLoading = ref(false)
  const { data, status, error, refresh, clear } = await useFetch('https://zameenmantra.com/public/api/properties');
</script>
