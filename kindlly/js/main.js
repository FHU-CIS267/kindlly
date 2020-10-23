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
                    //alert(this.myKindllys[index1+index2].description);
                    //alert(this.myInCompleteKindllys[index1])
                    index1++;
                } else {
                    this.myCompleteKindllys[index2] = this.myKindllys[index1+index2];
                    index2++;
                }
            }
            alert(this.myCompleteKindllys[0].description)
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
            let newMyKindlly = `
                <div class="kindlly">
                    <div class="header">
                        <div class="info">
                            <h4>${kindlly.description}</h4>
                            <div class="">
                                <p class="cost">
                                    <span>${this.CheckForCost(kindlly.cost)}</span><span class="faded">${this.CheckForEmptyCost(kindlly.cost)}</span>
                                </p>
                                <p class="date">Today</p>
                            </div>
                        </div>
                        <p class="points">
                            <span class="value">+${kindlly.points}</span><br />
                            <span class="label">KP</span>
                        </p>
                    </div>
                    <section class="buttons">
                        <a href="" class="complete-button button"> ◯ Complete</a>
                        <a href="" class="button delete-button">
                            <i class="el el-trash"></i>
                        </a>
                    </section>
                </div>`;
            $("#my-completed-kindllys").append(newMyKindlly);
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