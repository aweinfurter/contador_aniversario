AOS.init();

const eventDate = new Date('feb 22, 2024 20:00:00')
const timeStampEvent = eventDate.getTime()

const countHours = setInterval(function(){

    const now = new Date()
    const timeStampNow = now.getTime()

    const timeForEvent = timeStampEvent - timeStampNow

    const dayMs = 1000 * 60 * 60 * 24
    const hoursMs = 100 * 60 * 60
    const minutsMs = 1000 * 60

    const dayToEvent = Math.floor(timeForEvent / dayMs)
    const hoursToEvent = Math.floor((timeForEvent % dayMs) / hoursMs)
    const minutesToEvent = Math.floor((timeForEvent % hoursMs) / minutsMs)
    const secondsToEvent = Math.floor((timeForEvent % minutsMs) / 1000)

    document.getElementById('counter').innerHTML = `${dayToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`

    if (timeForEvent < 0) {
        clearInterval(countHours)
        document.getElementById('counter').innerHTML = '0 dias'
    }
})