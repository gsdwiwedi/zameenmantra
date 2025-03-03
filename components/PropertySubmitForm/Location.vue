<template>
  <div class="p-4 bg-white shadow-xl  border rounded-lg">
    <h2 class="mb-3 font-semibold">Listing Location</h2>
    <div class="space-y-6">
      <div>
        <GenericTextInput type="text" label="*Address" v-model="address" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <GenericListBox v-model="countyState" :options="['Video', 'Youtube']" label="County / State" />
        </div>
        <div>
          <GenericListBox v-model="city" :options="['Video', 'Youtube']" label="City" />


        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <GenericListBox v-model="neighborhood" :options="['Video', 'Youtube']" label="Neighborhood" />


        </div>
        <div>
          <GenericTextInput type="text" label="Zip" v-model="zip" />
        </div>
      </div>

      <div>
        <GenericListBox v-model="country" :options="['Video', 'Youtube']" label="Country" />
      </div>

      <div>
        <label class="block text-gray-700">Place Pin With Property Address</label>
        <div class="">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56092.830290365535!2d77.41281875!3d28.515607499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737269809343!5m2!1sen!2sin"
            width="600" height="200" style="border:0;" allowfullscreen="true" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
      </div>


    </div>
    <div class="my-4">
      <div class="flex gap-4">
        <GenericTextInput type="text" label="Latitude (for Google Maps)" v-model="virtualTour" />
        <GenericTextInput type="text" label="Longitude (for Google Maps)" v-model="virtualTour" />

      </div>
      <div class="my-4">
        <div class="flex gap-4">
          <GenericTextInput  class=""  w-size="w-none" type="checkbox" label="Enable Google Street View" v-model="virtualTour" />
          <GenericTextInput type="text" label="Google Street View - Camera Angle (value from 0 to 360)"
            v-model="virtualTour" />

        </div>
      </div>
      <div class="flex justify-start gap-4 mt-6">
      <button class="bg-indigo-700 text-white px-4 py-2 rounded-md" @click="previousHandler">Prev Step</button>
      <button class="bg-indigo-700 text-white px-4 py-2 rounded-md" @click="nextHandler">Next Step</button>
    </div>
    </div>
  </div>
</template>

<script setup>

     const address = ref('')
     const countyState = ref('None')
     const city = ref('None')
     const neighborhood = ref('None')
     const zip = ref('')
     const country = ref('India')
     const cameraAngle = ref(0)
    
const emit = defineEmits(['changeComponent'])

function nextHandler() {
    emit('changeComponent', 'Details')
   }
   function previousHandler() {
    emit('changeComponent', 'Media')
   }
</script>

<style scoped>
iframe {
    width: 100%;
    height: 250px;
    filter: invert(100%);
}
</style>