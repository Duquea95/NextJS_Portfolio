import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import getCurrentDayHook from '../getCurrentDay';

const CreateUserCookies = () =>{
  const [currentDay,currentMonth, currentMonthName, currentYear, currentSecond, currentMinute, currentHour, dayPeriod] = getCurrentDayHook();

  setCookie('date_visited', currentMonth+'-'+currentDay+'-'+currentYear);
  setCookie('time_visited', currentHour+'-'+currentMinute+'-'+currentSecond+'-'+dayPeriod);

  console.log(getCookies())
}

export default CreateUserCookies;