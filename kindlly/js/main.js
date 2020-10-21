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
    }
});