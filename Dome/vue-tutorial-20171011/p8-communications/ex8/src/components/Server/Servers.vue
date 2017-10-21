<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <ul class="list-group">
            <!-- passing each server data to Server component -->
            <app-server
                v-for="server in servers"
                :key="server.id"
                :serverProp="server">
                </app-server>
            </ul>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue';
import { serverBus } from '../../main'

export default {
    data: function() {
        return {
            servers: [
                { id: 1, status: 'Normal'},
                { id: 2, status: 'Critical'},
                { id: 3, status: 'Unknown'},
                { id: 4, status: 'Normal'},
                { id: 5, status: 'Normal'},
                { id: 6, status: 'Critical'},
                { id: 7, status: 'Normal'}
            ]
        };
    },
    components: {
        appServer: Server
    },
    created() {
        serverBus.$on('changeStatus', (id) => {
            const newServers = this.servers.map((server) => {
                const newServer = server
                if (server.id === id) {
                    newServer.status = server.status === 'Normal' ? 'Critical' : 'Normal'
                }
                return newServer
            })
            this.servers = newServers    
        })
    }
}
</script>

<style>

</style>
