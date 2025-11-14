<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[][] = [[{
  label: 'Birthdays',
  icon: 'i-lucide-cake',
  active: true
}, {
  label: 'Birthday Wishes',
  icon: 'i-lucide-hand-heart',
}, {
  label: 'Friends',
  icon: 'i-lucide-users'
}, {
  label: 'Integrations',
  icon: 'i-lucide-blocks',
  }]]
</script>

<template>
  <UDashboardSidebar collapsible resizable :ui="{ footer: 'border-t border-default' }">

    <template #default="{ collapsed }">

      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[0]"
        orientation="vertical"
      />

      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[1]"
        orientation="vertical"
        class="mt-auto"
      />
    </template>

  </UDashboardSidebar>
</template>


