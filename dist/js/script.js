// Grabbing the DOM elements
const menuLinks = document.getElementById("menuLinks");

// Auto Nav-link active DOM elements
const sections = [
    document.getElementById("home"),
    document.getElementById("about"),
    document.getElementById("works"),
    document.getElementById("contact"),
];

// Helper functions
function ch(el, index) {
    return el.children.item(index);
}

function forEachChildOf(parrentEl, cb) {
    for (let i = 0; i < Array(parrentEl.children.length).length; i++) {
        cb(i);
    }
}

function setActiveLink(index) {
    forEachChildOf(menuLinks, (i) => {
        ch(menuLinks, i).classList.remove("active");
    });
    ch(menuLinks, index).classList.add("active");
}


function autoMenuLinkActiveHandler() {
    sections.forEach((sectionEl, index) => {
        const position = sectionEl.getBoundingClientRect();
        if (position.top >= 0 && position.top <= window.innerHeight) {
            setActiveLink(index);
        }
    });
}

window.addEventListener("scroll", () => {
    autoMenuLinkActiveHandler();
});