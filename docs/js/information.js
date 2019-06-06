var vm = new Vue({
    el: '#bookapp',
    data: function () {
        return {
            books: '',
            // showbook: '',
            // hover: false,

        }
    },
    created() {
        axios
            .get('../asset/json/bookdata.json')
            .then(val => {
                this.books = val.data
            });
        // axios
        //     .get('../asset/json/bookshow.json')
        //     .then(val => {
        //         this.showbook = val.data
        //     });
    },
    computed: {},
    methods: {
        mouseover: function (index) {
            console.log(index);
            this.books[index].isactive = true;
        },
        mouseleave: function (index) {
            this.books[index].isactive = false;
        },
        bookID: function (index) {
            return "book" + index;
        }
        // bookfilter: function (index) {
        //     for (let i = 0; i < this.books.length; i++) {
        //         if (i == index) {
        //             this.books[i].isactive = true;
        //             this.showbook = this.books[i];
        //         } else {
        //             this.books[i].isactive = false;
        //         }
        //     }
        // },
    },
});


Vue.config.devtools = true;


//按紐向上
function scrollIt() {
    window.scrollTo({
        'behavior': 'smooth',
        'top': 0
    });
}


const btn = document.querySelector('.js-btn');
console.log(btn);
btn.addEventListener('click', function () {
    console.log("be click");
    scrollIt();
});




window.onscroll = function () {
    const top = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    if (top >= 500) {
        // console.log("top>100");
        btn.classList.add('fade')
    }
    if (top < 500) {
        // console.log("top<500");
        btn.classList.remove('fade')
    }
    console.log("window.pageYOffset= " + window.pageYOffset);
};