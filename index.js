function firstPage() {
    document.getElementsByClassName('welcome')[0].style.display = "none";
    document.getElementById('firstPage').style.display = "block";
    document.getElementsByClassName("talk")[0].style.display = "block";
}
function showAbout() {
    document.getElementsByClassName("talk")[0].style.display = "none";
    document.getElementById("about").style.display = "block";
}
function pageTwo() {
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("secondPage").style.display = "block";
}
function showSocials() {
    document.getElementsByClassName('talk')[1].style.display = "none";
    document.getElementById("socials").style.display = "block";
}
function pageThree() {
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("thirdPage").style.display = "block";
}
function showMusic() {
    document.getElementsByClassName("talk")[2].style.display = "none";
    document.getElementById("music").style.display = "block";
}
function lastPage() {
    document.getElementById("thirdPage").style.display = "none";
    document.getElementById("lastPage").style.display = "block";
}