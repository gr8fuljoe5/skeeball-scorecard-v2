const settings = {
  token: document.cookie.substring(document.cookie.indexOf('XSRF-TOKEN')+11),
  urls: {
    takes : 'http://localhost:9000/take'
  }
}

export default settings
