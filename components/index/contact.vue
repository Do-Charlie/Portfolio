<template>
    <div class="container-a-propos fadeup">
        <ProjetSeparator text="Contact"></ProjetSeparator>

        <ul class="left"> Email
            <li> <a href="mailto:charliedo.pro@gmail.com"> charliedo.pro@gmail.com</a> </li>

        </ul>
        <ul class="left"> Malt
            <li>
                <a href="https://www.malt.fr/profile/charliedo1" target="_blank">
                    https://www.malt.fr/profile/charliedo1
                </a>
            </li>
        </ul>
        <ul class="right"> Linkedin
            <li>
                <a href="https://www.linkedin.com/in/charlie-do-3a6a07201/" target="_blank">
                    https://www.linkedin.com/in/charlie-do-3a6a07201/
                </a>
            </li>

        </ul>
        <ToolsObserveScroll :threshold=0 element="fadeup"></ToolsObserveScroll>



    </div>
</template>

<script setup>

</script>

<style scoped>
.container-a-propos {
    padding: 5svh 15vw;

    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}

ul {
    margin-top: 50px;
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 40%;
    font-weight: 300;
    font-size: 18px;
    color: var(--second-color);
    gap: 10px;
    max-width: 400px;
    min-width: 200px;
    text-transform: uppercase;

}

li {
    font-weight: 100;
    color: var(--color);
    text-transform: none;

}

ul:nth-child(2n) {
    justify-content: flex-end;
    align-items: flex-end;
}

.fadeup {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    opacity: 0;
    transform: translateY(100px);
}

.fadeup.is-scrolled {
    opacity: 1;
    transform: translateY(0px);
}

@media only screen and (max-width: 1440px) {
    .container-a-propos {
        gap: 20px;
    }

    ul {
        font-size: 16px;
        gap: 5px;

    }
}

@media only screen and (max-width: 768px) {
    .container-a-propos {
        gap: 10px;
    }

    ul {

        font-size: 12px;
        gap: 5px;
    }

    li {
        font-size: 10px;
    }

}
</style>