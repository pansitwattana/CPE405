<template>
    <div class="component">
        <h1>{{ name }}</h1>
        <p>I'm {{ age }} years old</p>
        <button @click="changeName">Change my name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    v-bind:uName="name"
                    v-bind:uAge="age"
                    @nameWasReset="name = $event"
                    v-bind:resetFn="resetName">
                    </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    v-bind:uName="name"
                    v-bind:uAge="age"
                    v-bind:editName="editName"
                    ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Pansit Wattanaprasobsuk',
                age: 22,
            }
        },
        methods: {
            changeName: function() {
                this.name = 'jjinwinw'
            },
            resetName: function() {
                this.name = 'name reseted'
            },
            editName: function(event) {
                this.name = event.target.value
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
