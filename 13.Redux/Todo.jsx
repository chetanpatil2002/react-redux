import { Edit, Plus, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import {
  addtodo,
  cleartodo,
  deleteTodo,
  serachtodo,
  updateTodo,
} from "./Store File/todoSlice";

export default function Todo() {
  let [input, setInput] = useState("");
  let [index, setIndex] = useState(null);
  let [search, setSearch] = useState();

  const data = useSelector((store) => store.todoSlice.todoTask);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(addtodo(input));
    setInput("");
  };

  const deleteHandler = (index) => {
    dispatch(deleteTodo(index));
  };

  const editHandler = (index, value) => {
    setInput(value);
    setIndex(index);
  };

  const updateHandler = () => {
    let data = { index: index, newData: input };
    dispatch(updateTodo(data));
    setIndex(null);
    setInput("");
  };

  const clearHandler = ()=>{
      dispatch(cleartodo())
  }
  // useEffect(() => {
  //   dispatch(serachtodo());
  // }, [dispatch]);

  // const filteredData = data?.filter((e) => e?.toLowerCase()?.includes(search?.toLowerCase()));
  // console.log("🚀 ~ filteredData:", filteredData);

  // const searchHandler = (e) => {
  //   setSearch(e);
  // };

  // let filterData = searchData?.filter((e) => {
  //   return e?.includes(search);
  // });
  // searchData(filterData);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <input
          className="border border-gray-300 p-2 w-full max-w-md rounded mr-2"
          placeholder="Enter the task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {index || index === 0 ? (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => updateHandler()}
          >
            Update
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => addHandler()}
          >
            <Plus />
          </button>
        )}
      </div>
      <div>
        <div className="flex flex-col justify-evenly">
          <Input
            className=" max-w-md m-auto border rounded mb-2"
            placeholder="Search...."
            onChange={(e) => searchHandler(e.target.value)}
          />
          <button className=" w-96 text-lg text-white p-1 bg-deep-orange-400 m-auto border rounded mb-2 hover:bg-deep-orange-600" onClick={() => clearHandler()}>Clear All</button>
        </div>
        {data?.map((e, i) => {
          return (
            <div
              key={i}
              className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded max-w-xl mx-auto"
            >
              <div className="text-gray-700">{i + 1}</div>
              <h5 className="text-gray-800 ">{e}</h5>
              <div className="flex">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                  onClick={() => deleteHandler(i)}
                >
                  <Trash />
                </button>
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => editHandler(i, e)}
                >
                  <Edit />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
