<template>
<!-- new box -->
    <div class="news-box">
        <!-- title -->
        <h1 class="title-news">{{city.city}}</h1>
        <h2 class="list-title" v-if="isData">Crime lists:</h2>
        <!-- list of crimes -->
        <div v-for="result in filteredArray" :key="result.category">
            <p v-if="result.category == 'No crimes detected'">{{result.category}}</p>
            <p v-else>- {{result.count}}x {{result.category}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['date', 'city'], //data passed by parent
    data(){
        return{
            crimes: [], //cities array
            lat: this.city.lat, // latitude of cities
            lng: this.city.lng, // longitude of cities
            isData: true //display if data 
        }
    },
    watch: { //watch parent chaning date
        date: {
            handler: async function (date) { //handle changed data
                try {
                    this.isData = true;
                    const headers = { "Content-Type": "application/json" }; //get header
                    const res = await axios.get(`https://data.police.uk/api/crimes-at-location?date=${date}&lat=${this.lat}&lng=${this.lng}`, headers);
                    this.crimes = res.data; //set response as array
                    if(res.data == ""){ // check if respone is empty
                        this.isData = false; //set data to false if no crimes detected
                        this.crimes.push({id: 1, category: "No crimes detected"});
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            immediate: true
        }
    },
    computed: { //filter data
        filteredArray() {
        var newArray = {} // teporary array
        for (let i in this.crimes) { // loop through array
            let key = this.crimes[i].category //set key for array
            //set new array
            newArray[key] = {
                    category: key,
                    count: newArray[key] && newArray[key].count ? newArray[key].count + 1 : 1
                }
            }
            return Object.values(newArray) //return object of array
        }
    }
}
</script>

<style scoped lang="scss">
@import '../style/variables.scss';

    // news box
    .news-box {
        border: 1px solid black;
        min-height: 100px;
        margin: 10px;
        // news title
        .title-news{
            font-weight: 700;
            font-size: 26px;
            border-bottom: 1px solid $gray;
            margin: 0 0 10px 0;
            text-shadow: 1px 1px black;
            letter-spacing: 2px;
        }
        //list tile
        .list-title {
            font-size: 20px;
            letter-spacing: 1px;
        }
        //paragraph
        p{
            font-size: 18px;
            margin-top: 5px;
        }
    }
    //mobile version
    @media only screen and (max-width: 800px){
        //news box
        .news-box {
            border: none;

            .title-news{
                font-weight: 500;
                font-size: 22px;
            }

            .list-title {
                font-size: 18px;
                font-weight: 400;
            }

            p{
                font-size: 16px;
            }
        }
    }
</style>