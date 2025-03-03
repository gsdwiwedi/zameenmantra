<template>
    <div v-scroll class="max-w-72  p-4 bg-white shadow-md border rounded-lg my-6">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <GenericTextInput  type="text" label="Username" v-model="username"  />
         
        </div>
        <div class="mb-4">
          <GenericTextInput  type="text" label="Password" v-model="password"  />
          
        </div>
        <button type="submit" class="bg-blue-500 w-full text-white px-4 py-2 rounded-md">Login</button>
      </form>
      <div class="mt-4">
        <p class="text-sm">Need an account? <a href="#" class="text-blue-500">Register here!</a></p>
        <p class="text-sm"><a href="#" class="text-blue-500">Forgot Password?</a></p>
      </div>
    </div>
  </template>
  
  <script setup>
  
       const username = ref('')
       const password = ref('')
    
     function login() {
        console.log('Login with:', this.username, this.password);
        // Handle login logic
      }
   
  </script>