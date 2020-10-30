import axios from 'axios'
export default {
  login(context, form) {
    let url = "wdnmd/login";
    return new Promise((resolve, reject) => {
      axios.post(url, form).then(tes => {
        resolve(tes)
      }).catch((err) => {
        reject(error)
        console.log(err)
      })
    })
  },
  register(context, form) {
    let url = "wdnmd/register";
    return new Promise((resolve, reject) => {
      axios.post(url, form).then(tes => {
        resolve(tes)
      }).catch((err) => {
        reject(error)
        console.log(err)
      })
    })
  }
}
