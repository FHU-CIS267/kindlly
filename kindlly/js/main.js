var app = new Vue({
    el: '#app',
    data: {
        user: {
            username: "kenancasey",
            avatar: "img/avatars/male-square.png"
        },
        "DiscoverKindllys": "",
        "myKindllys": "",
        "myInCompleteKindllys": [],
        "myCompleteKindllys": []
    },
    computed:
    {
        message: function(){
            return `Hello, ${this.user.username}`;
        }
    },
    methods: {
        GetKindllys: async function (){
            let response = await fetch("kindllys.json");
            let json = await response.json();
            console.log(json);
        
            this.DiscoverKindllys = json.discoverKindllys;
            this.myKindllys = json.myKindllys;
            let index1 = 0;
            let index2 = 0;
            while (index1 + index2 != this.myKindllys.length) {
                if (this.myKindllys[index1+index2].isCompleted == false) {
                    this.myInCompleteKindllys[index1] = this.myKindllys[index1+index2];
                    index1++;
                } else {
                    this.myCompleteKindllys[index2] = this.myKindllys[index1+index2];
                    index2++;
                }
            }
        },
        CheckForCost: function (cost) {
            let costring = "";
            for (let index = 0; index < cost; index++) {
                costring += "$";
            };
            if (cost == 0) {
                costring = "FREE";
            }
            return costring;
        },
        CheckForEmptyCost: function (cost) {
            let costring = "";
            for (let index = 3; index > cost; index--) {
                costring += "$";
            };
            if (cost == 0) {
                costring = "";
            }
            return costring;
        },
        CheckForLikedOrDisliked: function (liked) {
            if (liked == true) {
                return "el el-heart";
            } else {
                return "el el-heart-empty";
            }
        },
        EditLiked: function (liked) {
            if (liked == true) {
                return false;
            } else {
                return true;
            }
        },
        addToMyKindllys: function (kindlly) {
            this.myInCompleteKindllys.push(kindlly);
        },
        SetToRemove: function () {
            $(".Remove-Button").on("click", function(){
                this.parentElement.parentElement.parentElement.remove();
            });
        },
        GetDate: function (dateGot) {
            var today = new Date();
            var DateGot = new Date(dateGot);
            let now = today.getDate();
            if (parseInt(today.getDate()) > parseInt(DateGot.getDate())) {
                let Days = (parseInt(today.getDate()) - parseInt(DateGot.getDate()));
                return Days + " days ago";
            } else if (parseInt(today.getHours()) > parseInt(DateGot.getHours())){
                let hours = (parseInt(today.getHours()) - parseInt(DateGot.getHours()));
                return hours + " hrs ago";
            } else {
                return "Now";
            }
        },
    },
    mounted() {
        this.GetKindllys();
    }
});