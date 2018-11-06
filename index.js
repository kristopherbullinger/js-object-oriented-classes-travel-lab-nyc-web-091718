class Driver {
  constructor (name, date) {
    this.name = name
    this.startDate = new Date (date)
  }

  yearsExperienceFromBeginningOf(year) {
    let currentDate = new Date(year,0,1)
    return parseInt((this.startDate - currentDate) / 1000 /60 / 60 /24 / 365)*-1
  }
}

class Route {
  constructor(startloc, endloc) {
    this.beginningLocation = startloc
    this.endingLocation = endloc
  }

  blocksTravelled(startloc, endloc) {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let horiz = eastWest.findIndex(location => location == this.beginningLocation.horizontal) - eastWest.findIndex(location => location == this.endingLocation.horizontal)
    let vert = this.beginningLocation.vertical - this.endingLocation.vertical
    horiz = (horiz > 1) ? horiz : horiz*-1
    vert = (vert > 1) ? vert : vert*-1
    return horiz + vert
  }

  estimatedTime(peak = false) {
    let peakTime = peak
    return (peakTime) ? (this.blocksTravelled(this.beginningLocation, this.endingLocation) / 2) : (this.blocksTravelled(this.beginningLocation, this.endingLocation)/ 3)
  }
}
