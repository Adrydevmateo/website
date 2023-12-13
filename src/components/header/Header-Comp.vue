<script setup lang="ts">
import { useMainStore } from '@/stores/main.store'
import ButtonComp from '../button/Button-Comp.vue'
import ButtonNavigationComp from '../button/navigation/Button-Navigation-Comp.vue'
import headerTranslations from './Header.translations'
import { computed, ref } from 'vue'
import IconMoon from '../../assets/icons/moon.svg'
import IconSun from '../../assets/icons/sun.svg'

const mainStore = useMainStore()

const HandleChangeColorTheme = (): string =>
  mainStore.ChangeColorTheme(mainStore.IsCurrentColorThemeBlack ? 'white-theme' : 'dark-theme')

const { home, projects } = headerTranslations.navigation
const navCollection = [home, projects]

const selectLanguage = ref(false)

const isSelectLanguageActive = computed(() => selectLanguage.value)
const CloseSelectLanguage = () => (selectLanguage.value = !selectLanguage.value)
</script>

<template>
  <header id="header" class="sticky">
    <div class="header-color-theme-box">
      <ButtonComp class="header-color-theme--btn" @click="HandleChangeColorTheme">
        <template #default>
          <img
            :src="mainStore.CurrentColorTheme == 'dark-theme' ? IconSun : IconMoon"
            :alt="`Flag icon for ${
              headerTranslations.languageSwitcher[mainStore.CurrentLanguage].name
            }`"
          />
        </template>
      </ButtonComp>
    </div>
    <nav class="header-navigation">
      <ButtonNavigationComp :to="link.to" v-for="(link, index) in navCollection" :key="index">
        <template #default> {{ link.name[mainStore.CurrentLanguage] }} </template>
      </ButtonNavigationComp>
    </nav>
    <div class="header-language-switch-box">
      <ButtonComp class="header-language-switch--btn" @click="CloseSelectLanguage">
        <template #default>
          <span>{{ headerTranslations.languageSwitcher[mainStore.CurrentLanguage].name }}</span>
          <img
            :src="headerTranslations.languageSwitcher[mainStore.CurrentLanguage].icon"
            :alt="`Flag icon for ${
              headerTranslations.languageSwitcher[mainStore.CurrentLanguage].name
            }`"
          />
        </template>
      </ButtonComp>

      <div class="header-language-switch--select" v-show="isSelectLanguageActive">
        <ButtonComp
          v-for="(lang, key) in headerTranslations.languageSwitcher"
          :key="key"
          class="header-language-switch--btn"
          @click="
            () => {
              mainStore.ChangeLanguage(key)
              CloseSelectLanguage()
            }
          "
        >
          <template #default>
            <span>{{ lang.name }}</span>
            <img :src="lang.icon" :alt="`Flag icon for ${lang.name}`" />
          </template>
        </ButtonComp>
      </div>
    </div>
  </header>
</template>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  padding: 0.2em;
  align-items: center;
  color: var(--color-text);
  background: var(--background-color);
  z-index: 2;
}

#header.sticky {
  position: fixed;
  top: 0;
  height: 3em;
  width: 100%;
}

.header-color-theme--btn {
  background-color: transparent;
}

.header-color-theme--btn > img {
  height: 2em;
}

.header-navigation {
  margin-left: 2em;
}

/* LANGUAGES */
.header-language-switch-box {
  position: relative;
}

.header-language-switch--select {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  right: 0;
  background-color: var(--background-color);
}

.header-language-switch--btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 0.5em;
  gap: 0.5em;
  margin: 0.3em 1em 0.3em 0;
  min-width: 7em;
  background-color: transparent;
  color: var(--color-text);
  padding-bottom: 0.2rem;
  border-bottom: 0.2em solid var(--color-heading);
}

.header-language-switch--btn > img {
  height: 1.4em;
  border-top-right-radius: 0.2em;
  border-bottom-right-radius: 0.2em;
}
</style>
