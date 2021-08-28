<template>
    <div class="wrapper">
        <div class="container">
            <h1 class="article-header">Crimes comitted within 2021-07</h1>
        </div>
        <div class="grid-box">
            <div class="grid-item" v-for="city in cities" :key="city.id">
                <NewsBox :city="city" :date="date" />
            </div>
        </div>
    </div>
</template>

<script>
import NewsBox from '../components/NewsBox.vue'

export default {
    components: {
        NewsBox
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
            date: "2021-07"
        }
    }
}
</script>

<style scoped lang="scss">
    .grid-box {
        margin: 10px auto;
        width: 90%;
        box-shadow: 0 0 10px black;
        display: grid;
        grid-template-columns: auto auto auto;
        align-content: start;
    }

    @media only screen and (max-width: 800px){
        .grid-box{
            width: 100%;
            grid-template-columns: auto;
        }
    }
</style>