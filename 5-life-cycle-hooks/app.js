
const app = Vue.createApp({
    data() {

        return {

            title: "Test Başlığı",
            itemList: []
        };

    },
    beforeCreate() {
        console.log("beforeCreate Çalıştı.")
    },
    // bu işlemleri created yada mounted da yapabiliriz.
    created() {
        console.log("created Çalıştı.")
        setTimeout(() => {
            this.itemList = [1, 2, 3, 4, 5, 66, 77, 88];
        }, 2000);

        setTimeout(() => {
            this.title ="Maraba";
        }, 3000);
    },
    // Eğer bi elemente ulaşmak istiyorsak mounted kullanmalıyız.
    beforeMount() {
        console.log("beforeMount Çalıştı.")
    },
    mounted() {
        console.log("mounted Çalıştı.")
    },
    //  sayfada her hangi bir değişiklik olunca çalışır
    beforeUpdate() {
        console.log("beforeUpdate Çalıştı.")
    },
    //  sayfada her hangi bir değişiklik olunca çalışır

    update() {
        console.log("update Çalıştı.")
    },
    beforeUnmount() {
        console.log("beforeUnmount Çalıştı.")
    },
    //bazı durumlarda sayfadan ayrılsak bile uygulama çalısmaya devam eder bu durumdan kurtulmak için unmounted kullanılır.
    unmounted() {
        console.log("unmounted Çalıştı.")
    }

});

app.mount("#app");

setTimeout(() => {
   app.unmounted();
}, 5000);