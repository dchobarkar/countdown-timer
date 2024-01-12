import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();

  if (timestampDayjs.isBefore(nowDayjs))
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    };
  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
  };
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
  const seconds = timestampDayjs.diff(nowDayjs, "second") % 60;
  return padWithZero(seconds, 2);
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
  const minutes = timestampDayjs.diff(nowDayjs, "minute") % 60;
  return padWithZero(minutes, 2);
}

function getRemainingHours(nowDayjs, timestampDayjs) {
  const hours = timestampDayjs.diff(nowDayjs, "hour") % 24;
  return padWithZero(hours, 2);
}

function getRemainingDays(nowDayjs, timestampDayjs) {
  const days = timestampDayjs.diff(nowDayjs, "day");
  return days.toString();
}

function padWithZero(number, minLength) {
  const numString = number.toString();
  if (numString.length >= minLength) return numString;

  return "0".repeat(minLength - numString.length) + numString;
}
