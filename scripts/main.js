import { FishList } from "./FishList.js"

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishBoxes")


parentHTMLElement.innerHTML = FishList()
