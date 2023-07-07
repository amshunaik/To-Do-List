
import { useState } from 'react';
import Add from './Add';
import classes from './todo.module.css'
function Todo(){
    const [hand,sethand]=useState('');
    const [press,setpress]=useState(false);
    const [count,setcount]=useState(0);
    const [val,setval]=useState([]);
    const [remov,setremov]=useState(0);

    const valchange=(event)=>{
      sethand(event.target.value);
     
    setpress(false)
    }
    const f=hand;
    const addhand=()=>{
      if(hand!==''){
        setpress(true);
        setval((prev)=>{return[...prev,hand]})
        
        console.log("val",val)
        setpress(false);
        sethand('');
        
        setcount(count+1);

      }
      setpress(true)
      

    }
    
    const deleteitem=(id)=>{
      console.log("deleted");
      setval((prev)=>{
        return prev.filter((elem,keyid) => {
          return keyid!==id;
        }
      )})
      setremov(remov+1);

    }
    //console.log(val);
    return(
        <div className={classes.bod}>
            <div>
            <h1>Add your list here</h1>
            </div>
            <div  className={classes.cover}>
                <div className={classes.done}>
                <input className={classes.input} type="text" placeholder="Add Items.." value={hand} onChange={valchange}/>
                <button className={classes.but} onClick={addhand}>+ Add</button>
            </div>
            <div className={classes.memory}>
                <h4 className={classes.h4}>TotalCount: {count}</h4>
                <h4 className={classes.h4}>No of task completed: {remov}</h4>
            </div>
            
            <h1 className={classes.h1}>List added</h1>
              <div>
              <ul className={classes.ul}>
              {val.map((u,ind)=>( 
                <Add id={ind} key={ind} Tend={u} onSelect={deleteitem}/> 
              )
              )}
              </ul>
              </div>
            </div>
     

    </div>
    )
}
export default Todo;

// import { useSelector,useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { todoact } from './hype';
// import classes from './todo.module.css'
// function Todo(){
//     const [hand,sethand]=useState('');
//     //const use1=useSelector();
//     const dispatch=useDispatch();
//     const valchange=(event)=>{
//         sethand(event.target.value);
//         console.log(event.target.value);

//     }
//     const id=Math.random();
//     const addhand=({id,hand})=>{
        
//         dispatch(todoact.add);


//     }

//     return(
//         <div className={classes.cover}>
//       <div>
//       <h1>Add your list here</h1>
//       </div>
//       <div>
//         <input type="text" placeholder="Add Items.." value={hand} onChange={valchange}/>
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
//         <span onClick={addhand}class="material-symbols-outlined">add </span>
//       </div>

//     </div>
//     )
// }
// export default Todo;