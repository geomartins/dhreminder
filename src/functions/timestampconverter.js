
const timestampConverter = (timestamp) => {
  if (!timestamp) {
    return
  }
  const javascriptDate = timestamp.toDate()
  return formatDate(javascriptDate)
  // day = javascript_date.getDate();
  // month = javascript_date.getMonth()+1;
}

const formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) { month = '0' + month }
  if (day.length < 2) { day = '0' + day }

  return [year, month, day].join('-')
}

const humanReadable = (value) => {
  if (!value) return ''
  value = value.toString()
  var dateData, dateObject, dateReadable

  dateData = value.replace(/-/g, '/').replace('T', ' ').replace(/\..*|\+.*/, '') // For example

  dateObject = new Date(Date.parse(dateData))

  dateReadable = dateObject.toDateString()

  return dateReadable
}

export {
  timestampConverter,
  formatDate,
  humanReadable
}
