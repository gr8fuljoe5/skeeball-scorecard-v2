import _ from 'lodash';

export function errorPath(path, errors) {
  const paths = _.isArray(path) ? path : [path]
  if (errors) {
    for (let i = 0; i < paths.length; i++) {
      if (errors[paths[i]]) {
        return 'error'
      }
    }
  }
  return '';
}
