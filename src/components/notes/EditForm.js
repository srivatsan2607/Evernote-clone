import React from 'react'
import useInput from '../../customHook/UseInput';
import {useSelector,useDispatch} from 'react-redux';
import {updateNote} from '../../store/actions/noteActions'
import {useHistory} from 'react-router-dom'
const EditForm = () => {
	const note = useSelector((state) => state.note)
	console.log('edit note',note)
	const id = note.id
	const [title,bindTitle,reseTitle] = useInput(note.title);
	const [content,bindContent,resetContent] = useInput(note.content);
	const dispatch = useDispatch();
	const history = useHistory();
	const handleSubmit = (e)=>{
		e.preventDefault();
		dispatch(updateNote({id,title,content}));
		resetContent();
		reseTitle();
		history.push('/')
	}
	return (
		<div className="section">
			<form onSubmit={handleSubmit} className="white">
				<h5 className="
				 blue-text text-darken-3">Edit Note</h5>
				<div className="input-field ">
					<input  type="text" id="note_title" className="validate" {...bindTitle}/>
					<label className="active" htmlFor="note_title">Note Title</label>
				</div>
				<div className="input-field">
					<textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
					<label className="active" htmlFor="note_content">Note content</label>
				</div>
				<button className="btn green">Update</button>
			</form>
		</div>
	)
}

export default EditForm
