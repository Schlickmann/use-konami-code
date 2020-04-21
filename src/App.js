module.exports =  {
  sum: function (a,b) { return a + b },
  total: function (shipping, subTotal) { return "$" + this.sum(shipping, subTotal) }
};