var app = new Vue({
    el: '#app',
    data: {
        user: {
            username: "kenancasey",
            avatar: "img/avatars/male-square.png"
        }
    },
    computed:
    {
        message: function(){
            return `Hello, ${this.user.username}`;
        }
    },

    methods: {
        loadData: async function () {
            let response = await fetch("kindllys.json");
            let json = await response.json();
            console.log(json);
        }
    },

    created: function () {
        this.loadData();
    }
});