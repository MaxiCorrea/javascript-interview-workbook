// Default Method Syntax Getter & Setter

let trunck = {
  color: "red",
  getColor: function () {
    return this.color;
  },
  setColor : function (color) {
      this.color = color;
  }
};
console.log(trunck.getColor());
trunck.setColor("blue");
console.log(trunck.getColor());
