import 'bulma/css/bulma.css'
import './CoolButton.css';
import React from 'react';

function CoolButton(props) {
    let classes = 'button ' + props.myClass;
    // console.log(classes)

    return (
        <div> 
            <button className={classes}> {props.children} </button> 
       </div>
    )
   }

   export default CoolButton;


      /*  This was not working:
      console.log("props", props)
        switch (props) {
         
            case props.isPrimary:
                classes += " is-primary";
                break;
            case props.isSuccess:
                classes += " is-success";
                break;
            case props.isDanger:
                console.log("classes", classes)
                classes += " is-danger";
                break;
            }
        */