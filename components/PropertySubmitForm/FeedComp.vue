<template>
    <div>
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-600">
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="relative z-0 shadow border  flex divide-x divide-gray-500" aria-label="Tabs">
          <button v-for="(tab, tabIdx) in tabs" :key="tab.name" 
          :class="[tab.current ? 'text-gray-700 hover:text-gray-700 bg-white' : 'text-gray-400 hover:text-gray-700 bg-[#1f1f1f] ', 'group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10']" 
           @click="handleClick(tab.name)"
          >
            <span>{{ tab.name }}</span>
            <span aria-hidden="true" :class="[tab.current ? 'bg-indigo-500' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']" />
        </button>
        </nav>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    currentTab: {
      type: String,
      default: 'Description'
    }
  })
  const tabs = reactive([
    { name: 'Description',  current: true },
    { name: 'Media', current: false },
    { name: 'Location',  current: false },
    { name: 'Details',  current: false },
    { name: 'Amenities',  current: false },
  ])
//   const tabs = { Media, Description, Amenities, Details, Location };
const emit = defineEmits(["changeComponentByIcon"]);
function handleClick(id: string) {
    console.log(id, "compo");
    tabs.forEach(tab => {
        tab.name === id ? tab.current = true : tab.current = false
    })
  emit("changeComponentByIcon", id);
}
watch(()=> props.currentTab, (curTab) => {
if(curTab) {
  tabs.forEach(tab => {
        tab.name === curTab ? tab.current = true : tab.current = false
    })
}
})
  </script>