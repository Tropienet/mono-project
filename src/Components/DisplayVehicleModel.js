import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import firebase from "../Common/firebase"
import DisplayModelInfo from "./DisplayModelInfo";
import "../Layouts/VehicleModel.css"

const DisplayVehicleModel = observer(({vehicleModelStore}) => {
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState("")
  const [itemsPerPage, setItemsPerPage] = useState(4)

  const ref = firebase.firestore().collection("VehicleModel")
  
  useEffect(() => {
    vehicleModelStore.addData(ref);
  }, [])

  useEffect(() => {
    vehicleModelStore.setFilter(filter)
    setPage(1)
  }, [filter])

  useEffect(() => {
  }, [itemsPerPage])

  const filteredData = vehicleModelStore.data.filter(item => item.Name.toLowerCase().includes(filter.toLowerCase()))
  const data = filteredData.slice((page - 1)*itemsPerPage, page * itemsPerPage)
  
  const sortAsc = () => {
    const refAsc = ref.orderBy("Name", "asc");  
    vehicleModelStore.addData(refAsc)
  }

  const sortDesc = () => {
    const refDesc = ref.orderBy("Name", "desc")
    vehicleModelStore.addData(refDesc)
  }

  const HandlePrevPage = () => {
    setPage(page - 1);
  }

  const HandleNextPage = () => {
    setPage(page + 1)
  }

    return (
        <div className="vehicle-model">
            <div className="btns">
                <button onClick={sortAsc}>Sort Ascending</button>
                <button onClick={sortDesc}>Sort Descending</button>
            </div>
      <label htmlFor="filter">Filter:</label>
      <input type="text" value={filter} onChange={e => setFilter(e.target.value)}></input>
      <label htmlFor="itemsPerPage">Items per page:</label>
      <input type="number" 
             value={itemsPerPage} 
             onChange={e => setItemsPerPage(e.target.value)}
             min="1"
             max="10"></input>
            {data.map(item => (
                <DisplayModelInfo key={item.Id}
                                  name={item.Name}
                                  abrv={item.Abrv}
                                  makeId={item.MakeId}
                                  />
            ))}
            <div className="btns">
                <button disabled={page===1} onClick={HandlePrevPage}>Previous Page</button>
                <button disabled={data.length < itemsPerPage} onClick={HandleNextPage}>Next Page</button>
            </div>
        </div>
    )
})

export default DisplayVehicleModel;