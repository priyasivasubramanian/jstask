//positive or not
function pos() {
  var a = Number(document.getElementById("inputbox").value);
  var result = "";
  if (1 <= a && a <= 100) {
    result = "this is positive number";
  } else {
    result = "this is negative number";
  }
  document.getElementById("res").innerHTML = result;
}

//greatest number
function greatest() {
  var c = Number(document.getElementById("number1").value);
  var d = Number(document.getElementById("number2").value);
  var final = "";

  if (c > d) {
    final = c + "" + " is the  greatest";
  } else {
    final = d + "" + "is the greatest";
  }
  document.getElementById("para").innerHTML = final;
}

//2 input smallest number

function small() {
  var e = Number(document.getElementById("num1").value);
  var f = Number(document.getElementById("num2").value);
  var g = Number(document.getElementById("num3").value);
  var res = Math.min(e, f, g);

  document.getElementById("small").innerHTML = res;
}

// 3 input smallest number
function math() {
  var o = Number(document.getElementById("odd-even").value);
  var math;

  if (o % 2 == 0) {
    math = o + " is an even number";
  } else {
    math = o + " is an odd number";
  }
  document.getElementById("para2").innerHTML = math;
}

//task 2
//1) Enter the bill amount
function billAmount() {
  var amount = Number(document.getElementById("bill").value);
  var final = "";
  if (amount > 2000) {
    final = amount - amount * (10 / 100);
  } else {
    final = amount;
  }
  document.getElementById("bill3").innerHTML =
    "the bill amount is" + " " + final;
}
// 2) Apply a hike of 30%
function hike() {
  var salary = Number(document.getElementById("salary").value);
  var Exp = Number(document.getElementById("Experience").value);
  let result = "";
  if (salary < 30000 && Exp > 3) {
    result = salary + salary * (30 / 100);
  } else {
    result = "Not eligible for getting Hike";
  }
  document.getElementById("hikeCheck").innerHTML =
    "The Salary is" + " " + result;
}
// 3-apply 3 percent service charges
function serviceCharges() {
  let amount = Number(document.getElementById("Amt").value);
  let cash = Number(document.getElementById("cash").value);
  let mode = amount;
  if (cash == "card") {
    mode += amount * (8 / 100);
  } else {
    mode += amount * (5 / 100);
  }
  document.getElementById("gst").innerHTML =
    "Final Bill Amount is" + " " + mode;
}
// 4-Medical leave
function medicalLeave() {
  document.querySelector(".Check1").addEventListener("click", () => {
    var days = Number(document.querySelector(".days").value);
    var daysAttended = Number(document.querySelector(".dayAttended").value);
    var Leave = Number(document.querySelector(".medicalLeave").value);
    let click = "";
    var averageDays = days * 0.75;
    if (daysAttended > averageDays || Leave == "Yes") {
      click = "You are Eligible for the Leave";
    } else {
      click = "Not eligible for Leave";
    }
    document.querySelector(".Medical").innerHTML = click;
  });
}
// Grade system

