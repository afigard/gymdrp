/* LIST OF REGISTERED WEBSITES:

Alphalete
ASRV
Breathedivinity
Cbum Fitness
CIVIL REGIME
DARC SPORT
Elysium Athletic
GYMREAPERS
Gymshark
Huge Supplements
Imperial Strength Co.
INAKA
IRONWILLED
Kill Crew
LET THE DOG EAT
Mentality
Raw Nutrition
RawGear
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
sr.reveal('.firstp', {delay: 500, origin: "left"});
sr.reveal('.secondp', {delay: 1600, origin: "left"});
sr.reveal('.lastp', {delay: 2700, origin: "left"});

sr.reveal('.sq1', {delay: 450});
sr.reveal('.sq2', {delay: 500});
sr.reveal('.sq3', {delay: 550});
sr.reveal('.sq4', {delay: 600});
sr.reveal('.sq5', {delay: 650});
sr.reveal('.sq6', {delay: 700});
sr.reveal('.sq7', {delay: 750});

sr.reveal('.sq8', {delay: 1000});
sr.reveal('.sq9', {delay: 1050});
sr.reveal('.sq10', {delay: 1100});
sr.reveal('.sq11', {delay: 1150});
sr.reveal('.sq12', {delay: 1200});
sr.reveal('.sq13', {delay: 1250});
sr.reveal('.sq14', {delay: 1300});

sr.reveal('.sq15', {delay: 1550});
sr.reveal('.sq16', {delay: 1600});
sr.reveal('.sq17', {delay: 1650});
sr.reveal('.sq18', {delay: 1700});
sr.reveal('.sq19', {delay: 1750});
sr.reveal('.sq20', {delay: 1800});
sr.reveal('.sq21', {delay: 1850});

sr.reveal('.sq22', {delay: 2100});
sr.reveal('.sq23', {delay: 2150});
sr.reveal('.sq24', {delay: 2200});
sr.reveal('.sq25', {delay: 2250});
sr.reveal('.sq26', {delay: 2300});
sr.reveal('.sq27', {delay: 2350});
sr.reveal('.sq28', {delay: 2400});

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



// MAIN PAGE CANVAS
 if(document.querySelector('title').text == "GYMDRP"){
    var c = document.getElementById('c');
    var cxt = c.getContext("2d");
    
    var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
    chinese = chinese.split("");
    
    var font_size =10;
    var columns = c.width/font_size; 
    
    var drops = [];
    
    for(var x=0;x<columns;x++){
    drops[x]=1;
    }
    
    function draw(){
    cxt.fillStyle="rgba(0,0,0,0.05)";
    cxt.fillRect(0,0,c.width,c.height);
    
    cxt.fillStyle = "#4c64ff8a";
    cxt.font = font_size+'px arial';
    
    
    for(var i=0;i<drops.length;i++){
        var text = chinese[Math.floor(Math.random()*chinese.length)];
        cxt.fillText(text,i*font_size,drops[i]*font_size);
        
        if(drops[i]*font_size>c.height && Math.random() >0.975)
        drops[i]=0;
        
        drops[i]++;
    }
    
    }
    setInterval(draw,50);
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
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "You're in";
            console.log('Email successfully sent.');
            setTimeout(function(){
                msg.innerHTML = "";
            },4500);
            form.reset();
        })
        .catch(error => console.error('Error sending the email.'))
});