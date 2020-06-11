let menu = document.getElementById("menu-type");

let sandwich = document.getElementById("sandwich");
let pasteries = document.getElementById("pasteries");
let toast = document.getElementById("toast");
let espresso = document.getElementById("espresso");
let refreshDrink = document.getElementById("refresh");
let alcoholDrink = document.getElementById("alcohol");
let specials = document.getElementById("specials");

const sandwichMenu = "./resources/menuPhotos/SandwichMenu.jpg";
const pasteriesMenu = "./resources/menuPhotos/PasteriesMenu.jpg";
const toastMenu = "./resources/menuPhotos/ToastMenu.jpg";
const espressoMenu = "./resources/menuPhotos/EspressoMenu.jpg";
const refreshDrinkMenu = "./resources/menuPhotos/RefreshMenu.jpg";
const alcoholDrinkMenu = "./resources/menuPhotos/comingSoon.jpg";
const specialsMenu = "./resources/menuPhotos/comingSoon.jpg";

sandwich.onclick = () => {
    menu.src = sandwichMenu;
    sandwich.style.color = '#7FFFD4';
    pasteries.style.color = 'white';
    toast.style.color = 'white';
    espresso.style.color = 'white';
    refreshDrink.style.color = 'white';
    alcoholDrink.style.color = 'white';
    specials.style.color = 'white';
}

pasteries.onclick = () => {
    menu.src = pasteriesMenu;
    sandwich.style.color = 'white';
    toast.style.color = 'white';
    espresso.style.color = 'white';
    refreshDrink.style.color = 'white';
    alcoholDrink.style.color = 'white';
    specials.style.color = 'white';
    pasteries.style.color = '7FFFD4';
}

toast.onclick = () => {
    menu.src = toastMenu;
    sandwich.style.color = 'white';
    pasteries.style.color = 'white';
    espresso.style.color = 'white';
    refreshDrink.style.color = 'white';
    alcoholDrink.style.color = 'white';
    specials.style.color = 'white';
    toast.style.color = '7FFFD4';
}

espresso.onclick = () => {
    menu.src = espressoMenu;
    sandwich.style.color = 'white';
    pasteries.style.color = 'white';
    toast.style.color = 'white';
    refreshDrink.style.color = 'white';
    alcoholDrink.style.color = 'white';
    specials.style.color = 'white';
    espresso.style.color = '7FFFD4';
}

refreshDrink.onclick = () => {
    menu.src = refreshDrinkMenu;
    refreshDrink.style.color = '7FFFD4';
    sandwich.style.color = 'white';
    pasteries.style.color = 'white';
    toast.style.color = 'white';
    espresso.style.color = 'white';
    alcoholDrink.style.color = 'white';
    specials.style.color = 'white';
}

alcoholDrink.onclick = () => {
    menu.src = alcoholDrinkMenu;
    alcoholDrink.style.color = '7FFFD4';
    sandwich.style.color = 'white';
    pasteries.style.color = 'white';
    toast.style.color = 'white';
    espresso.style.color = 'white';
    refreshDrink.style.color = 'white';
    specials.style.color = 'white';
}

specials.onclick = () => {
    menu.src = specialsMenu;
    sandwich.style.color = 'white';
    pasteries.style.color = 'white';
    toast.style.color = 'white';
    espresso.style.color = 'white';
    refreshDrink.style.color = 'white';
    alcoholDrink.style.color = 'white';
    specials.style.color = '7FFFD4';
}



