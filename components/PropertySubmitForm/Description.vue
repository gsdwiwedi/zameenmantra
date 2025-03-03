<template>
    <div class="p-4 bg-white shadow-xl  border rounded-lg">
      <p class="mb-3 text-sm">These fields are mandatory: Tiltle, Description</p>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
           <GenericTextInput  type="text" label="Title (mandatory)" v-model="form.title"  />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Description</label>
          <textarea v-model="form.description" class="w-full py-5 pl-3 pr-4 text-sm sm:text-base border-2 resize-none border-gray-200 rounded-md overflow-hidden focus:outline-none focus:ring-0 focus:border-primary-light" rows="4"></textarea>
        </div>
        <div>
            <h2 class="mb-3 font-semibold">Property Price</h2>
        </div>
        <div class="mb-4">
          <GenericTextInput  type="number"  label="Price (only numbers)" v-model="form.price"  />

        </div>
        <div class="space-y-4 sm:space-y-0 mb-4 sm:flex gap-3">
          <GenericTextInput  type="number" label="Before Price Label (ex: 'form')" v-model="form.price"  />

          <GenericTextInput  type="number" label="Homeowners Association Fee (monthly)" v-model="form.hoaFee"  />
        </div>
        <div class="space-y-4 sm:space-y-0 mb-4 sm:flex gap-3">
          <GenericTextInput  type="number" label="After Price Label (ex: '/month')" v-model="form.price"  />
          <GenericTextInput  type="number" label="Yearly Tax Rate" v-model="form.price"  />

        </div>
       
        <div class="mb-4">
            <p class="mb-3 font-semibold">Select Categories</p>
          <GenericListBox v-model="form.propertyStatus" :options="['Rent', 'Rent']" label="Listed In" />
            
        </div>
        <div class="mb-4">
         <p class="mb-3 font-semibold">Select Property Status</p>
          <GenericListBox v-model="form.propertyStatus" :options="['Rent', 'Rent']" label="Property Status" />
        </div>
        <button type="submit" class="bg-indigo-700 text-white px-4 py-2 rounded-md"
        @click="nextHandler"
        >Next</button>
      </form>
    </div>
  </template>
  
  <script setup>

       const form = ref({
          title: '',
          description: '',
          price: null,
          beforePriceLabel: '',
          hoaFee: null,
          propertyStatus: 'For Sale',
          yearlyTaxRate: null
        })
      const emit = defineEmits(['changeComponent'])

      function submitForm() {
        console.log('Form submitted:', this.form);
        // Handle form submission
      }
   function nextHandler() {
    emit('changeComponent', 'Media')
   }
  </script>