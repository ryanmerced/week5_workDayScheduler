let currentTimeEl = $('#currentDay');
let currentTime = '';
let currentHour = '';

getCurrentTime = () => {
    currentTime = moment();
    currentHour = Number(moment().format('H'));
    currentTimeEl.text(currentTime);
}

setInterval(getCurrentTime, 1000);

let plannerEl = $('#planner'); 

let plannerObj = [
    {   
        blockHour: moment().hour(9).minute(0).second(0).format('H'),
        displayHour: moment().hour(9).minute(0).second(0).format('h A'),
        appointment: ''
    },
    {
        blockHour: moment().hour(10).minute(0).second(0).format('H'),
        displayHour: moment().hour(10).minute(0).second(0).format('h A'),
        appointment: ''
    },
    {
        blockHour: moment().hour(11).minute(0).second(0).format('H'),
        displayHour: moment().hour(11).minute(0).second(0).format('h A'),
        appointment: ''
    },
    {
        blockHour: moment().hour(12).minute(0).second(0).format('H'),
        displayHour: moment().hour(12).minute(0).second(0).format('h A'),
        appointment: ''
    },
    {
        blockHour: moment().hour(13).minute(0).second(0).format('H'),
        displayHour: moment().hour(13).minute(0).second(0).format('h A'),
        appointment: ''
    },
    {
        blockHour: moment().hour(14).minute(0).second(0).format('H'),
        displayHour: moment().hour(14).minute(0).second(0).format('h A'),
        appointment: ''
    },
    {
        blockHour: moment().hour(15).minute(0).second(0).format('H'),
        displayHour: moment().hour(15).minute(0).second(0).format('h A'),
        appointment: ''
    },
    {
        blockHour: moment().hour(16).minute(0).second(0).format('H'),
        displayHour: moment().hour(16).minute(0).second(0).format('h A'),
        appointment: ''
    },
    {
        blockHour: moment().hour(17).minute(0).second(0).format('H'),
        displayHour: moment().hour(17).minute(0).second(0).format('h A'),
        appointment: ''
    }
]

renderHourBlocks = () => {
    let hourBGColor = '';
    for (let i = 0; i < plannerObj.length; i++) {
        if (currentHour < plannerObj[i].blockHour) {

            console.log(plannerObj[i].blockHour + ' is future');

            hourBGColor = "bg-future";
        }   
        else if (currentHour > plannerObj[i].blockHour) {

            console.log(plannerObj[i].blockHour + ' is past');

            hourBGColor = "bg-past";
        }   
        else if (currentHour == plannerObj[i].blockHour) {
            console.log(plannerObj[i].blockHour + ' is present');

            hourBGColor = "bg-present";
        }

        let key = i + 9;
        key = 'hour-' + key
        console.log(key);

        updateAppointment = () => {
            plannerObj[i].appointment = localStorage.getItem(key);

            if (plannerObj[i].appointment === null) {
                plannerObj[i].appointment = '';
            };
        }

        updateAppointment();

        plannerEl.append(
            `
            <div class=" input-group row">
                <div class="col input-group-text text-center" type="text">${plannerObj[i].displayHour}</div>
                <textarea class="col-8 border ${hourBGColor}" id='textarea${i}' placeholder="" aria-label="Placceholder Event">${plannerObj[i].appointment}</textarea>
                <button class="col btn btn-success" type="button" id="saveBtn${i}" data-hour="${i + 9}"><i class="fa-solid fa-floppy-disk"></i></button>
              </div>
            `
        )
    }
}


excJS = () => {
console.log('The document has loaded!')

getCurrentTime();

renderHourBlocks();

var containerEl = document.querySelector(".container");

containerEl.addEventListener("click", function(event) {
    console.log(event.target.id);
    var key = event.target.id;
    var textEl = document.getElementById("input-"+key);
    console.log(textEl.value);
    localStorage.setItem("hour-"+key, JSON.stringify(textEl.value));
});
}

$(document).ready(excJS);