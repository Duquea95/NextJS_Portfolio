const getCurrentDayHook = () =>{

  const date = new Date();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const currentMonth = date.getMonth();
  const currentMonthName = months[date.getMonth()];
  const currentDay = date.getDate();
  const currentYear = date.getFullYear();
  // const currentTime = date.toLocaleTimeString();
  const currentSecond = date.getSeconds();
  const currentMinute = date.getMinutes();
  let currentHour = date.getHours();
  let dayPeriod = 'AM'
  if(currentHour > 12){
    currentHour = currentHour - 12;
    dayPeriod = 'PM'
  }
  

  return [currentDay,currentMonth, currentMonthName, currentYear, currentSecond, currentMinute, currentHour, dayPeriod];
}

export default getCurrentDayHook