class Tab {
  constructor(number, values) {
    this.number = number;
    this.values = values;
  }

  tabuada() {
    return this.values.map((item) => {
      return {
        numero: this.number,
        value: item,
        resultado: this.number * item,
      };
    });
  }
}

const x = new Tab(2, [2, 4, 6]);

console.log(x.tabuada());
