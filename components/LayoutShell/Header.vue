<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="h-full flex sticky top-0 z-50 bg-white shadow-sm">
      <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="sidebarOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </TransitionChild>
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div class="flex-shrink-0 flex items-center px-4">
                  <img class="h-8 w-auto" src="public/logo.png" alt="Workflow" />
                </div>
                <nav aria-label="Sidebar" class="mt-5">
                  <div class="px-2 space-y-1">
                    <NuxtLink v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                      <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-4 h-6 w-6']" aria-hidden="true" />
                      {{ item.name }}
                    </NuxtLink>
                  </div>
                </nav>
              </div>
              <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="#" class="flex-shrink-0 group block">
                  <div class="flex items-center">
                    <div>
                      <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />
                    </div>
                    <div class="ml-3">
                      <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">
                        Whitney Francis
                      </p>
                      <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </TransitionChild>
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </Dialog>
      </TransitionRoot>
  
      <!-- Static sidebar for desktop -->
      
    <!-- Static sidebar for desktop -->
    <div
      :class="[
        'container mx-8 justify-between items-center lg:flex hidden transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-white py-4' : 'bg-transparent py-2'
      ]"
      class=""
    >
      <div class=""><NuxtLink to="/"><img class="w-20" src="public/logo.png" alt="Workflow" /></NuxtLink></div>
      <ul class="flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
        <li><NuxtLink to="/" class="text-gray-700 hover:text-blue-500">Home</NuxtLink></li>
        <li><NuxtLink to="/properties" class="text-gray-700 hover:text-blue-500">Properties</NuxtLink></li>
        <li><NuxtLink to="/about" class="text-gray-700 hover:text-blue-500">About</NuxtLink></li>
        <li><NuxtLink to="/career" class="text-gray-700 hover:text-blue-500">Career</NuxtLink></li>
        <li><NuxtLink to="/contact-us" class="text-gray-700 hover:text-blue-500">Contact Us</NuxtLink></li>
        <li><NuxtLink to="/aml-listing" class="text-gray-700 hover:text-blue-500"><UserCircleIcon class="h-6" /></NuxtLink></li>
        <li><NuxtLink to="/property-submit-form" class="text-white bg-indigo-700 hover:bg-indigo-800 py-2 px-3 rounded-sm">Add Listing</NuxtLink></li>
      </ul>
    </div>

      <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div class="lg:hidden">
          <div class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
            <div>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
            </div>
            <div>
              <button type="button" class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900" @click="sidebarOpen = true">
                <span class="sr-only">Open sidebar</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </template>
  
  <script setup>
  import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
  import {
    CalendarIcon,
    HomeIcon,
    MapIcon,
    Bars3Icon,
    MagnifyingGlassCircleIcon,
    UserGroupIcon,
    XMarkIcon,
    UserCircleIcon
  } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'Properties', href: '#', icon: CalendarIcon, current: false },
    { name: 'About', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Career', href: '#', icon: MagnifyingGlassCircleIcon, current: false },
    { name: 'Contact Us', href: '#', icon: MagnifyingGlassCircleIcon, current: false },
    { name: 'Add Listing', href: '/property-submit-form', icon: MapIcon, current: false },
  ]
  
  
      const sidebarOpen = ref(false)
      const isScrolled = ref(false)

// Handle scroll effect for sticky header
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Add and remove scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
  </script>