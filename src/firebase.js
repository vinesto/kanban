import firebase from 'firebase'
var config = {
    apiKey: 'AIzaSyBZiJNNB7A1kNsOzz4i8uTMidlA8Fmiu1g',
    authDomain: 'kanban-eb23f.firebaseapp.com',
    databaseURL: 'https://kanban-eb23f.firebaseio.com',
    projectId: 'kanban-eb23f',
    storageBucket: 'kanban-eb23f.appspot.com',
    messagingSenderId: '581267612466'
}
firebase.initializeApp(config)
const db = firebase.database()

export default db