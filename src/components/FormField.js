import 'bulma/css/bulma.css'
import './FormField.css';
import React from 'react';



function FormField(props) {
    return (
        <div class="form-group">  
             <div className='field'>
                <label className='label'>{props.label}</label>
                <input className='input' placeholder={props.placeholder}>{props.input}</input>
             </div>
       </div>
    )
   }
   
   export default FormField;


