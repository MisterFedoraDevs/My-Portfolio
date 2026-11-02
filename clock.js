function updateClock() {
    const time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const now = new Date().toLocaleDateString('en-US', {
        timeZone: 'America/New_York',
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('localTimeAndDate').innerHTML = 
    `
        <h4>${time}</h4>
        <h4>${now}</h5>
    `;
}

updateClock();
setInterval (updateClock, 1000);