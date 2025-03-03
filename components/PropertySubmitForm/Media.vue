<template>
  <div class="p-4 bg-white shadow-xl  border rounded-lg">
    <p class="mb-3 text-sm">These fields are mandatory: Title, Description
    </p>
    <h2 class="font-bold my-3">Listing Media</h2>
    <div class="mb-6">
      <label class="block text-gray-700 mb-2">Drag and Drop Images or</label>
      <div class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
        <p class="text-gray-600">Select Media</p>
        <input type="file" multiple @change="handleFileUpload" class="hidden" id="fileInput">
        <label for="fileInput" class="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Upload Images</label>
        <p class="text-sm text-gray-500 mt-2">
          * At least 1 image is required for a valid submission. Minimum size is 500x500px. You can upload maximum 12 images.<br>
          ** Double click on the image to select featured.<br>
          *** Change images order with Drag & Drop.<br>
          **** PDF files upload supported as well.<br>
          ***** Images might take longer to be processed.
        </p>
      </div>
    </div>

    <div class="mb-6">
      <h3 class="mb-3 font-semibold">Video Option</h3>
      <div class="space-y-4">
        <div>
          <GenericListBox v-model="videoSource" :options="['Video', 'Youtube']" label="Video from" />
        </div>
        <div>
        <GenericTextInput  type="text"  label="Embed Video ID:" v-model="videoId"  />
        </div>
      </div>
    </div>

    <div class="mb-6">
      <h3 class="mb-3 font-semibold">Virtual Tour</h3>
      <div>
        <GenericTextInput  type="text"  label="Virtual Tour:" v-model="virtualTour"  />
        
      </div>
    </div>

    <div class="flex justify-start gap-4 mt-6">
      <button class="bg-indigo-700 text-white px-4 py-2 rounded-md" @click="previousHandler">Prev Step</button>
      <button class="bg-indigo-700 text-white px-4 py-2 rounded-md" @click="nextHandler">Next Step</button>
    </div>
  </div>
</template>

<script setup>

    const  videoSource = ref('Vimeo')
    const  videoId = ref('')
    const  virtualTour= ref('')
    const  files = ref([])
    const emit = defineEmits(['changeComponent'])
   
   function handleFileUpload(event) {
      this.files = Array.from(event.target.files);
      // Handle file upload logic
    }
    function nextHandler() {
    emit('changeComponent', 'Location')
   }
   function previousHandler() {
    emit('changeComponent', 'Description')
   }
</script>