import axios from 'axios'
export default {
  storeLocalStore (state) {
    window.localStorage.setItem('user', JSON.stringify(state))
  },
  giao (state, value) {
    let parmens = {
      'name': value.name,
      'pwd': value.pwd
    }
    axios.post('Employee/login', parmens).then((res) => { console.log(res.data) }).catch((err) => { console.log(err) })
  },
  select (state) {
    axios.get('Employee/select').then((res) => {
      state.users = res.data
    }).catch((err) => {
      console.log(err)
    })
  }
}
