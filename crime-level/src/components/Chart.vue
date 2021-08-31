<script>
import axios from 'axios'
import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
    name: 'Chart',
    extends: Bar,
    props: ['date', 'city'],
    data(){
        return{
            crimes: [],
            lat: this.city.lat,
            lng: this.city.lng,
            label: [],
            data: []
        }
    },
    watch: {
        date: {
            handler: function (date) {
                var tempdate = '';
                var isDateSet = false;

                if(date == ''){
                    tempdate = this.todayDate();
                    isDateSet == true;
                }else{
                    tempdate = date;
                    isDateSet = true;
                }

                if(isDateSet){
                    axios.get(`https://data.police.uk/api/crimes-at-location?date=${tempdate}&lat=${this.lat}&lng=${this.lng}`)
                    .then(res => {
                        this.crimes = res.data;
                        if(res.data == ""){
                            this.crimes.push({id: 1, category: "No crimes detected"});
                        }
                    })
                    .then(() => {
                        const {labels, data} = this.filteredArray;
                        this.label = labels;
                        this.data = data;
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
                    .catch(err => console.log(err))
                }
            },
            immediate: true
        }
    },
    computed: {
        filteredArray() {
            const labels = [];
            const data = [];
            let tepArray = {};//temporary array

            // get temporary array
            for (let i in this.crimes) {
                let key = this.crimes[i].category;
                tepArray[key] = {
                        category: key,
                        count: tepArray[key] && tepArray[key].count ? tepArray[key].count + 1 : 1
                }
            };

            for (let i in tepArray) {
                labels.push(tepArray[i].category),
                data.push(tepArray[i].count);
            };

            return {
                labels,
                data
            };
        }
    },
    methods:{
        todayDate() {
            var today = new Date();
            //year and month
            var y = today.getFullYear();
            var m = today.getMonth(0, 2) + 1;
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