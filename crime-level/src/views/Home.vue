<template>
    <!-- wrapper -->
    <div class="wrapper">
        <!-- class element -->
        <div class="container">
            <!-- Header -->
            <h1 class="header-default">Welcome to the life data forces</h1>
            <p class="information">Within this website you will find information about police forces, crime rates within the cities and you can check on map the crime level.</p>
        </div>

        <!-- class element -->
        <div class="container">
            <!-- header -->
            <h1 class="header-default">
                Check available police forces within UK:
            </h1>

            <!-- article class -->
            <div class="article">
                <!-- list for police forces -->
                <ul>
                    <li class="header-list">List of police forces:</li>
                    <!-- links for police forces -->
                    <li v-for="force in forces" :key="force.id"  @click="showDetails(force.id); active = force.id" :class="{active:force.id == active}">
                        {{force.name}}   
                    </li>
                </ul>
                <!-- display details of selected force -->
                <p class="details">{{details}}</p>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return { //data
            forces: [], //empty forces array
            details:  "Please select one of the option", //default details
            active: undefined, //active class
            activeClass: 'active', //active class name
        }
    },
    async created(){
        //prepare data for forces
        try {
            const res = await axios.get('https://data.police.uk/api/forces');
            this.forces = res.data; // set response as force array
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        async showDetails(id){ //show force details array
            var desc; //local description
            try {
                const res = await axios.get(`https://data.police.uk/api/forces/${id}`); //get data about force
                // check if response is no empty
                if(!res.data.description == ""){
                    desc = res.data.description.replace(/(<([^>]+)>)/gi, ""); // strip any html tags
                    this.details = desc; //set local details as description
                }else{ //set default response
                    this.details = "There are no future details about this forces"
                }
            } catch (error) { // check if any errors
                console.log(error);
            }
        }
    },
}
</script>

<style scoped lang="scss">
@import '../style/variables.scss';  

    // information paragraph
    .information {
        font-size: 20px;
        margin: 5px;
        padding: 5px;
    }

    //article displlay
    .article {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        margin-top: 20px;

        // unordered lists
        ul {
            width: 40%;
            margin-top: 20px;
            list-style: none;

            // lists
            li {
                margin: 5px;
                font-size: 20px;
                padding: 5px;
                cursor: pointer;

                // hover
                &:hover {
                    color: $gray;
                    text-shadow: 1px 1px 10px $lightred;
                }

                // active class
                &.active {
                    color: $gray;
                }
            }

            // header for lists
            .header-list{
                font-size: 28px;
                margin-bottom: 10px;
                font-weight: 700;
                padding: 5px;
                border-bottom: 1px solid $gray;
            }
        }

        //details information
        .details {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            width: 55%;
            border-left: 2px inset $gray;
            font-size: 24px;
            padding: 10px;
        }
    }

//mobile version
@media only screen and (max-width: 800px) {
    .information{
        font-size: 18px;
    }

    .article {
        margin-top: 10px;
        flex-direction: column;

        ul {
            margin-top: 10px;
            width: 100%;

            li {
                font-size: 16px;
            }

            .header-list {
                font-size: 20px;
                font-weight: 500;
            }
        }

        .details {
            padding: 10px 0;
            width: 100%;
            border-left: none;
            border-top: 2px inset $gray;
            font-size: 18px;
            word-spacing: 2px;
            line-height: 25px;
        }
    }
}
    
</style>