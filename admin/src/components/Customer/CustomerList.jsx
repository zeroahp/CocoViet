import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Customer from "./Customer";
import { setActive, setCustomerSearch } from "../../redux/adminSlice";
import SearchBar from "../SearchBar";
const CustomerList = () => {
  const customerStore = useSelector((state) => state.AdminStore.customerStore);
  const customerSearch = useSelector((state) => state.AdminStore.customerSearch);

  const [customers, setCustomers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (customerStore.length > 0) {
      setCustomers(customerStore);
    }
  }, [customerStore]);

  useEffect(() => {
    if (customerSearch.length > 0) {
      setCustomers(customerSearch);
    }
  }, [customerSearch]);


  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 mx-3">
          <SearchBar
            placeholder="Search for customer..."
            dataList={customerStore}
            parameter1={"customerName"}
            parameter2={"customerAddress"}
            dispatchFunction={(data) => dispatch(setCustomerSearch(data))}
            setActive={(value) => dispatch(setActive(value))}
            navigateTo="/customers"
          />
        </div>
      </div>
      <div className="mt-5">
        <Customer customers={customers} />
      </div>
    </>
  );
};

export default CustomerList;