function gradeSystem() {
  var mark = Number(document.getElementById("grade").value);
  var Grade = "";
  if (mark >= 90 && mark <= 100) {
    Grade = "A Grade";
  } else if (mark >= 80 && mark < 90) {
    Grade = "B Grade";
  } else if (mark >= 70 && mark < 80) {
    Grade = "C Grade";
  } else if (mark >= 60 && mark < 70) {
    Grade = "D Grade";
  } else if (mark >= 50 && mark < 60) {
    Grade = "E Grade";
  } else {
    Grade = "you're fail";
  }
  document.getElementById("system").innerHTML = Grade;
}
// directions
function reset(){
  document.querySelector(".El").style.backgroundColor="green"
  document.querySelector(".Er").style.backgroundColor="green"
  document.querySelector(".Sr").style.backgroundColor="green"
  document.querySelector(".Sl").style.backgroundColor="green"
  document.querySelector(".wr").style.backgroundColor="green"
  document.querySelector(".wl").style.backgroundColor="green"
  document.querySelector(".Nr").style.backgroundColor="green"
  document.querySelector(".Nl").style.backgroundColor="green"
  
}
document.querySelector(".north").addEventListener("click",()=>{
  reset()
  document.querySelector(".El").style.backgroundColor="red"
  document.querySelector(".Sr").style.backgroundColor="red"
  document.querySelector(".wr").style.backgroundColor="red"
  
})
document.querySelector(".east").addEventListener("click",()=>{
  reset()
  document.querySelector(".Sr").style.backgroundColor="red"
  document.querySelector(".wr").style.backgroundColor="red"
  document.querySelector(".Nl").style.backgroundColor="red"
  
})
document.querySelector(".south").addEventListener("click",()=>{
  reset()
  document.querySelector(".wr").style.backgroundColor="red"
  document.querySelector(".Nl").style.backgroundColor="red"
  document.querySelector(".El").style.backgroundColor="red"
  
})
document.querySelector(".west").addEventListener("click",()=>{
  reset()
  document.querySelector(".Nl").style.backgroundColor="red"
  document.querySelector(".El").style.backgroundColor="red"
  document.querySelector(".Sr").style.backgroundColor="red"
  
})

// slot booking
function carBooking() {
  var carNumber = document.getElementById("car_number").value;
  var slotBooking = document.getElementById("slot_selection").value;
  var final = "";

  //slotBooking value = slot-1

  //id of slot is slot1
  var userBookedSlotId = slotBooking;
  userBookedSlotId = "slot" + userBookedSlotId.replace("slot-", ""); // compare div and select tag
  var choosedSlot = document.getElementById(userBookedSlotId);
  var isBooked = choosedSlot.getAttribute("isBooked");
  if (isBooked == "false") {
    choosedSlot.classList.remove("empty");
    choosedSlot.classList.add("booked");
    choosedSlot.innerText = carNumber;
    choosedSlot.setAttribute("isBooked", "true");
  } else {
    var error = slotBooking + "is already booked";
    document.getElementById("msgShow").innerHTML = error;
  }
}

function removeSlot() {
  var slotBooking = document.getElementById("slot_selection").value;
  var userBookedSlotId = slotBooking;
  userBookedSlotId = "slot" + userBookedSlotId.replace("slot-", ""); // compare div and select tag
  var choosedSlot = document.getElementById(userBookedSlotId);
  choosedSlot.classList.remove("booked");
  choosedSlot.classList.add("empty");
}
// reverse the number
function revert() {
  let n = Number(document.getElementById("reverse").value);
  let reverse = 0;
  let remainder;

  while (n > 0) {
    remainder = n % 10; //get remainder
    reverse = reverse * 10 + remainder;
    n = Math.floor(n / 10);
  }

  console.log(reverse);
}

//chatbot

function chatbot(bot) {
  let enter = document.getElementById("enter").value;
  // let para = document.getElementById("change").value;
  switch (bot) {
    case "check":
      var balancedisplay = document.getElementById("balanceDisplay");
      balancedisplay.innerHTML = "your current balance is Rs.299";
      setTimeout(function () {
        balancedisplay.innerHTML = "";
      }, 1000);

      break;

    case "plans":
      var planDis = document.getElementById("planDisplay");
      planDis.innerText = "rs.299 2GB/- validity: 28days";
      setTimeout(function () {
        planDis.innerText = "";
      }, 1000);

      break;

    case "pay":
      let foo = prompt("Enter the amount");
      let bar = confirm("Confirm or deny");
      console.log(foo, bar);
      var paydisplay = document.getElementById("payDisplay");
      paydisplay.innerHTML = foo + "recharge mudinjitu ipo kilambuu!!!";
      setTimeout(function () {
        paydisplay.innerHTML = "";
      }, 1000);
      break;

    default:
      document.getElementById("invalid").innerHTML =
        "invalid message da mentalu olunga kudu";
  }
}
