import React from 'react';
import useInput from '../../customHook/UseInput';
import {addNote} from '../../store/actions/noteActions';
import {useDispatch} from 'react-redux';
const Form = () => {
	const [title,bindTitle,reseTitle] = useInput();
	const [content,bindContent,resetContent] = useInput();
	const dispatch = useDispatch();
	const handleSubmit = (e)=>{
		e.preventDefault();
		dispatch(addNote({title,content}));
		resetContent();
		reseTitle();
	}
	return (
		<div className="section">
			<form onSubmit={handleSubmit} className="white">
				<h5 className="
				 blue-text text-darken-3">New Note</h5>
				<div className="input-field ">
					<input  type="text" id="note_title" className="validate" {...bindTitle}/>
					<label className="active" htmlFor="note_title">Note Title</label>
				</div>
				<div className="input-field">
					<textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
					<label htmlFor="note_content">Note content</label>
				</div>
				<button className="btn green">Add</button>
			</form>
		</div>
	)
}

export default Form
