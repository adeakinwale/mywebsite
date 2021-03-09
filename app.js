var menu = document.querySelector(".open");
var closeMenu = document.querySelector(".exit");
var navPanel = document.querySelector(".nav");


// ==============================
let scrollpos = window.scrollY
const header = document.querySelector("header")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("add-background")
const remove_class_on_scroll = () => header.classList.remove("add-background")

window.addEventListener('scroll', function() {
        scrollpos = window.scrollY;

        if (scrollpos >= header_height) { add_class_on_scroll() } else { remove_class_on_scroll() }

        // console.log(scrollpos)
    })
    // =============================== 


menu.addEventListener("click", () => {
    navPanel.setAttribute("id", "open-nav");
})

closeMenu.addEventListener("click", () => {
    navPanel.removeAttribute("id", "open-nav");

})