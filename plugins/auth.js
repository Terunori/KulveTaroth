import firebase from '~/plugins/firebase'

function auth() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(party => {
      resolve(party || false)
    })
  })
}
export default auth
