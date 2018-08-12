import { Time } from "./state/state";

export const getDisplayTime = (time: Time) => {
    const hours = time.hours < 10 ? '0' + time.hours : time.hours;
    const minutes = time.minutes < 10 ? '0' + time.minutes : time.minutes;
    const seconds = time.seconds < 10 ? '0' + time.seconds : time.seconds;
    return hours + ':' + minutes + ':' + seconds
};
