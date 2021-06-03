import React from 'react'
import {deleteNote,toggleFavNote} from '../../store/actions/noteActions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import moment from 'moment'
const Note = ({note}) => {
	// console.log(note.createdAt);
	const dispatch = useDispatch()
	const deleteHandler = () => {
		dispatch(deleteNote(note))
	}
	const favHandler = () => {
		dispatch(toggleFavNote(note))
	}
	const editHandler = () => {
		dispatch({type:'EDIT_FORM',payload:note})
	}
	const fav = (note.favourite)?"favorite":"favorite_border"
	return (
		<div className="note white">
			<div className="right-align">
				<i className="material-icons red-text" onClick={favHandler}>{fav}</i>
				<i className="material-icons " onClick={deleteHandler}>delete</i>
			</div>
			<h5 className="black-text">
				<Link to={"/note/"+note.id}>{note.title}</Link>
			</h5>
			<p className="truncate">{note.content}</p>
			<p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
			<div className="right-align">
				<Link to={"/note/edit/"+note.id}>
					<i className="material-icons black-text" onClick={editHandler}>edit</i>
				</Link>
			</div>
		</div>
	)
}

export default Note
