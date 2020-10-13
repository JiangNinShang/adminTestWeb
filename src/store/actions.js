import axios from 'axios'
export default {
  login(User) {
    axios.post('wdnmd/login', User).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
}
