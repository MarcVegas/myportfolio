<script setup>
import Hero from './components/Hero.vue';
import Projects from './components/Projects.vue';
import TechStack from './components/TechStack.vue';
import AboutMe from './components/AboutMe.vue';
import FooterEnd from './components/FooterEnd.vue';

import { useHead } from '@vueuse/head'

useHead({
  meta: [
    {
      property: 'og:title',
      content: 'Marc Cayam | Web Developer'
    },
    {
      property: 'og:site_name',
      content: 'Marc Cayam'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://myportfolio-marcvegas.vercel.app/'
    },
    {
      property: 'og:image',
      content: 'https://myportfolio-marcvegas.vercel.app/assets/profileopt.6877ecb4.png'
    },
    {
      property: 'og:description',
      content: 'I am a Web Developer and Graphic Designer dedicated to building cool web apps'
    },
    /* {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:site',
      content: '@marcopolotwo'
    },
    {
      name: 'twitter:title',
      content: 'Marc Cayam | Web Developer'
    },
    {
      name: 'twitter:description',
      content: 'I am a Web Developer and Graphic Designer dedicated to building cool web apps'
    },
    {
      name: 'twitter:image',
      content: 'https://myportfolio-marcvegas.vercel.app/assets/profileopt.6877ecb4.png'
    }, */
  ]
})
</script>

<template>
  <Hero/>
  <Projects/>
  <TechStack/>
  <AboutMe/>
  <FooterEnd/>
</template>
