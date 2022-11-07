import React from "react";
import classes from './MyInput.module.css'
const MuInput = React.forwardRef((props, ref)=> {
    return(
      <input className={classes.myInput} ref = {ref} {...props}/>
    );
})

export default MuInput;