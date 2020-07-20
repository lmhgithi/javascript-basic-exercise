export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.
  constructor(x1, y1) {
    this._x = x1;
    this._y = y1;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  static plus(v1, v2) {
    const resOfPlus = {};
    resOfPlus.x = v1._x + v2._x;
    resOfPlus.y = v1._y + v2._y;
    return resOfPlus;
  }

  static minus(v1, v2) {
    const resOfMinus = {};
    resOfMinus.x = v1._x - v2._x;
    resOfMinus.y = v1._y - v2._y;
    return resOfMinus;
  }

  distance() {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  }
}
