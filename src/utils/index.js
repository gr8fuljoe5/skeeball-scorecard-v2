// Import individual files.
import alphanumeric from './_alphanumeric'
import bind from './_bind'
import convertContentEditable from './_convert_content_editable'
import convertContentFocus from './_convert_content_focus'
import convertOnPaste from './_convert_on_paste'
import convertToMarkup from './_convert_to_markup'
import convertToText from './_convert_to_text'
import exists from './_exists'
import getLocalizedDate from './_get_localized_date'
import log from './_log'
import navigate from './_navigate'
import parseFormData from './_parse_form_data'
import placeholder from './_placeholder'
import save from './_save'
import stop from './_stop'
import title from './_title'
import today from './_today'
import trim from './_trim'
import unique from './_unique'

// Bundle up methods.
const utils = {
  alphanumeric,
  bind,
  convertContentEditable,
  convertContentFocus,
  convertOnPaste,
  convertToMarkup,
  convertToText,
  exists,
  getLocalizedDate,
  log,
  navigate,
  parseFormData,
  placeholder,
  save,
  stop,
  title,
  today,
  trim,
  unique
}

// Expose object.
export default utils
