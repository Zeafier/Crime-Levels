<template>
    <div class="news-box">
        <h1 class="title-news">{{city.city}}</h1>
        <h2>Crimes:</h2>
        <div v-for="result in filteredArray" :key="result.category">
            <p v-if="result.category == 'No crimes detected'">{{result.category}}</p>
            <p v-else>- {{result.count}}x {{result.category}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['date', 'city'],
    data(){
        return{
            crimes: [],
            lat: this.city.lat,
            lng: this.city.lng,
        }
    },
    watch: {
        date: {
            handler: async function (date) {
                try {
                    const headers = { "Content-Type": "application/json" };
                    const res = await axios.get(`https://data.police.uk/api/crimes-at-location?date=${date}&lat=${this.lat}&lng=${this.lng}`, headers);
                    this.crimes = res.data;
                    if(res.data == ""){
                        this.crimes.push({id: 1, category: "No crimes detected"});
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            immediate: true
        }
    },
    computed: {
        filteredArray() {
        var newArray = {}
        for (let i in this.crimes) {
            let key = this.crimes[i].category
            newArray[key] = {
                    category: key,
                    count: newArray[key] && newArray[key].count ? newArray[key].count + 1 : 1
                }
            }
            return Object.values(newArray)
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