import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDpXkVDx-AYlVc-cLj-Q77x5LWpSE9MgRk",
    authDomain: "kander-project.firebaseapp.com",
    projectId: "kander-project",
    storageBucket: "kander-project.appspot.com",
    messagingSenderId: "463339837717",
    appId: "1:463339837717:web:bacb4843cb0319dd5ef11c",
    measurementId: "G-6D0N3ZEQ4S"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth } 

function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
           {user ? <Chat /> : <SignIn />}

    </div>
  );
}

export default App;
