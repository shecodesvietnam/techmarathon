import * as firebase from 'firebase';

const db = firebase
	.initializeApp({
		apiKey: process.env.FIREBASE_API_KEY,
		authDomain: 'shecodes-tm.firebaseapp.com',
		databaseURL: 'https://shecodes-tm.firebaseio.com',
		projectId: 'shecodes-tm',
		storageBucket: 'shecodes-tm.appspot.com',
		messagingSenderId: '89809771673',
		appId: '1:89809771673:web:8529950bae8346392cec08',
		measurementId: 'G-EKYBHL6HE5',
	})
	.firestore();

export const save = async (data) => {
	await db
		.collection('registration')
		.doc(data.email)
		.set(data, { merge: true });
};
