if("serviceWorker" in navigator) {
  navigator.serviceWorker.register('sw.js').then((reg) => {
    // :)
  }).catch(function(err) {
    // :/
  })
}