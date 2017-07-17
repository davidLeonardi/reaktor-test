export default class Edge {
  constructor(from, to) {
    this._from = from;
    this._to = to;
    this._id = `${from}_${to}`;
  }

  getFrom() {
    return this._from;
  }

  getTo() {
    return this._to;
  }

  getId() {
    return this._id;
  }
}
