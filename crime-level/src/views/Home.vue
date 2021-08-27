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
            <ul>
                <li v-for="force of forces" :key="force.id">{{force.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            forces: []
        }
    },
    async created(){
        try {
            const res = await axios.get('https://data.police.uk/api/forces');
            this.forces = res.data;
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style scoped lang="scss">
    ul {
        margin-top: 20px;
        list-style: none;

        li {
            margin: 5px;
            font-size: 20px;
            cursor: pointer;

            &:hover {
                color: red;
            }
        }
    }
</style>