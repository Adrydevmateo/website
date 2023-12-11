<script setup lang="ts">
import { useMainStore } from '@/stores/main.store'
import { useHead } from '@unhead/vue'
import homeTranslations from './Home.translations'

const mainStore = useMainStore()

useHead({
  title: () => homeTranslations.title[mainStore.CurrentLanguage]
})
</script>

<template>
  <main>
    <section id="home-presentation">
      <h1 data-theme="dark" class="home-container">AdryDev</h1>
      <p>
        I am a Web Developer with significant proficiency in JS technologies like Vue.js, React,
        Node.js, and MongoDB. As a versatile coder deeply committed to excellence, I excel in
        various personal and professional software development projects.
      </p>
    </section>

    <section id="home-about" class="home-container">
      <h2>About</h2>
      <ol>
        <li>
          I'm a dedicated Web Developer based in Santo Domingo Este, Dominican Republic, I bring a
          wealth of experience and commitment to excellence. As a key member of the ATDEV team, I
          contribute to full-stack development, lead projects, and collaborate on diverse
          initiatives, showcasing proficiency in technologies such as Vue.JS, 11ty.JS, Deno, and
          Docker.
        </li>

        <li>
          My personal skills encompass planning, organization, problem-solving, flexibility, and a
          results-oriented mindset.
        </li>

        <li>
          My portfolio includes successful endeavors like prototyping and enhancing the official
          company website, developing a full-stack Blog, and ongoing contributions to an official
          Resume Builder. My versatility is evident in personal projects spanning Movie Trailers,
          PDF Generator, and various web and mobile applications, demonstrating expertise in Vue.js,
          11ty, Node.js, MongoDB, and more.
        </li>

        <li>
          Beyond coding, my diverse interests range from singing to reading manga and engaging in
          parkour and tricking. I'm equally at home with a guitar as with distro hopping in the tech
          world. Fluent in both Spanish and English, I'm not just a skilled developer but a
          well-rounded individual dedicated to continuous learning and delivering exceptional
          results.
        </li>
      </ol>
    </section>

    <section id="home-projects" class="home-container">
      <h2>Projects</h2>
    </section>
  </main>
</template>

<style scoped></style>
