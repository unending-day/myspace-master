// JavaScript Document

// 主页侧导航控制
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginRight = "300px";
    document.getElementById("weib").style.marginRight ="300px";
    document.getElementById("zbox").style.marginRight ="300px";
    document.getElementById("dh").style.marginleft = "1%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("weib").style.marginRight = "0";
    document.getElementById("zbox").style.marginRight ="0";
    document.getElementById("dh").style.marginLeft = "20%";
}
// 次级侧导航栏控制

function openNav_1() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginRight = "300px";
    document.getElementById("weib").style.marginRight ="300px";
    document.getElementById("mbox").style.marginRight ="300px";
    document.getElementById("dh").style.marginLeft = "1%";
}

function closeNav_1() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("weib").style.marginRight = "0";
    document.getElementById("mbox").style.marginRight ="0";
    document.getElementById("dh").style.marginLeft = "20%";
}