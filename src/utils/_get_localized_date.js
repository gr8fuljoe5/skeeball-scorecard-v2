import moment from 'moment'

function getLocalizedDate(dateString) {
  if (dateString && typeof dateString === 'string' && undefined !== dateString) {
    try {
      const m = moment(dateString);
      return m.format('LL')
    }
    catch (error) {
      console.debug('getLocalizedDate()', error) // eslint-disable-line no-console
      return 'Date Format Error'
    }
  }
  else {
    return 'N/A'
  }
}

// Expose function.
export default getLocalizedDate
