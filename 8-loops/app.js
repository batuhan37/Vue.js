//vue instance
// vuejs parametlerini kullanmamı sağlayacak

const app = Vue.createApp({
    // html den çekerek kullanacağım değişkenleri bir data içerisiine yazıyoruz.

    data() {
        return {

            // text içerisine yazdığımız value todovalue ya eşit olur

            todoValue: "",

            // my list içerisine gelen todovalue ları bir dizi de saklarız
            myTodos: ["Todo1", "Todo2", "Todo3"],
        };

    },

    methods: {
        // bana bir event bilgisi gelecek
        updateValue(event) {

            // event parametresinin içerisindeki değeri yazdır
            // console.log(event.target.value)
            // bu değeri konsol yerine buradaki todoValue içerisine yazıyoruz.
            this.todoValue = event.target.value;
        },

        changeTitle() {
            // bu vue instensında ki title ye erişmek istiyorum. this ile.
            this.myTodos.push(this.todoValue)
            this.todoValue = ""
        },

        deleteTodo(index) {
            // bu vue instensında ki title ye erişmek istiyorum. this ile.

            this.myTodos.splice(index, 1)
        }
    }

    // id si app olan bölgeyi kontrol et 
}).mount("#app")

