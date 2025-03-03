<template>
     <div class=" bg-[#1a1007] py-12 px-4 sm:px-6 lg:px-8">
    <!-- Who We Are Section -->
    <section class="text-center mb-12">
      <h2 class="text-4xl font-bold text-white mb-4" v-scroll>Who We Are</h2>
      <p v-scroll class="text-lg text-white max-w-2xl mx-auto">
        We are a dedicated team helping you find the perfect property for your needs.
      </p>
    </section>

    <!-- Our Services Section -->
    <section class="mb-6">
      <h2 v-scroll class="text-3xl font-bold text-white text-center mb-8">OUR SERVICES</h2>
      <div class="flex gap-6 justify-center">
        <!-- Purchase Property Card -->
        <div v-scroll class="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Purchase Property</h3>
          <p class="text-gray-600 mb-4">
            The best time to buy a home is always five years ago.
          </p>
          <p class="text-gray-600">
            Don't let anyone rent a space in your head, unless they are a good tenant.
          </p>
        </div>
        <!-- Add more service cards here if needed -->
          <div v-scroll class="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Purchase Property</h3>
          <p class="text-gray-600 mb-4">
            The best time to buy a home is always five years ago.
          </p>
          <p class="text-gray-600">
            Don't let anyone rent a space in your head, unless they are a good tenant.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">

</script>