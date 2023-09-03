<script setup lang="ts">
import { reactive, computed } from 'vue'

const versions = reactive({ ...window.electron.process.versions })

const getClass = computed(() => {
  return ['a']
})
</script>

<template>
  <ul :class="getClass">
    <li class="electron-version">Electron v{{ versions.electron }}</li>
    <li class="chrome-version">Chromium v{{ versions.chrome }}</li>
    <li class="node-version">Node v{{ versions.node }}</li>
    <li class="v8-version">V8 v{{ versions.v8 }}</li>
  </ul>
</template>
