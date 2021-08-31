<template>
    <div class="wrapper">
        <div class="container">
            <h1 class="article-header">Crimes comitted on {{date}}. Please select the date to check other crimes:</h1>
            <input 
                type="month" 
                name="" 
                id=""
                v-model="date"
                @change="setDate"
            />
        </div>
        <div class="container">
            <h1>Data representation</h1>
            <div class="grid-box">
                <div class="grid-item" v-for="city in cities" :key="city.id">
                    <NewsBox :city="city" :date="date" />
                </div>
            </div>
        </div>
        <div class="container">
            <h1>Graphical representation</h1>
            <div class="grid-box">
                <div class="grid-item" v-for="city in cities" :key="city.id">
                    <h1>{{city.city}}</h1>
                    <Chart :city="city" :date="date" v-if="isDateSet" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewsBox from '../components/NewsBox.vue'
import Chart from '../components/Chart.vue'

export default {
    components: {
        NewsBox,
        Chart
    },
    data(){
        return {
            cities: [
                {id: 1, city: "Manchester", lat: "53.483959", lng: "-2.244644"},
                {id: 2, city: "Cardiff", lat: "51.481583", lng: "-3.179090"},
                {id: 3, city: "Liverpool", lat: "53.400002", lng: "-2.983333"}, 
                {id: 4, city: "Birmingham", lat: "52.489471", lng: "-1.898575"},
                {id: 5, city: "Newcastle", lat: "54.966667", lng: "-1.600000"},
                {id: 6, city: "London", lat: "51.509865", lng: "-0.118092"},
                {id: 7, city: "Leicester", lat: "52.633331", lng: "-1.133333"},
                {id: 8, city: "Glasgow", lat: "55.860916", lng: "-4.251433"},
                {id: 9, city: "Bristol", lat:"51.454514", lng:"-2.587910"},
                {id: 10, city: "Edinburgh", lat: "55.953251", lng: "-3.188267"}
            ],
            date: "",
            today: new Date(),
        }
    },
    methods: {
        //save picked date as date
        setDate(){
            //picked date
            var [y, m] = this.date.split("-");

            //today date
            var todayMonth = this.today.getMonth(0, 2) + 1; //in index January starts with 0
            var todayYear = this.today.getFullYear();

            if(y > todayYear){
                alert("No records in the future :(");
                this.setCurrentDate();
            }else if(y == todayYear && m > todayMonth){
                alert("No records in the future :(");
                this.setCurrentDate();
            }
        },
        setCurrentDate(){
            //year and month
            var y = this.today.getFullYear();
            var m = this.today.getMonth(0, 2) + 1;
            //check if month is October and set today's month
            if(m > 9){
                this.date = `${y}-${m}`;
            }else{
                this.date = `${y}-0${m}`;
            }
        }
    },
    created(){
        //today date
        this.setCurrentDate();
    },
    ready: function () {
        //Update date to child
        var vm = this;
        $.get(url, function(response) {
            vm.date = response;
        });
    },
    computed: {
        isDateSet() {
            if(this.date = ''){
                return false;
            }else{
                return true;
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .grid-box {
        margin: 30px auto;
        width: 100%;
        box-shadow: 0 0 10px black;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        gap: 5px;
        align-content: start;
    }

    @media only screen and (max-width: 900px){
        .grid-box{
            width: 100%;
            grid-template-columns: auto;
        }
    }
</style>