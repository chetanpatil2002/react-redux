import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productData } from "./practiceSlice";
import { Table } from "reactstrap";

export default function PracticeApi() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.practiceSlice);

  useEffect(() => {
    dispatch(productData());
  }, []);
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Title</th>
            <th>CeteGeory</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data?.apiData?.map?.((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{e.title}</td>
                <td>{e.category}</td>
                <td>{e.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
