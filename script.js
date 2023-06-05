let profilemenu = document.querySelector(".profile-menu-wrap")

let sidebarActivity = document.getElementById("sidebarActivity")
let showMoreLink = document.getElementById("show-more-link")
function profileMenuToggle() {
    profilemenu.classList.toggle("open-menu")
}

function toggleActivity() {
    sidebarActivity.classList.toggle("open-activity");
    
    if(sidebarActivity.classList.contains("open-activity")) {
        showMoreLink.innerHTML = "Show less <b>-</b>"
    }
    else {
        showMoreLink.innerHTML = "Show more <b>+</b>"
    }
}
