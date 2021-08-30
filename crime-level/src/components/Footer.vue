<template>
    <footer>
        <div class="footer-display">
            <div class="navigation-links">
                <router-link class="footer-nav" active-class="active" to="/">Home</router-link>
                <router-link class="footer-nav" active-class="active" to="/crimes">Crimes</router-link>
                <router-link class="footer-nav" active-class="active" to="map">Map</router-link>
            </div>
            <div class="footer-info">
                <p>
                    This is useful information about the purpose of this website.
                </p>
                <p>
                    Website has been build for the educational purpose and the target of this web application is to show the fetching of the real-time database information into my own website.
                </p>
            </div>
        </div>
        <p class="copy">
            Copyright &copy; 2021 by Krystian Malkowski
        </p>
    </footer>
</template>

<style scoped lang="scss">
    footer {
        padding-top: 15px;
        margin-top: 30px;
        background-color: red;

        .footer-display {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .footer-info {
                width: 60%;
                
                p {
                    text-align: left;
                    color: black;
                    font-size: 20px;
                }
            }

            .navigation-links {
                width: 40%;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;

                .footer-nav {
                    text-decoration: none;
                    color: black;
                    width: fit-content;
                    font-size: 18px;
                    padding: 10px;
                    margin: 5px 3%;
                    transition: 0.7s;
                    border-radius: 50%;

                    &:hover {
                    background-color: green;
                    }

                    &.active {
                    background: green;
                    font-weight: 700;
                    }
                }
            }
        }

        .copy {
            display: block;
            border-top: 2px solid black;
            margin-top: 10px;
        }
        
    }

    @media only screen and (max-width: 800px) {
        footer {
            margin-top: 20px;

            .footer-nav {
                font-size: 16px;
                padding: 5px;
            }
        }
    }
</style>