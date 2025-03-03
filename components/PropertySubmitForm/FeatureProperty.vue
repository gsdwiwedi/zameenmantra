<template>
    <div  class="max-w-72 bg-white border shadow-xl rounded-lg p-4 my-6">
      <h2 class="text-lg text-gray-900 mb-2">Featured Properties</h2>
      <div class="space-y-4">
        <div v-scroll="{delay: 100}" v-for="property in properties" :key="property.id" class="border p-2 flex gap-5 rounded-lg justify-between items-center">
          <div>

            <img src="/p1.jpeg" alt="" class="w-24">
          </div> 
          <div>

            <h3 class="text-sm text-gray-700">{{ property.type }} - {{ property.location }}</h3>
            <p class="text-sm font-bold text-gray-700 ">{{ property.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
      const  properties = [
          { id: 1, type: 'Builder Floor', location: 'Gulmohar Park', description: 'Development...', price: '¥ 11,00,00,000' },
          { id: 2, type: 'Builder Floor', location: 'Safdarjung', description: 'Development...', price: '¥ 11,00,00,000' },
          { id: 3, type: 'Builder Floor', location: 'Safdarjung', description: 'Development...', price: '¥ 15,00,00,000' }
        ]
      
  </script>