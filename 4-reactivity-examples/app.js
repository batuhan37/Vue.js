const app = Vue.createApp({
    data(){
        return{
          itemList:["elma","armut","kiraz","çilek"],  
            search:"",
        //   filteredList:[],
        };
    },

    methods:{
        searchList(){
            // this.filteredList = this.itemList.filter((i)=> i.includes(this.search));
        },
    },
// computed sayfada herhangi bir değişiklik olduğunda filteredList metodu çalışmaya başlar yani search kutusuna herhangi bir harf yazdığımızda filtreleme başlamış olur.
    computed:{
        filteredList(){

            return this.itemList.filter((i) => i.includes(this.search));

        },
    },
}).mount("#app");