import React from 'react'
import {useFirestoreConnect, isLoaded,isEmpty} from 'react-redux-firebase'
import {useSelector} from 'react-redux'
import moment from 'moment'
const NoteDetail = (props) => {
	const id = props.match.params.note_id;
	useFirestoreConnect([
		{ collection:'notes', doc:id }
	])

	const note = useSelector(
		({ firestore: {data} })=>data.notes && data.notes[id]
	);
	console.log(props);

	const listmarkup = !isLoaded(note)?(
		<div className="card z-depth-0">
			<div className="card-content">
				<span className="card-title">Loading....</span>
				<p></p>
			</div>
			<div className="card-action gre lighten-4 grey-text">
				<div>{moment(Date()).calendar()}</div>
			</div>
		</div>
	):isEmpty(note)?	
	(
		<div className="card z-depth-0">
			<div className="card-content">
				<span className="card-title">The note content is Empty</span>
				<p></p>
			</div>
			<div className="card-action gre lighten-4 grey-text">
				<div>{moment(Date()).calendar()}</div>
			</div>
		</div>
	):(
		<div className="card z-depth-0">
			<div className="card-content">
				<span className="card-title">{note?.title}</span>
				<p>{note?.content}</p>
			</div>
			<div className="card-action gre lighten-4 grey-text">
				<div>{moment(note?.createdAt.toDate()).calendar()}</div>
			</div>
		</div>
	)

	return listmarkup;
}

export default NoteDetail
