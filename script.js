/* LIST OF REGISTERED WEBSITES:

Alphalete
ALPHA LION
Anabar
ASRV
Breathedivinity
Cbum Fitness
CELSIUS Energy Drink
CIVIL REGIME
Cutler Nuttrition
DARC SPORT
Elysium Athletic
Gorilla Mind
GYMREAPERS
Gymshark
HELIMIX
Huge Supplements
Imperial Strength Co.
INAKA
IRONWILLED
Kill Crew
LET THE DOG EAT
lululemon
Mentality
OPTIMAL GAINS
Raw Nutrition
RawGear
rgmnt co
Ryse Supplements
SBD Apparel
TRENTECH
Under Armour
Vanquish Fitness
YoungLA
*/



const sr = ScrollReveal ({
    delay: 400,
    duration: 1000,
    origin: "bottom",
    distance: "30px",
    reset: false
});

sr.reveal('.r0', {delay: 2000, origin: "top", distance: "50px", duration: 3000});
sr.reveal('.r1', {delay: 1000, origin: "top", distance: "50px", duration: 3000});
sr.reveal('.bxs-calendar', {delay: 50, origin: "bottom", distance: "220px", duration: 3000, easing: 'ease'});
sr.reveal('.bxs-t-shirt', {delay: 50, origin: "bottom", distance: "220px", duration: 3000, easing: 'ease'});

sr.reveal('.box1', {delay: 50, origin: "left", distance: "250px", duration: 3000});
sr.reveal('.box2', {delay: 50, origin: "right", distance: "250px", duration: 3000});
sr.reveal('.box3', {delay: 0, origin: "bottom", distance: "250px", duration: 3000});
sr.reveal('.dbtn', {delay: 2000, origin: "bottom", distance: "0px", duration: 3000});
sr.reveal('.bxs-discount', {delay: 50, origin: "bottom", distance: "220px", duration: 3000, easing: 'ease'});
sr.reveal('.bx-cart-add', {delay: 50, origin: "bottom", distance: "220px", duration: 3000, easing: 'ease'});

sr.reveal('.sq1', {delay: 350});
sr.reveal('.sq2', {delay: 400});
sr.reveal('.sq3', {delay: 450});
sr.reveal('.sq4', {delay: 500});
sr.reveal('.sq5', {delay: 550});
sr.reveal('.sq6', {delay: 600});
sr.reveal('.sq7', {delay: 650});

sr.reveal('.sq8', {delay: 350});
sr.reveal('.sq9', {delay: 400});
sr.reveal('.sq10', {delay: 450});
sr.reveal('.sq11', {delay: 500});
sr.reveal('.sq12', {delay: 550});
sr.reveal('.sq13', {delay: 600});
sr.reveal('.sq14', {delay: 650});

sr.reveal('.sq15', {delay: 350});
sr.reveal('.sq16', {delay: 400});
sr.reveal('.sq17', {delay: 450});
sr.reveal('.sq18', {delay: 500});
sr.reveal('.sq19', {delay: 550});
sr.reveal('.sq20', {delay: 600});
sr.reveal('.sq21', {delay: 650});

sr.reveal('.sq22', {delay: 350});
sr.reveal('.sq23', {delay: 400});
sr.reveal('.sq24', {delay: 450});
sr.reveal('.sq25', {delay: 500});
sr.reveal('.sq26', {delay: 550});
sr.reveal('.sq27', {delay: 600});
sr.reveal('.sq28', {delay: 650});

sr.reveal('.bxs-group', {delay: 100, origin: "bottom", distance: "40px", duration: 3000, easing: 'ease'});
sr.reveal('.bxs-message-rounded', {delay: 0, origin: "bottom", distance: "60px", duration: 2500, easing: 'ease'});

sr.reveal('.container', {delay: 1500, origin: "top", duration: 2000, distance: "0px"});
sr.reveal('.ri-arrow-left-s-line', {delay: 0, origin: "right", duration: 4000, distance: "500px", opacity: 1});
sr.reveal('.ri-arrow-right-s-line', {delay: 0, origin: "left", duration: 4000, distance: "500px", opacity: 1});



// MAKE HEADER DISAPPEAR ON SCROLL
window.addEventListener("scroll", function () {
    let header = document.getElementById("h");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    header.style.opacity = 1 - scrollTop / 150;
    if(header.style.opacity <= 0){
        header.style.zIndex = -100
    }
    else{
        header.style.zIndex = 100
    }
 });



// MOBILE MENU
 let menu = document.querySelector('#menu-icon');
 let navlist = document.querySelector('.navlist');
 menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
 }



