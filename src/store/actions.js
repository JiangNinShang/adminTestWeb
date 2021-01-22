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
  },
  getName(context) {
    let url = "wdnmd/getName";
    return new Promise((resolve, reject) => {
      axios.get(url).then(tes => {
        resolve(tes)
      }).catch((err) => {
        reject(error)
        console.log(err)
      })
    })
  },
  getbyName(context, name) {
    let params = new FormData();
    params.append('name', name);
    let url = "wdnmd/getbyName";
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(tes => {
        resolve(tes)
      }).catch((err) => {
        reject(error)
        console.log(err)
      })
    })
  },
  updatePwd(context, form) {
    let params = new FormData();
    params.append('name', form.name);
    params.append('pwd', form.pwd);
    let url = "wdnmd/updataPwd";
    return new Promise((resolve, reject) => {
      axios.post(url,params).then(tes => {
        resolve(tes)
      }).catch((err) => {
        reject(error)
        console.log(err)
      })
    })
  },
  getbypwd(context, name){

  }
}
