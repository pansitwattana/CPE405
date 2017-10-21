<template>
    <div>
        <h1>The User Page</h1>
        <p>Load ID: {{ id }}</p>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id || 0
            }
        },
        methods: {
            navigateToHome() {
                this.$router.push('/');     // add navigation
            }
        },
        watch: {
            // a function passing (new-route, old-route)
            '$route'(to, from) {            
                this.id = to.params.id;
            }
        }
    }
</script>