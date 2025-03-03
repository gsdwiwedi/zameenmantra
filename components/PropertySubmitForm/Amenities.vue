<template>
    <div class="p-4 bg-white shadow-xl  border rounded-lg">
      <h2 class="mb-3 text-xl font-semibold">Amenities and Features</h2>
      <div class="space-y-6">
        <div>
          <h3 class="mb-3 font-semibold">Amenities</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <GenericTextInput class="" label-style="flex-none mr-4"  w-size="w-none"  type="checkbox"  label="AC" v-model="amenities.ac"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Beds" v-model="amenities.beds"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="False Calling Lighting" v-model="amenities.falseCallingLighting"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Family Lounge" v-model="amenities.familyLounge"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Lift" v-model="amenities.lift"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Light" v-model="amenities.light"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Natural Lights" v-model="amenities.naturalLights"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Park Facing" v-model="amenities.parkFacing"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Power Back Up" v-model="amenities.powerBackUp"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Private Garden/Terrace" v-model="amenities.privateGardenTerrace"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Spacious Interiors" v-model="amenities.spaciousInteriors"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="TV" v-model="amenities.tv"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Visiting Parking" v-model="amenities.visitingParking"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Wardrobe" v-model="amenities.wardrobe"  />
          </div>
        </div>
  
        <div>
          <h3 class="mb-3 font-semibold">Location Advantage</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Close To Airport/Railway Station" v-model="locationAdvantages.closeToAirportRailwayStation"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Close To Hospitals" v-model="locationAdvantages.closeToHospitals"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Close To Metro Station" v-model="locationAdvantages.closeToMetroStation"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Mall" v-model="locationAdvantages.mall"  />
          </div>
        </div>
  
        <div>
          <h3 class="mb-3 font-semibold">Other Features</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Corner Property" v-model="otherFeatures.cornerProperty"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="In a Gated Society" v-model="otherFeatures.inGatedSociety"  />
          </div>
        </div>
  
        <div>
          <h3 class="mb-3 font-semibold">Property Facing</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="East" v-model="propertyFacing.east"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="North" v-model="propertyFacing.north"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="South" v-model="propertyFacing.south"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="South East" v-model="propertyFacing.southEast"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="North West" v-model="propertyFacing.northWest"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="South West" v-model="propertyFacing.southWest"  />
          </div>
        </div>
  
        <div>
          <h3 class="mb-3 font-semibold">Type Of Flooring</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Ceramic" v-model="typeOfFlooring.ceramic"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Granite" v-model="typeOfFlooring.granite"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Mosaic" v-model="typeOfFlooring.mosaic"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Stone" v-model="typeOfFlooring.stone"  />
            <GenericTextInput class=""  label-style="flex-none mr-4" w-size="w-none" type="checkbox"  label="Marble" v-model="typeOfFlooring.marble"  />
          </div>
        </div>
  
        <div>
          <h3 class="mb-3 font-semibold">Other Features</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GenericTextInput class="" label-style="flex-none mr-4"  w-size="w-none" type="checkbox"  label="Park Facing" v-model="otherFeatures.parkFacing"  />
          </div>
        </div>
      </div>
  
      <div class="flex justify-start gap-4 mt-6">
      <button class="bg-indigo-700 text-white px-4 py-2 rounded-md" @click="previousHandler">Prev Step</button>
      <button class="bg-indigo-700 text-white px-4 py-2 rounded-md">Submit</button>
    </div>
    </div>
  </template>
  
  <script setup>

       const amenities = ref( {
          ac: false,
          beds: false,
          falseCallingLighting: false,
          familyLounge: false,
          lift: false,
          light: false,
          naturalLights: false,
          parkFacing: false,
          powerBackUp: false,
          privateGardenTerrace: false,
          spaciousInteriors: false,
          tv: false,
          visitingParking: false,
          wardrobe: false
        })
       const locationAdvantages = ref ({
          closeToAirportRailwayStation: false,
          closeToHospitals: false,
          closeToMetroStation: false,
          mall: false
        })
       const otherFeatures = ref({
          cornerProperty: false,
          inGatedSociety: false,
          parkFacing: false
        })
       const propertyFacing = ref({
          east: false,
          north: false,
          south: false,
          southEast: false,
          northWest: false,
          southWest: false
        })
      const typeOfFlooring =ref({
          ceramic: false,
          granite: false,
          mosaic: false,
          stone: false,
          marble: false
        })
        const emit = defineEmits(['changeComponent'])
        function nextHandler() {
    emit('changeComponent', 'Amenities')
   }
   function previousHandler() {
    emit('changeComponent', 'Details')
   }
  </script>
