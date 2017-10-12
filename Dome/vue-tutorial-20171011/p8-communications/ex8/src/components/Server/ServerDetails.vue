<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ renderServer() }}</p>
        <hr>
        <button @click="resetStatus">Change to Normal</button>
    </div>

</template>

<script>
    import { serverBus } from '../../main';

    export default {
        data: function() {
            return {
                server: null
            }
        },
        methods: {
            resetStatus: function() {
                if (this.server)
                    serverBus.$emit('changeStatus', this.server.id)  
            },
            renderServer: function() {
                if (!this.server)
                    return 'Server Details component are currently not updated'
                else {
                    return `Server # ${this.server.id} ${this.server.status}`
                }
            },
        },
        created() {
            serverBus.$on('showServer', (server) => {
                this.server = server
            })
        }
    }
</script>

<style>

</style>
