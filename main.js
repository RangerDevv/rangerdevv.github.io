const About = document.getElementById("AboutWindow");
const topbar = document.getElementById("topbar");
const aboutbtn = document.getElementById("aboutbtn");
const background = document.getElementById("background");
const projects = document.getElementById("ProjectWindow");


function OpenAbout() {
    About.style.display = "block";
    topbar.style.display = "none";
    projects.style.display = "none";
}

function closebtn() {
    window.location.reload();
}

function OpenProjects() {
    projects.style.display = "block";
    topbar.style.display = "none";
    About.style.display = "none";
}
