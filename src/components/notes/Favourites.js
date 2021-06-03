import React from 'react'
import {useFirestoreConnect} from 'react-redux-firebase'
import {useSelector} from 'react-redux'
import NoteList from './NoteList'

const Favourites = () => {
	useFirestoreConnect([{collection:'notes',orderBy:['createdAt','desc'],where:['favourite','==',true],storeAs:'FavNotes'}])
	const favnotes = useSelector((state) => state.firestore.ordered.FavNotes);
	// var favNotes = [];
	// notes.map((note) => {
	// 	if(note.favourite === true){
	// 		favNotes.push(note);
	// 	}
	// })
	return (
		<NoteList notes={favnotes} />
	)
}

export default Favourites
