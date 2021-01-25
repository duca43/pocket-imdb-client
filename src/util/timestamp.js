const milisecondsMin = 60 * 1000
const milisecondsHour = milisecondsMin * 60
const milisecondsDay = milisecondsHour * 24
const milisecondsMonth = milisecondsDay * 30
const milisecondsYear = milisecondsDay * 365

export function getTimestampRelativeDiff(timestamp) {
    
    const diff = new Date().getTime() - new Date(timestamp).getTime();

    if (diff < milisecondsMin) {
        return getTimestampRelativeDiffDesc(diff, 1000, 'second');
    }

    if (diff < milisecondsHour) {
        return getTimestampRelativeDiffDesc(diff, milisecondsMin, 'minute');
    }

    if (diff < milisecondsDay) {
        return getTimestampRelativeDiffDesc(diff, milisecondsHour, 'hour');
    }

    if (diff < milisecondsMonth) {
        return getTimestampRelativeDiffDesc(diff, milisecondsDay, 'day');
    }

    if (diff < milisecondsYear) {
        return getTimestampRelativeDiffDesc(diff, milisecondsMonth, 'month');
    }

    return getTimestampRelativeDiffDesc(diff, milisecondsYear, 'year');
}

function getTimestampRelativeDiffDesc(diff, miliseconds_period, word) {
    const period = parseInt(diff / miliseconds_period, 10);
    const period_word = period > 1 ? word + 's' : word;
    return period + ' ' + period_word + ' ago';
}