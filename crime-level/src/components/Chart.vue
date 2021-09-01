<script>
import axios from 'axios'
import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
    name: 'Chart',
    extends: Bar,
    props: ['date', 'city'], //child's variables passed by Crimes page
    data(){
        return{ //variables
            crimes: [], //empty array from crimes
            lat: this.city.lat, //set latitude
            lng: this.city.lng, // set longitude
            label: [], // empty array from labels
            data: [] // empty array for datasets
        }
    },
    watch: { //watch values changed in parent
        date: { //watch changed date
            handler: function (date) { //hangle change
                var tempdate = ''; //temporary date
                var isDateSet = false; //check if date is set

                // check if date passed by parent is not empty
                if(date == ''){
                    tempdate = this.todayDate(); //set date to today's date
                    isDateSet == true;
                }else{
                    tempdate = date; //set date to received date
                    isDateSet = true;
                }

                //check if data is set
                if(isDateSet){
                    axios.get(`https://data.police.uk/api/crimes-at-location?date=${tempdate}&lat=${this.lat}&lng=${this.lng}`) //get api data
                    .then(res => { //get response and set as crimes array
                        this.crimes = res.data;
                        if(res.data == ""){
                            this.crimes.push({id: 1, category: "No crimes detected"});
                        }
                    })
                    .then(() => { // set data for chart
                        const {labels, data} = this.filteredArray; // get response from filteredArray
                        this.label = labels; // set label array
                        this.data = data; // set data array
                    })
                    .then(() => {
                        // Overwriting base render method with actual data.
                        this.renderChart({
                            labels: this.label,
                            datasets: [
                                {
                                    label: "Crimes",
                                    backgroundColor: '#f87979',
                                    data: this.data
                                }
                            ]
                        });
                    })
                    .catch(err => console.log(err)) //check if any errors -- console displaying errors caused by API which have limitted access
                }
            },
            immediate: true
        }
    },
    computed: {
        filteredArray() { //filter array to set count for data measurements
            // variables
            const labels = []; // temp labels
            const data = []; // temp data
            let tepArray = {};//temporary array

            // get temporary array
            for (let i in this.crimes) {
                let key = this.crimes[i].category; //set key data
                // set record for the key data
                tepArray[key] = {
                        category: key,
                        count: tepArray[key] && tepArray[key].count ? tepArray[key].count + 1 : 1
                }
            };

            // split tempArray and place data to labels (category) and data (count)
            for (let i in tepArray) {
                labels.push(tepArray[i].category),
                data.push(tepArray[i].count);
            };

            // return arrays
            return {
                labels,
                data
            };
        }
    },
    methods:{
        todayDate() { //set today's date
            var today = new Date();
            //year and month
            var y = today.getFullYear();
            var m = today.getMonth(0, 2); //month index starting with 0

            //check if month is October and set today's month
            if(m > 9){
                return `${y}-${m}`;
            }else{
                return `${y}-0${m}`;
            }
        }
    }
})
</script>