<script setup lang="ts">
import { useMainStore } from '@/stores/main.store'
import ButtonComp from '../button/Button-Comp.vue'
import ButtonNavigationComp from '../button/navigation/Button-Navigation-Comp.vue'
import headerTranslations from './Header.translations'

const mainStore = useMainStore()

const HandleChangeColorTheme = (): string =>
  mainStore.ChangeColorTheme(mainStore.IsCurrentColorThemeBlack ? 'white-theme' : 'dark-theme')

const { home, projects } = headerTranslations.navigation
const navCollection = [home, projects]
</script>

<template>
  <header id="header">
    <nav class="header-navigation">
      <ButtonNavigationComp :to="link.to" v-for="(link, index) in navCollection" :key="index">
        <template #default> {{ link.name[mainStore.CurrentLanguage] }} </template>
      </ButtonNavigationComp>
    </nav>
    <div class="header-color-theme-box">
      <ButtonComp @click="HandleChangeColorTheme">
        <template #default> {{ mainStore.CurrentColorTheme }} </template>
      </ButtonComp>
    </div>
    <div class="header-language-switch-box">
      <ButtonComp
        class="btn-lang"
        v-for="(lang, key) in headerTranslations.languageSwitcher"
        :key="key"
        @click="mainStore.ChangeLanguage(key)"
      >
        <template #default>
          <span>{{ lang.name }}</span>
          <img :src="lang.icon" :alt="`Flag icon for ${lang.name}`" />
        </template>
      </ButtonComp>
    </div>
  </header>
</template>

<style scoped>
#header {
}

.header-navigation {
}

/* LANGUAGES */
.header-language-switch-box {
}

.btn-lang {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 0.5em;
  gap: 0.5em;
  margin: 0.3em;
  min-width: 7em;
}

.btn-lang > img {
  height: 1.6em;
  border-top-right-radius: 0.2em;
  border-bottom-right-radius: 0.2em;
}
</style>
