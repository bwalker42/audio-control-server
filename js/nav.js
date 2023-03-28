function hideActivePage() {
    document.getElementById(document.querySelector(".active").innerText.toLocaleLowerCase().trim()).classList.add("inactive");
}

function setNavBar(myObject) {
    var element = document.querySelector(".active");
    element.classList.remove("active");
    myObject.classList.add("active");
}

function showActivePage(myObject) {
    const elementID = document.querySelector(".active").innerText.toLocaleLowerCase().trim();
    document.getElementById(elementID).style.height = document.querySelector(".page").clientHeight - document.querySelector(".navbar").clientHeight + 1;
    document.getElementById(elementID).classList.remove("inactive");
}
function switchPage(myObject) {
    hideActivePage();
    setNavBar(myObject);
    showActivePage(myObject);
}

function setInitialSize() {
    const elementID = document.querySelector(".active").innerText.toLocaleLowerCase();
    document.getElementById(elementID.trim()).style.height = document.querySelector(".page").clientHeight - document.querySelector(".navbar").clientHeight + 1;
}

function initNav() {
    const mainNav = document.getElementById("nav_inputs")
}
/*
class NavButton {
    // A NavButton is a single button for in a NavBar
    constructor(btnName, pageName) {
        this.buttonName = btnName;
        this.pageName = pageName;
    }

    getNavButton() {

    }
}
class NavBar {
    // A NavBar is a collection of NavButtons
    constructor(btnName, pageName) {
        this.buttonName = btnName;
        this.pageName = pageName;
    }
    let this.navbar = 

    makeNavButton() {

    }

    makeNavBar() {

        for 
    }

                <ul>
                    <li><a class="active" href="#inputs" onclick="switchPage(this);">INPUTS</a></li>
                    <li><a href="#dashboard" onclick="switchPage(this);">DASHBOARD</a></li>
                    <li><a href="#outputs" onclick="switchPage(this);">OUTPUTS</a></li>
                    <li><a href="#zones" onclick="switchPage(this);">ZONES</a></li>
                    <li><a href="#settings" onclick="switchPage(this);">SETTINGS</a></li>
                </ul>

}
*/