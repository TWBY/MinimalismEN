//resultA/resultB/resultC
let everytype = {
    A: '',
    B: '',
    C: '',
}

//everystep =  [{},{},{}]
let everytypes = [{
        type: "A",
        value: ''
    },
    {
        type: "B",
        value: ''
    },
    {
        type: "C",
        value: ''
    },
]



var vm = new Vue({
    el: '#app',
    data: function () {
        return {
            questions: '',
            result: everytypes, //A,B,C
            type: '', //測驗結果 A
            now: 0,
            pageNow: 0,
            resultInfos: '',
            number: 0

        }
    },
    created() {
        axios.get('../asset/json/quest.json').then(val => {
            var vm = this;
            vm.questions = val.data;
        }).
        catch(function (error) {
            console.log("error=" + error);
        });
        axios.get('../asset/json/resultInfo.json').then(val => {
            var vm = this;
            vm.resultInfos = val.data;
        }).
        catch(function (error) {
            console.log("error=" + error);
        });

    },
    computed: {

    },
    methods: {
        settlement: function () {
            var ans = true;
            //檢查每一個選項是不是都有選擇到了，並且設定回原本
            this.questions.forEach(function (val) {
                if (val.selected == null) {
                    ans = false;
                }
            });

            //計算三個屬性的大小
            if (ans) {
                var totalA = 0;
                var totalB = 0;
                var totalC = 0;
                this.questions.forEach(function (val) {
                    if (val.selected === "A") {
                        totalA++;
                    } else if (val.selected === "B") {
                        totalB++;
                    } else {
                        totalC++;
                    }
                });
                this.result[0].value = totalA;
                this.result[1].value = totalB;
                this.result[2].value = totalC;
            } else {
                alert('你尚未完成所有問題');
            }



            // this.SwitchType(this.type.substring(6));

            // this.steps[0].value = this.result[0].value;
            // this.steps[1].value = this.result[1].value;
            // this.steps[2].value = this.result[2].value;

            // this.steps.sort(function (a, b) {
            //     return b.value - a.value;
            // })

            this.pageNow++;
            this.showStar();
        },
        //找到最大值
        // mostbig: function () {
        //     let arr = Object.values(this.result);
        //     let max = Math.max(...arr);

        //     return this.type = getKeyByValue(this.result, max);
        // },

        //計算每一個type的時候
        // sum: function (type) {
        //     // let total = 0;
        //     // this.questions.forEach(function (val) {
        //     //     if (val.selected === type.substring(6))
        //     //         total++;
        //     // });
        //     this.result[1] = 10;
        //     console.log(this.result[1]);
        // },

        //跟據測驗結果，把資料庫的內容設定只有最高值的書本跟步驟
        // SwitchType: function (type) {
        //     var everytypes = ["A", "B", "C"];
        //     for (let i = 0; i < everytypes.length; i++) {
        //         if (everytypes[i] === type) {
        //             // this.books = bookdata[i];
        //             this.steps = step[i];
        //         }
        //     }
        // },
        start: function () {
            this.pageNow++;
        },
        last: function () {
            this.now = this.now - 3;
        },
        next: function () {
            if (this.questions[this.now].selected !== null) {
                this.now = this.now + 3;
            } else {
                alert('你尚未作答唷')
            }
            console.log(this.now);
        },

        reset: function () {
            this.questions.forEach(function (val) {
                val.selected = null;
            });
        },

        showStar: function (index) {
            let value = this.result[index].value;
            return value;
        },

        //動態產生ID
        fromId: function (topic, option) {
            return topic + "_" + option;
        },
        quesId: function (ques) {
            return "ques" + ques;
        },
        resultId: function (result) {
            return "result" + result;
        },

        //動態產生 class
        labelId: function (label) {
            return "label" + label;
        },



        showItem: function (index) {
            if (index >= this.now && index < (this.now + 3)) {
                return true;
            } else {
                return false;
            }
        },
        change: function (index) {
            let Bar = document.querySelector('.bar');
            let inner = document.querySelector('.inner');
            let BarHeight = Bar.clientHeight;
            let innerHeight = inner.clientHeight;

            this.number = 0;
            for (let i = 0; i < this.questions.length; i++) {
                if (this.questions[i].selected != null) {
                    this.number++;
                }
            }

            // let transRange = (BarHeight - (this.number + 1) * innerHeight) + 'px';
            let transRange = BarHeight - (BarHeight / this.questions.length) * this.number + 'px';
            let transHeight = (BarHeight / this.questions.length) * this.number + 'px';
            inner.style.opacity = "1";
            inner.style.transform = 'translateY(' + transRange + ')';
            inner.style.height = transHeight;
        },
        mouseover: function (index) {
            const people = document.querySelectorAll('.People');
            const stars = document.querySelectorAll('.stars');
            const title = document.querySelectorAll('.resultTitle');
            console.log(title);
            for (let i = 0; i < people.length; i++) {
                if (i != index) {
                    people[i].classList.add('open');
                    stars[i].classList.add('open');
                    title[i].classList.add('open');
                }
            }
        },
        mouseleave: function (index) {
            const people = document.querySelectorAll('.People');
            const stars = document.querySelectorAll('.stars');
            const title = document.querySelectorAll('.resultTitle');
            for (let i = 0; i < people.length; i++) {
                if (i != index) {
                    people[i].classList.remove('open');
                    stars[i].classList.remove('open');
                    title[i].classList.remove('open');
                }
            }
        }
    },
});



Vue.config.devtools = true;