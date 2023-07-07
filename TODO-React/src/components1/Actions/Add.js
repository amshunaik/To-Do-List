import classes from './Add.module.css'
//import { faXmark } from '@fortawesome/pro-solid-svg-icons';
function Add(props){
    const t1=props.Tend;
    console.log(t1);
    return(
        <>
           <li className={classes.list}>
            
            <button className={classes.remove} onClick={()=>{props.onSelect(props.id)}}>Remove</button>
            <div className={classes.name} >{t1}</div>


            </li>

        </>
        
        

    )
    
}
export default Add;