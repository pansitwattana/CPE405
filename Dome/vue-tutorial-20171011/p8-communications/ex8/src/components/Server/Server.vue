<template>
    <li
            class="list-group-item"
            style="cursor: pointer"
            @click="serverSelected">
        Server #{{server.id}} {{server.status}}
    </li>
</template>

<script>
    import { serverBus } from '../../main';

    export default {
        props: ['serverProp'],
        data: function() {
            return {
                server: this.serverProp
            }
        },
        methods: {
            serverSelected() {
                serverBus.$emit('showServer', this.server)
            }
        }
    }
</script>

<style>

</style>
