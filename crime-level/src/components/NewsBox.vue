<template>
    <div class="news-box">
        <h1 class="title-news">{{city.city}}</h1>
        <h2>Committed crimes</h2>
        <div v-for="crime in crimes" :key="crime.id">
            - {{crime.category}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: {
        city: Object,
        date: String
    },
    data(){
        return{
            crimes: [],
            lat: this.city.lat,
            lng: this.city.lng,
            selectedDate: this.date,
        }
    }, 
    async created(){
        try {
            const res = await axios.get(`https://data.police.uk/api/crimes-at-location?date=${this.selectedDate}&lat=${this.lat}&lng=${this.lng}`);
            this.crimes = res.data;
            if(res.data == ""){
                this.crimes.push({id: 1, category: "No crimes detected"});
            }
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style scoped lang="scss">
    .news-box {
        border: 1px solid black;
        min-height: 100px;
        margin: 10px;
    }
</style>