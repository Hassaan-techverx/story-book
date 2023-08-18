import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { StateType } from "./store/root-reducer";
import { getUserAction } from "./container/users/slice";
import CustomTable from "./components/CustomTable";
import { columns } from "./components/config";
import Loader from "./components/Loader";

function App() {
  const { data } = useSelector((state: StateType) => state.users.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  return (
    <>
      {data ? (
        <>
          <h1 className="text-center my-3">Users Table</h1>
          <div className="px-3"> <CustomTable data={data} columns={columns} /></div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
