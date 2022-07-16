<script setup>
import Navbar from './Navbar.vue';

</script>

<template>

      
<div class=" bg-white dark:bg-gray-900 pb-6 sm:pb-8 lg:pb-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <Navbar/>
    <section id="home" class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
      <!-- content - start -->
      <div class="xl:w-5/12 flex flex-col sm:text-center lg:text-left lg:py-12 xl:py-16">
        <p class="text-indigo-500 md:text-lg xl:text-4xl font-semibold mb-4 md:mb-6">👋 Hi, my name is</p>

        <h1 class="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-fuchsia-500">
        MARC CAYAM
        </h1>
        <p class="lg:w-4/5 text-gray-500 dark:text-white xl:text-xl leading-relaxed mb-8 md:mb-12">I'm a young <span class="bg-mesh-2 rounded-md lg:px-3 px-2 font-bold">Web Developer</span> with a keen interest for UI/UX and Graphic Design with 
        a passion for building web apps</p>

        <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
          <a href="#projects" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">See Projects</a>
        </div>
      </div>

      <div class="xl:w-auto lg:h-[40em] bg-mesh-1 p-3 overflow-hidden shadow-lg rounded-lg">
        <img src="../assets/profileopt.png" loading="lazy" alt="Marc Cayam Profile" class="w-full h-full object-cover object-center" />
      </div>
    </section>
  </div>
</div>
</template>