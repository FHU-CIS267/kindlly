var app = new Vue({
    el: '#app',
    data: {
        discoverKindllys: [],
        myKindllys: [],
        user: []
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
            let currentKindlly = kindlly;
            currentKindlly.isCompleted = false;
            currentKindlly.dateAdded = new Date();
            this.myKindllys.push(currentKindlly);
        },
        removeKindlly: function (myKindlly) {
            this.myKindllys.splice(this.myKindllys.indexOf(myKindlly), 1);
        }
    },
    created: function() { 
        this.loadData();
    }
});
