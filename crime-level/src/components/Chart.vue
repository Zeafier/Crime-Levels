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
            handler: async function (date) {
                try {
                    const res = await axios.get(`https://data.police.uk/api/crimes-at-location?date=${date}&lat=${this.lat}&lng=${this.lng}`);
                    this.crimes = res.data;
                    if(res.data == ""){
                        this.crimes.push({id: 1, category: "No crimes detected"});
                    }
                } catch (error) {
                    console.log(error);
                }
                const {labels, data} = this.filteredArray;

                // Overwriting base render method with actual data.
                this.renderChart({
                    labels: labels,
                    datasets: [
                        {
                            label: "Crimes",
                            backgroundColor: '#f87979',
                            data: data
                        }
                    ]
                });
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
    }
})
</script>