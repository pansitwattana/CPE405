new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alert: function() {
                alert(111)
            },
            saveValue: function(e) {
                this.value = e.target.value
            }
        }
    });