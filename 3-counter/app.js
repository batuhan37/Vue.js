const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
        }
    },
    methods: {
        // buttonun click eventine counter-- veye counter ++ yazarak aşağıdaki fonksiyonlara gerek kalmadan kullanabiliriiz.

        // inc(){
        //     this.counter++;
        // },
        // dec(){
        //     this.counter--;
        // // }



        // getCounterResult(){
        //     console.log("Counter 1 Çalıştı")
        //     return this.counter > 5 ? "Büyük" : "Küçük";
        // },
        // getCounter2Result(){
        //     console.log("Counter 2 Çalıştı")
        //     return this.counter2 > 5 ? "Büyük" : "Küçük";
        // },

    },

    // bir fonksiyon gibi çalışan değişkenlerdir.methods içerisinde tanımladıgımızda Virtual Dom dan dolayı her counter 1 i çalıştırdığımda sayfa yenilenir ve counter2 de çalışır.
    computed: {
        getCounterResult() {
            console.log("Counter 1 Çalıştı")
            return this.counter > 5 ? "Büyük" : "Küçük";
        },

        // computed eğer counter da bir değişiklik varsa tetiklenir . yoksa tetiklenmez ve çalışmaz.
        getCounter2Result() {
            console.log("Counter 2 Çalıştı")
            return this.counter2 > 5 ? "Büyük" : "Küçük";
        },
    },

    // data ya da computed da bulunan bilgiyi direkt izlememizi sağlar eski ve yeni değerlerini döndürür.
    watch:{
        counter(newValue, oldValue){
            console.log(oldValue, "=>", newValue);
        },
        getCounterResult(newValue, oldValue){
            console.log(oldValue, "=>", newValue);
        },
        counter2(newValue, oldValue){
            console.log(oldValue, "=>", newValue);
        },
        getCounter2Result(newValue, oldValue){
            console.log(oldValue, "=>", newValue);
        },
    },


}).mount("#app");
