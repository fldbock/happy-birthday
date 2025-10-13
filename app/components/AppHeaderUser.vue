<script setup lang="ts">
    useHead({
        title: 'Happy Birthday',
        meta: [
            {
                name: 'description',
                content: 'Welcome to Happy Birthday, your go-to app for managing and celebrating birthdays with ease and joy!',
            },
        ],
        htmlAttrs: {
            style: 'height: 100%;'
        }
    })

    const { user, clear: clearSession } = useUserSession()

    async function handleLogout(event: Event) {
        event.preventDefault()
        await clearSession()
        navigateTo('/')   
    }
</script>
<template>
    <header class="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
            <div class="hidden lg:flex lg:flex-1 lg:justify-end flex items-center justify-center gap-x-6">
                <a href="logout" @click="handleLogout" class="text-sm/6 font-semibold text-gray-900">Logout <span aria-hidden="true">→</span></a>
            </div>
        </nav>
    </header>
</template>
