<script setup lang="ts">
    definePageMeta({
        middleware: "auth",
        layout: "dashboard"
    })
</script>

<template>
  <div class="bg-white">
    <p>This is the action page!</p>
  </div>
</template>