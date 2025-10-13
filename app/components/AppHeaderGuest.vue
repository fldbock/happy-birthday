<script setup>
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
</script>
<template>
    <header class="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
            <div class="hidden lg:flex lg:flex-1 lg:justify-end flex items-center justify-center gap-x-6">
                <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</a>
                <a href="login" class="text-sm/6 font-semibold text-gray-900">Login <span aria-hidden="true">→</span></a>
            </div>
        </nav>
    </header>
</template>
