var app = new Vue({
    el: '#app',
    data: {
        discoverKindllys: {},
        myKindllys: {},
        user: {}
    },
    methods: {
        loadData: async function () {
            let response = await fetch("kindllys.json");
            let json = await response.json();
            this.discoverKindllys = json.discoverKindllys;
            this.myKindllys = json.myKindllys;
            this.user = json.currentUser;
        },
        addKindlly: function (kindlly, kindllys) {
            kindllys.splice(kindllys.indexOf(kindlly), 1);

            this.myKindllys.splice(this.myKindllys.length, 0, kindlly);
            console.log(this.myKindllys);
        }
    },
    created: function() { 
        this.loadData();
    }
});