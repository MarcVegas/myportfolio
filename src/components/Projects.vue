<script setup>
import Card from "./Card.vue";

const projects = [
    {tag: 'Event Management', title: 'Event Deck', url: 'https://source.unsplash.com/1600x900/?3d-render'},
    {tag: 'E-Commerce', title: 'Calvin Klein', url: 'https://source.unsplash.com/1600x900/?wallpapers'}
]
</script>

<template>
<div id="projects" class="bg-white dark:bg-mesh-2 py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <h2 class="text-gray-800 dark:text-white text-2xl lg:text-4xl font-bold text-center mb-4 md:mb-6">🚀 Notable Projects 🚀</h2>

      <p class="max-w-screen-md text-gray-500 dark:text-white md:text-lg text-center mx-auto">Have a look at some of the apps that I have built over the years</p>
    </div>
    <!-- text - end -->

    <div class="grid sm:grid-cols-2 gap-6" >
      <Card :tag="project.tag" :title="project.title" :url="project.url" v-for="project in projects"/>
    </div>
  </div>
</div>
</template>