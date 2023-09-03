<script setup lang="ts">
defineOptions({ name: 'MPageContent', inheritAttrs: false })
</script>

<template>
  <RouterView>
    <template #default="{ Component }">
      <!-- <keep-alive v-if="false">
						<component :is="Component" :key="route.fullPath" />
					</keep-alive> -->

      <!-- {{ route }} -->
      <component :is="Component" />
    </template>
  </RouterView>
</template>
