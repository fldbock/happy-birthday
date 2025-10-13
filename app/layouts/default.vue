<template class="h-full">
  <component :is="headerComponent" />
  <body class="h-full position-relative mt-16">
    <slot />
  </body>
</template>

<script setup lang="ts">
  import AppHeaderGuest from '~/components/AppHeaderGuest.vue'
  import AppHeaderLoggedIn from '~/components/AppHeaderUser.vue'
  const { loggedIn } = useUserSession()

  const headerComponent = computed(() =>
    loggedIn.value ? AppHeaderLoggedIn : AppHeaderGuest
  )
</script>
