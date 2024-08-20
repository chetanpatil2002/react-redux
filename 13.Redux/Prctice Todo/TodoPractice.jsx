import { Edit, Plus, Trash } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import { addData, deleteData, updateData ,clearData} from "./todoPracticeSlice";

export default function TodoPractice() {

    let [user,setUser] = useState("")
    let [index,setIndex]=useState(null)

  let data = useSelector((store) => store.todoPracticeSlice.todoData);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(addData(user));
    setUser("")
  };

  const editHandler = (index,value)=>{
        setUser(value)
        setIndex(index)
  }

  const deleteHandler = (i)=>{
    dispatch(deleteData(i))
  } 

  const updateHandler = ()=>{
    dispatch(updateData({index:index,newData:user}))
    setIndex(null)
    setUser("")
  }

  const allClear =(data) => {
    //   console.log("🚀 ~ allClear ~ data:")

    dispatch(clearData())
  }
  return (
    <div className=" container mx-auto p-5">
      <div className="flex">
  
        <Input className="w-[700px]" placeholder="Enter any list..." onChange={(e)=>setUser(e.target.value)} value={user}/>
        {index || index === 0 ? (
         <Button className="py-2 px-4 font-bold border-none bg-blue-500 hover:bg-blue-600" onClick={()=>updateHandler()}>Update</Button>
        ):(
            <Button className="py-2 px-4 font-bold border-none bg-amber-300 hover:bg-amber-500 " onClick={() => addHandler()}>
            <Plus />
          </Button>
        )}
  
         
      </div>
      <div className="w-[700px] m-4 border mt-3">
        <Button onClick={()=>allClear()}>Clear All</Button>
        <hr className="mt-2 h-1 bg-red-600"/>
        {data?.map((e, i) => {
          return (
            <div className="flex gap-3 justify-between p-2 items-center" key={i}>
              <div>{i + 1}</div>
              <h4>{e}</h4>
              <div>
                <Button className="mx-2 bg-green-500 border-none" onClick={()=>editHandler(i,e)}><Edit/></Button>
                <Button className=" bg-red-500 border-none" onClick={()=>deleteHandler(i,e)}><Trash/></Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
