import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./fakeProductSlice";
import { Table } from "reactstrap";

export default function FakeProductApi() {
  const data = useSelector((store) => store.fakeProductSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (data.error) {
    alert(data.error);
  }

  return (
    <div>
      {/* {data.pending ? <h1>Loading...</h1> : <h1>{data.productData.title}</h1>}  */}
      {/* <h1>{data.productData.title}</h1>
      <h1>{data.productData.price}</h1>
      <h1>{data.productData.category}</h1> */}
      {
        <Table striped>
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data?.productData?.map((item, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <img className="w-14" src={item.image} alt=""  />
                  </td>
                  <td>{item?.title}</td>
                  <td>{item.category}</td>
                  <td>{item.rating.rate}</td>
                  <td>{item.price}</td>

                </tr>
              );
            })}
          </tbody>
        </Table>
      }
    </div>
  );
}
