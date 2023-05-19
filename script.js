// LIST OF REGISTERED WEBSITES
/*
Alphalete
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
    delay: 110,
    duration: 3500,
    opacity: 1,
    origin: "left",
    distance: "55px",
    reset: false
});

sr.reveal('.main-text');
sr.reveal('.main-img');

sr.reveal('.container');

sr.reveal('.main-text-abt');
sr.reveal('.main-illu');



window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 750);

    // Warning! if 'a' elements are added, 'i < x' needs to be incremented.
    x = 4;
    if(document.querySelector('title').text == "GYMDRP - home"){
        x = 5;
    }

    for (let i = 0; i < x; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 750);
        });
    }
}

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



 // ------------- calendar begining -------------
 if(document.querySelector('title').text == "GYMDRP - the calendar"){
    const calendar = document.querySelector(".calendar");
    const date = document.querySelector(".date");
    const daysContainer = document.querySelector(".days");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const eventDay = document.querySelector(".event-day");
    const eventDate = document.querySelector(".event-date");
    const eventsContainer = document.querySelector(".events");
    var eventsArr = [];

    // read sheet beginning
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
    // read sheet end

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

    // fun. to add days
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

    // prev. month
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

    // add actions on prev. and next
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
                <h3>No releases for today.</h3>
            </div>
            `;
        }
        eventsContainer.innerHTML = events;
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyLvZzBurCObS9M0L6OV150-_iV1rloMznwlU8Jg3EtTevu_cIb_VTYQv8n5wgnyzvz/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById('msg');

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "thanks, you're in";
                console.log('Email successfully sent.');
                setTimeout(function(){
                    msg.innerHTML = "";
                },4500);
                form.reset();
            })
            .catch(error => console.error('Error sending the email.'))
    });
 }
 // --------------- calendar end ----------------
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