import localforage from 'localforage'
class local {
  get(key, cb) {
    return localforage.getItem(key, cb)
  }
  set(key, value, cb) {
    localforage.setItem(key, value, cb)
  }
  remove(key, cb) {
    localforage.removeItem(key, cb)
  }
}
export default new local()
