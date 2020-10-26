var app = new Vue({
    el: '#app',
    data: {
        discoverKindllys: [],
        myKindllys: [],
        user: {}
    },
    methods: {
        getStuff: async function() {
            let response = await fetch("kindllys.json");
            let json = await response.json();
            this.discoverKindllys = json.discoverKindllys;
            this.myKindllys = json.myKindllys;
            this.user = json.currentUser;
            console.log(json);
        },

        addKindllytoStuff: function(kindlly, kindllys) {
            kindllys.splice(kindllys.indexOf(kindlly), 1);
            let selectedKindlly = kindlly;
            selectedKindlly.isCompleted = false;
            selectedKindlly.dateAdded = new Date();
            this.myKindllys.push(selectedKindlly);
        }
    },

    created: function() {
        this.getStuff();
    }
});