<template>
    <!-- footer -->
    <footer>
        <!-- Display footer -->
        <div class="footer-display">
            <!-- navigation links -->
            <div class="navigation-links">
                <router-link class="footer-nav" active-class="active" to="/">Home</router-link>
                <router-link class="footer-nav" active-class="active" to="/crimes">Crimes</router-link>
                <router-link class="footer-nav" active-class="active" to="/about">About</router-link>
            </div>
            <!-- navigation informations -->
            <div class="footer-info">
                <p>
                    This is useful information about the purpose of this website.
                </p>
                <p>
                    Website has been build for the educational purpose and the target of this web application is to show the fetching of the real-time database information into my own website.
                </p>
            </div>
        </div>
        <!-- copyrights -->
        <p class="copy">
            Copyright &copy; 2021 by Krystian Malkowski
        </p>
    </footer>
</template>

<style scoped lang="scss">
@import '../style/variables.scss';
    //footer
    footer {
        margin-top: 10px;
        width: 100%;
        padding-top: 15px;
        margin-top: 30px;
        background-color: $lightred;
        // footer display
        .footer-display {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            //footer information
            .footer-info {
                width: 60%;
                // paragraph
                p {
                    text-align: left;
                    color: $darkgreen;
                    font-size: 20px;
                    font-weight: 600;
                    margin-right: 10px;
                }
            }
            //navigation display
            .navigation-links {
                width: 40%;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                // links navigation
                .footer-nav {
                    text-decoration: none;
                    text-transform: uppercase;
                    color: $darkgreen;
                    width: fit-content;
                    font-size: 20px;
                    padding: 10px;
                    margin: 5px 3%;
                    transition: 0.7s;
                    border-radius: 50%;
                    // hover
                    &:hover {
                        background-color: $darkgreen;
                        color: $gray;
                    }
                    //active class
                    &.active {
                        background-color: $darkgreen;
                        color: $gray;
                        font-weight: 700;
                    }
                }
            }
        }
        //copyrights
        .copy {
            display: block;
            border-top: 2px solid black;
            margin-top: 20px;
        }
        
    }

    // mobile version
    @media only screen and (max-width: 800px) {
        footer {
            margin-top: 20px;

            .footer-display {
                .footer-info {
                    display: none;
                }

                .navigation-links {
                    width: 100%;
                    justify-content: center;
                    align-items: center;

                    .footer-nav {
                        font-size: 18px;
                        padding: 5px;

                        &.active {
                            font-weight: 500;
                        }
                    }
                }
            }
        }
    }
</style>