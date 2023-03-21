// Your code here
function createEmployeeRecord(input) {
  return {
    firstName: input[0],
    familyName: input[1],
    title: input[2],
    payPerHour: input[3],
    timeInEvents: [],
    timeOutEvents: [],
  }
}
function createEmployeeRecords(twoRows) {
  return twoRows.map(ele => {
    return createEmployeeRecord(ele)
  })
}

function createTimeInEvent(Obj, datstamp) {
  let store = {
    type: "TimeIn",
    hour: parseInt(datstamp.slice(10)),
    date: datstamp.slice(0, 10),
  }
  Obj.timeInEvents.push(store)
  return Obj
}

function createTimeInEvent(Obj, datstamp) {
  let store = {
    type: "TimeIn",
    hour: parseInt(datstamp.slice(10)),
    date: datstamp.slice(0, 10),
  }
  Obj.timeInEvents.push(store)
  return Obj
}

function createTimeOutEvent(Obj, datstamp) {
  let store = {
    type: "TimeOut",
    hour: parseInt(datstamp.slice(10)),
    date: datstamp.slice(0, 10),
  }
  Obj.timeOutEvents.push(store)
  return Obj
}

function hoursWorkedOnDate(Obj, dateform) {
  let time = Obj.timeOutEvents.find(e => e.date === dateform)
  let timeIn = Obj.timeInEvents.find(e => e.date === dateform)
  let elapsed = (time.hour - timeIn.hour) / 100;
  return elapsed
}

function wagesEarnedOnDate(Obj, dateform) {
  let hours = hoursWorkedOnDate(Obj, dateform);
  let muply = hours * Obj.payPerHour
  return muply;
}


let allWagesFor = function (Obj) {
  let eligibleDates = Obj.timeInEvents.map(function (e) {
    return e.date
  })

  let payable = eligibleDates.reduce((total, dateform) => {
    return total + wagesEarnedOnDate(Obj, dateform)
  }, 0);

  return payable
}

function calculatePayroll(employee) {
  let total = employee.reduce((acumalte, employee) => {
    return acumalte + allWagesFor(employee)
  },0)
  return total;
}