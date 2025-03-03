<template>
    <div class="p-4 bg-white shadow-xl  border rounded-lg">
        <h2 class="mb-3 font-semibold">Listing Details</h2>
        <div class="space-y-6">
            <div>
                <GenericTextInput type="number" label="Size in ft² (only numbers)" v-model="size" />

            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <GenericTextInput type="number" label="Bedrooms (only numbers)" v-model="bedrooms" />

                </div>
                <div>
                    <GenericTextInput type="number" label="Bathrooms (only numbers)" v-model="bathrooms" />

                </div>
            </div>

            <div>
                <label class="block text-gray-700">Area Details (text)</label>
                <textarea v-model="areaDetails" class="w-full py-5 pl-3 pr-4 text-sm sm:text-base border-2 resize-none border-gray-200 rounded-md overflow-hidden focus:outline-none focus:ring-0 focus:border-primary-light"
                    rows="3"></textarea>
            </div>

            <div>
                <label class="block text-gray-700">Rooms Details (text)</label>
                <textarea v-model="roomsDetails" class="w-full py-5 pl-3 pr-4 text-sm sm:text-base border-2 resize-none border-gray-200 rounded-md overflow-hidden focus:outline-none focus:ring-0 focus:border-primary-light"
                    rows="3"></textarea>
            </div>

            <div>
          <GenericListBox v-model="furnishing" :options="['Not Available','Furnished', 'Unfurnished']" label="Furnishing" />
            </div>

            <div>
          <GenericListBox v-model="ageOfProperty" :options="['Not Available','0-5 years', '5-10 years', '10+ years']" label="Age Of Property" />
            </div>

            <div>
          <GenericListBox v-model="Ownership" :options="['Not Available','Freehold', 'Leasehold']" label="Ownership" />

               
            </div>

            <div>
          <GenericListBox v-model="priceNegotiable" :options="['Yes', 'No']" label="Price Negotiable" />
                
              
            </div>

            <div>
                <GenericTextInput type="number" label="Property Floor (numeric" v-model="propertyFloor" />

            </div>
        </div>

        <div class="flex justify-start gap-4 mt-6">
      <button class="bg-indigo-700 text-white px-4 py-2 rounded-md" @click="previousHandler">Prev Step</button>
      <button class="bg-indigo-700 text-white px-4 py-2 rounded-md" @click="nextHandler">Next Step</button>
    </div>
    </div>
</template>

<script setup>

const size = ref(null)
const bedrooms = ref(null)
const bathrooms = ref(null)
const areaDetails = ref('')
const roomsDetails = ref('')
const furnishing = ref('Not Available')
const ageOfProperty = ref('Not Available')
const ownership = ref('Not Available')
const priceNegotiable = ref('Not Available')
const propertyFloor = ref(null)
const emit = defineEmits(['changeComponent'])

function nextHandler() {
    emit('changeComponent', 'Amenities')
   }
   function previousHandler() {
    emit('changeComponent', 'Location')
   }
</script>