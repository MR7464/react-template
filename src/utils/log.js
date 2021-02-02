class log {
  constructor(debug) {
    this.debug = debug
  }
  then(content) {
    if (!this.debug) return
    console.log(content)
  }
}
export default log
