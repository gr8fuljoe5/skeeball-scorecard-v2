// Convert text, when "content editable" is focused.
function convertContentFocus(e) {
  const el = e.target

  // Get placeholder.
  let placeholder = el.getAttribute('placeholder')
  placeholder.trim()
  placeholder = placeholder.replace(/\s+/g, ' ')

  // Get value.
  let value = el.innerHTML
  value = value.trim()
  value = value.replace(/\s+/g, ' ')

  // Is the value the placeholder?
  if (value === placeholder) {
    el.innerHTML = ''
  }
}

// Expose function.
export default convertContentFocus
