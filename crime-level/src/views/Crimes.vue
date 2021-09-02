<template>
    <!-- wrapper -->
    <div class="wrapper">
        <!-- class element -->
        <div class="container">
            <h1 class="header-default">Crimes comitted on {{date}}. Please select the date to check other crimes:</h1>
            <!-- input with data bound and setdate method -->
            <input 
                type="month" 
                name="" 
                id=""
                v-model="date"
                @change="setDate"
            />
        </div>
        <!-- class elements -->
        <div class="container">
            <h1 class="header-default">Data representation</h1>
            <!-- grad box for information -->
            <div class="grid-box">
                <!-- grid items (display row data) -->
                <div class="grid-item" v-for="city in cities" :key="city.id">
                    <NewsBox :city="city" :date="date" />
                </div>
            </div>
        </div>
        <!-- class elements -->
        <div class="container">
            <h1 class="header-default">Graphical representation</h1>
            <!-- Grid box for chats -->
            <div class="grid-box">
                <!-- Grid items -->
                <div class="grid-item" v-for="city in cities" :key="city.id">
                    <h1 class="grid-title">{{city.city}} on date {{date}}</h1>
                    <!-- charts -->
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
    components: { //components for crimes page
        NewsBox,
        Chart
    },
    data(){
        return {
            //cities array 
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
            date: "", //date
            today: new Date(), //set today date
        }
    },
    methods: {
        //save picked date as date
        setDate(){
            //picked date
            var [y, m] = this.date.split("-");

            //today date
            var todayMonth = this.today.getMonth(0, 2); //in index January starts with 0
            var todayYear = this.today.getFullYear();

            //check if selected date is greated than today's date
            if(y > todayYear){
                alert("No records in the future :(");
                this.setCurrentDate();
            }else if(y == todayYear && m > todayMonth){
                alert("No records in the future :(");
                this.setCurrentDate();
            }
        },
        //set date as today's date
        setCurrentDate(){
            //year and month
            var y = this.today.getFullYear();
            var m = this.today.getMonth(0, 2);
            //check if month is October and set today's month
            if(m > 9){
                this.date = `${y}-${m}`;
            }else{
                this.date = `${y}-0${m}`;
            }
        }
    },
    mounted(){
        // set today's date
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
        // check if date is set and display chart element
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
@import '../style/variables.scss';

    input[type="month"]{
        padding: 10px;
        font-size: 20px;
        border-radius: 50%;
        background-color: $lightred;
        color: $darkgreen;
        font-weight: 700;
        text-align: center;
    }

    .grid-box {
        margin: 30px auto;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 33%);
        grid-template-rows: auto;
        align-items: center;
        justify-content: center;
        gap: 10px;

        .grid-item {
            margin-top: 10px;
            border: 1px solid $gray;
            width: 90%;
            align-self: center;
            justify-self: center;
            
            .grid-title {
                margin: 10px 0;
            }
        }
    }

    @media only screen and (max-width: 1500px) {
        .grid-box {
            grid-template-columns: repeat(2, 49%);
        }
    }

    @media only screen and (max-width: 800px){
        .grid-box{
            margin: 10px auto;
            grid-template-columns: 95%;
        }

        .grid-title {
            font-size: 20px;
        }

        input[type="month"]{
            padding: 5px;
            font-size: 16px;
            font-weight: 600;
        }
    }
</style>