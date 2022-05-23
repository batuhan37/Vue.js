//vue instance


// vuejs parametlerini kullanmamı sağlayacak
const app = Vue.createApp({
    // html den çekerek kullanacağım değişkenleri bir data içerisiine yazıyoruz.
    data() {
        return {
            // string interpolation vuejs içerisinde tanımlanan yapıyı html tarafında kullanmamızı sağlar sadece text content olan yerlerde çalışır.

            title: "Learning Vue",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium eaque officiis inventore molestias saepe minus beatae aspernatur harum necessitatibus.",

            github: {
                title: "Batuhan Koruyan'ın projelerine buradan ulaşabilirsiniz.",
                target: "_blank",
                url: "https://github.com/batuhan37",
                alt: "github-batuhan-koruyan",
            },

            coords:{
                x:0,
                y:0,
            }




        };
    },
    methods: {
        changeTitle(pTitle) {
            // bu vue instensında ki title ye erişmek istiyorum. this ile.
            this.title = pTitle;
        },

        updateCoords(message, event) {
            this.coords = {
                x: event.x,
                y: event.y,
            }
        }
    },
}).mount("#app");