// MAIN PAGE
 if(document.querySelector('title').text == "GYMDRP"){
    // SCROLL ANIMATIONS
    // get the element to animate
    var elementT1 = document.getElementById('ct1id');
    var elementT2 = document.getElementById('ct2id');
    var elementT3 = document.getElementById('ct3id');
    var elementT1Height = elementT1.clientHeight;
    var elementT2Height = elementT2.clientHeight;
    var elementT3Height = elementT3.clientHeight;

    // check if element is in view
    function inViewT1() {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;
    
    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = elementT1.getBoundingClientRect().top + scrollY + elementT1Height;
    
    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
        return true;
    }
    
    return false;
    }
    function inViewT2() {
        var windowHeight = window.innerHeight;
        var scrollY = window.scrollY || window.pageYOffset;
        var scrollPosition = scrollY + windowHeight;
        var elementPosition = elementT2.getBoundingClientRect().top + scrollY + elementT2Height;
        if (scrollPosition > elementPosition) {
        return true;
        }
        return false;
    }
    function inViewT3() {
        var windowHeight = window.innerHeight;
        var scrollY = window.scrollY || window.pageYOffset;
        var scrollPosition = scrollY + windowHeight;
        var elementPosition = elementT3.getBoundingClientRect().top + scrollY + elementT3Height;
        if (scrollPosition > elementPosition) {
        return true;
        }
        return false;
    }

    // listen for scroll event and call animate function
    window.addEventListener('scroll', function () {
        // is element in view?
        if (inViewT1()) {
            // element is in view, add class to element
            elementT1.style.cssText = 'margin-right: 140px; background-color: #121212a5; animation: ct1anim 7s;';
        }
        if (inViewT2()) {
            // element is in view, add class to element
            elementT2.style.cssText = 'margin-right: -140px; background-color: #121212a5; animation: ct2anim 7s;';
        }
        if (inViewT3()) {
            // element is in view, add class to element
            elementT3.style.cssText = 'font-size: 0em; font-weight: 200; -webkit-text-stroke: 0px; animation: slashanim 7s; background-color: #121212; opacity: 0;';
        }
    });



    // CANVAS
    // Get the canvas element
    let canvas = document.getElementById("canva1");
    // Get the context
    let ctx = canvas.getContext("2d");
    // Create the video - can use any video url
    let video = document.createElement("video");
    video.src = "./loop3.mp4";
    video.muted = "muted";
    video.play();
    // Set the video to loop
    video.loop = true;

    // Create a function to draw frames on the canvas
    let draw = function () {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    // Repeat the draw loop
    requestAnimationFrame(draw);
    };
    
    // Call the draw loop
    draw();
 }



 // CALENDAR PAGE
 if(document.querySelector('title').text == "Calendar | GYMDRP"){
    window.onload = () => {setTimeout(() => {}, 1500);};
    const calendar = document.querySelector(".calendar");
    const date = document.querySelector(".date");
    const daysContainer = document.querySelector(".days");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const eventDay = document.querySelector(".event-day");
    const eventDate = document.querySelector(".event-date");
    const eventsContainer = document.querySelector(".events");
    var eventsArr = [];
    const sheetID = '1jspIx1WHPlrgfWq40yWH1_LHjxz2BOAXy7BBVV9baKM';
    const baseUrl = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
    const sheetName = 'Sheet1';
    const FinalUrl = `${baseUrl}&sheet=${sheetName}`;

    async function readSheet(){
        fetch(FinalUrl)
            .then(response => response.text()) 
            .then((data) => {
            let dataStr = data.toString();
            let dataScrapped = dataStr.match(/v\":\"(.*)\"\}\]/);
            let transfo1 = dataScrapped[1];
            let transfo2 = (transfo1.replaceAll('\\u0022','\"')).replaceAll('\\u003e','>');
            let transfo3 = transfo2.replace(/`/g, '"');
            let transfo4 = [transfo3];
            eventsArr = JSON.parse('[' + transfo4[0].split('?') + ']');
            })
    }
    readSheet();

    let today = new Date();
    let activeDay;
    let month = today.getMonth();
    let year = today.getFullYear();

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    function initCalendar() {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const prevLastDay = new Date(year, month, 0);
        const prevDays = prevLastDay.getDate();
        const lastDate = lastDay.getDate();
        const day = firstDay.getDay();
        const nextDays = 7 - lastDay.getDay() - 1;

        date.innerHTML = months[month] + " " + year;

        let days = "";

        for(let y = day; y > 0; y--){
            days += `<div class="day prev-date">${prevDays - y + 1}</div>`;
        }

        for(let y = 1; y <= lastDate; y++){

            // check if event present on day
            let event = false;
            eventsArr.forEach((evenObj) => {
                if(evenObj.day == y && evenObj.month == month+1 && evenObj.year == year){
                    event = true;
                }
            });

            if(y == new Date().getDate() && year == new Date().getFullYear() && month == new Date().getMonth()){
                activeDay = y;
                getActiveDay(y);
                updateEvents(y);
                
                if(event){
                    days += `<div class="day today active event">${y}</div>`;
                }
                else{
                    days += `<div class="day today active">${y}</div>`;
                }
                
            }
            else{
                if(event){
                    days += `<div class="day event">${y}</div>`;
                }
                else{
                    days += `<div class="day">${y}</div>`;
                }
                
            }
        }

        for(let y = 1; y <= nextDays; y++){
            days += `<div class="day next-date">${y}</div>`;
        }

        daysContainer.innerHTML = days;

        addListener();
    }

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    delay(750).then(() => initCalendar());

    // previous month
    function prevMonth(){
        month--;
        if(month < 0){
            month = 11;
            year--;
        }
        initCalendar();
    }

    // next month
    function nextMonth(){
        month++;
        if(month > 11){
            month = 0;
            year++;
        }
        initCalendar();
    }

    // add actions on previous and next months
    prev.addEventListener("click", prevMonth);
    next.addEventListener("click", nextMonth);

    // listener
    function addListener(){
        const days = document.querySelectorAll(".day");
        days.forEach((day) => {
            day.addEventListener("click", (e) => {
                // set curr. day as active day
                activeDay = Number(e.target.innerHTML);
                // call active day after click
                getActiveDay(e.target.innerHTML);
                updateEvents(Number(e.target.innerHTML));
                // remove active
                days.forEach((day) => {
                    day.classList.remove("active");
                });
                // if prev. month day clicked
                if(e.target.classList.contains("prev-date")){
                    prevMonth();

                    setTimeout(() => {
                        const days = document.querySelectorAll(".day");
                        days.forEach((day) => {
                            if(!day.classList.contains("prev-date") && day.innerHTML == e.target.innerHTML){
                                day.classList.add("active");
                            }

                        });
                    }, 100);
                // if next month clicked
                } else if(e.target.classList.contains("next-date")){
                    nextMonth();

                    setTimeout(() => {
                        const days = document.querySelectorAll(".day");
                        days.forEach((day) => {
                            if(!day.classList.contains("next-date") && day.innerHTML == e.target.innerHTML){
                                day.classList.add("active");
                            }

                        });
                    }, 100);
                // if current month clicked
                } else {
                    e.target.classList.add("active");
                }

            })
        });
    }

    // show active event & day
    function getActiveDay(date){
        const day = new Date(year, month, date);
        const dayName = day.toString().split(" ")[0];
        eventDay.innerHTML = dayName;
        eventDate.innerHTML = date + " " + months[month] + " " + year;
    }

    function openWindow(url){
        window.open(url, "_blank", "noopener noreferrer");
    }
    // show events of that day
    function updateEvents(date){
        let events = "";
        eventsArr.forEach((event) => {
            if(date == event.day && month+1 == event.month && year == event.year){
                event.events.forEach((event) => {
                    events += `
                    <div class="event" onclick="openWindow('${event.url}')">
                        <div class="title">
                            <i class="fas fa-circle"></i>
                            <h3 class="event-title">${event.title}</h3>
                        </div>
                        <div class="event-time">
                            <span class="event-time">${event.time}</span>
                        </div>`;
                    event.desc.forEach((item) => {
                        events += `
                        <div class="event-desc">
                            <span class="event-desc">${item}</span>
                        </div>`;
                    });
                    events += `</div>`;
                });
            }
        });
        if(events == ""){
            events = `
            <div class="no-event">
                <h3>No drops or restocks.</h3>
            </div>
            `;
        }
        eventsContainer.innerHTML = events;
    }
 }



// BACKGROUND FADE IN / FADE OUT
function fadeIn(el, time) {
    el.style.opacity = 0;
    var last = +new Date();
    var tick = function() {
        el.style.opacity = +el.style.opacity + (new Date() - last) / time;
        last = +new Date();
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}
function fadeOut(el, time) {
    el.style.opacity = 1;
    var last = +new Date();
    var tick = function() {
        el.style.opacity = +el.style.opacity - (new Date() - last) / time;
        last = +new Date();
        if (+el.style.opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}



// POPUP
function popupToggleOn(){
    const popup = document.getElementById("popup");
    const mask = document.getElementById("page-mask");
    popup.classList.toggle("active");
    mask.style.visibility = "visible";
    fadeIn(mask,100);
}
function popupToggleOff(){
    const popup = document.getElementById("popup");
    const mask = document.getElementById("page-mask");
    popup.classList.toggle("active");
    mask.style.visibility = "hidden";
    fadeOut(mask,100)
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbyLvZzBurCObS9M0L6OV150-_iV1rloMznwlU8Jg3EtTevu_cIb_VTYQv8n5wgnyzvz/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');
const submitbx = document.getElementById('submitbox');
form.addEventListener('submit', e => {
    submitbx.innerHTML = "";
    msg.innerHTML = "&#9203;";
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "You're in";
            console.log('Email successfully sent.');
            //setTimeout(function(){
            //    msg.innerHTML = "";
            //},4500);
            form.reset();
        })
        .catch(error => console.error('Error sending the email.'))
});