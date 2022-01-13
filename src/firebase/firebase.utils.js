import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyCV1OUhJou8AVTxuh5lSn0Z63rCr_yfuHU",
	authDomain: "e-com-01-46d63.firebaseapp.com",
	projectId: "e-com-01-46d63",
	storageBucket: "e-com-01-46d63.appspot.com",
	messagingSenderId: "363021185775",
	appId: "1:363021185775:web:82bec2d01ea9dcebf9211a",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
