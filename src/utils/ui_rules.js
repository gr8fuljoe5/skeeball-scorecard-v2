/*
 * CANADA
 */

export function canadaPrincipleBranchRule(country, attributeName, val) {
  country[attributeName] = val

  if (val === true) {
    country.osfi_entity_status_branch_frfi = true
  } else {
    country.osfi_entity_status_branch_frfi = false
  }
}

/*
 * EU
 */

/*
 * JAPAN
 */

/*
 * AANA Automatic Rules
 */
export function setAanaThreshold(averageNotional, attributeName, val) {
  averageNotional[attributeName] = val

  if (attributeName === 'threshold' && val === 'ABOVE') {
    averageNotional.threshold_estimate = 'NONE'
  }

  if (attributeName === 'threshold' && (val === 'SEP_REPORT_BY_PARENT' || val === 'SEP_REPORT_BY_PERSON')) {
    averageNotional.threshold_estimate = 'DECLINE'
  }
}
