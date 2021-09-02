<template>
    <!-- wrapper -->
    <div class="wrapper">
        <!-- container -->
        <div class="container">
            <!-- about info -->
            <h1 class="header-default">Information</h1>
            <p class="information">All of the date avaiable on this website has been fetched using available API below:</p>
            <a href="https://data.police.uk/docs/">Police API</a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
@import '../style/variables.scss';

    a {
        text-decoration: none;
        color: $lightred;
        font-size: 18px;
        line-height: 35px;
        font-weight: 600;
        transition: .5s;
        letter-spacing: 1px;

        &:hover{
            color: $gray;
            font-size: 20px;
        }
    }
</style>