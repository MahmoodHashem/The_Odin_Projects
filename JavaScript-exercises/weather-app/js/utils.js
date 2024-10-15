 function convertTo12HourFormat(time24) {
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours) % 12 || 12;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    return `${hour}:${minutes.padStart(2, '0')} ${ampm}`;
}

 function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
}

function getCurrentDateString() {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return new Date().toLocaleDateString('en-US', options);
}

export {convertTo12HourFormat, formatDate, getCurrentDateString}