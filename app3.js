window.addEventListener('load',()=>{
    const form=document.querySelector("#task_form");
    const input= document.querySelector("#task_input");
    const l=document.querySelector(".tasks");

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task= input.value;
        if(!task){
            alert("please fill the form");
            return;
        }
        const t1=document.createElement("div");
        t1.classList.add("tcon");

        const t2=document.createElement("div");
        t2.classList.add("add_task");
        /*t2.innerText=task;*/
        t1.appendChild(t2);

        const t_input=document.createElement("input");
        t_input.classList.add("text");

        t_input.type="text";
        t_input.value=task;
        t_input.setAttribute("disabled","disabled");
        t2.appendChild(t_input);
        const t_action=document.createElement("div");
        t_action.classList.add("action");

        const t_edit=document.createElement("button");
        t_edit.classList.add("edit");
        t_edit.innerHTML="Edit";

        const t_del=document.createElement("button")
        t_del.classList.add("delete");
        t_del.innerHTML="Delete";

        t_action.appendChild(t_edit);
        t_action.appendChild(t_del);

        t1.appendChild(t_action);
        
        l.appendChild(t1);
        input.value="";
        t_edit.addEventListener('click',()=>{
            if(t_edit.innerText.toLowerCase()=="edit"){
                t_input.removeAttribute("disabled");
                t_input.focus();
                t_edit.innerText="Save";

            }
            else{
                t_input.setAttribute("disabled","disabled");
                t_edit.innerText="Edit";
            }
            
        })
        t_del.addEventListener('click',()=>{
            l=removeChild(t1);
        })
    })
})