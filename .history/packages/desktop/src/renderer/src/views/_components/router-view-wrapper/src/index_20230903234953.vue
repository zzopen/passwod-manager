<script lang="ts" setup>
defineOptions({ name: 'RouterViewWrapper', inheritAttrs: false })
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
