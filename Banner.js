var el = document.querySelector('.some-element');

od = new Odometer({
  el: el,
  value: 333555,

  // Any option (other than auto and selector) can be passed in here
  format: '',
  theme: 'digital'
});
