<template>
    <div class="wrapper">
        <div class="container">
            <h1 class="intro-header">Welcome to the life data forces</h1>
            <p>Within this website you will find information about police forces, crime rates within the cities and you can check on map the crime level.</p>
        </div>

        <div class="container">
            <h1 class="article-header">
                Check available police forces within UK:
            </h1>
            <div class="article">
                <ul>
                    <li class="header-list">List of police forces:</li>
                    <li v-for="force in forces" :key="force.id"  @click="showDetails(force.id); active = force.id" :class="{active:force.id == active}">
                        {{force.name}}   
                    </li>
                </ul>
                <p class="details">{{details}}</p>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            forces: [],
            details:  "Please select one of the option",
            active: undefined,
            activeClass: 'active',
        }
    },
    async created(){
        try {
            const res = await axios.get('https://data.police.uk/api/forces');
            this.forces = res.data;
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        async showDetails(id){
            var desc;
            try {
                const res = await axios.get(`https://data.police.uk/api/forces/${id}`);
                if(!res.data.description == ""){
                    desc = res.data.description.replace(/(<([^>]+)>)/gi, "");
                    this.details = desc;
                }else{
                    this.details = "There are no future details about this forces"
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>

<style scoped lang="scss">
    .article {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        margin-top: 20px;

        ul {
            width: 40%;
            margin-top: 20px;
            list-style: none;

            li {
                margin: 5px;
                font-size: 20px;
                cursor: pointer;

                &:hover {
                    color: red;
                }

                &.active {
                    color: red;
                }
            }

            .header-list{
                font-size: 24px;
                margin-bottom: 10px;
                font-weight: 700;
            }
        }

        .details {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            width: 55%;
            border: 1px solid black;
            font-size: 24px;
            padding: 10px;
        }
    }
    
</style>