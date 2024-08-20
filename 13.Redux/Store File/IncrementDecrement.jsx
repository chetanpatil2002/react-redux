import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { decrement, increment, reset } from "./countSlice";

export default function IncrementDecrement() {
  const data = useSelector((state) => state.countSlice);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center m-24 p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Count {data.count}</h1>
      <div className="space-x-4">
        <Button
          color="primary"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => dispatch(increment())}
        >
          Plus
        </Button>
        <Button
          color="primary"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => dispatch(decrement())}
        >
          Minus
        </Button>
        <Button
          color="primary"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => dispatch(reset())}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
