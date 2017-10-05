new Vue({
        el: '#exercise',
        data: {
            value: 0,
            result: 'not there yet',
        },
        methods: {
            addValue: function(value) {
                this.value += value
                this.result = this.value == 37 ? 'done' : 'not there yet'
            },
            saveValue: function(e) {
                console.log(e)
                this.value = e.target.value
            }
        },
        watch: {
            result: function() {
                let v = this;
                setTimeout(function() {
                    v.value = 0
                    v.result = 'not yet'
                }, 5000)
            }
        }
    });