export default defineNuxtRouteMiddleware(() => {
    // check if user is authenticated
    const { loggedIn } = useUserSession();

    // redirect to login if not authenticated
    if (!loggedIn.value) {
        return navigateTo('/login');
    }
});