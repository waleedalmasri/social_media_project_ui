import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD94f5kgX6m_maQRVE4qwsrvEr06vWAyWY',
  authDomain: 'socialmediaui-90f8b.firebaseapp.com',
  databaseURL: 'https://socialmediaui-90f8b.firebaseio.com',
  projectId: 'socialmediaui-90f8b',
  storageBucket: 'socialmediaui-90f8b.appspot.com',
  messagingSenderId: '442682208107',
  appId: '1:442682208107:web:2f6a91f711747a53ffe62e',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
