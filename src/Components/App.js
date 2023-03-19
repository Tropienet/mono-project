import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import firebase from "../Common/firebase"
import DisplayVehicleMake from "./DisplayVehicleMake";
import DisplayVehicleModel from "./DisplayVehicleModel";
import vehicleModelStore from "../Stores/VehicleModelStore";
import "../Layouts/App.css"

const App = observer(({observableStore}) => {
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState("")
  const [itemsPerPage, setItemsPerPage] = useState(4)

  const ref = firebase.firestore().collection("VehicleMake")
  
  useEffect(() => {
    observableStore.addData(ref);
  }, [])

  useEffect(() => {
    observableStore.setFilter(filter)
    setPage(1)
  }, [filter])

  useEffect(() => {
  }, [itemsPerPage])

  const filteredData = observableStore.data.filter(item => item.Name.toLowerCase().includes(filter.toLowerCase()))
  const data = filteredData.slice((page - 1)*itemsPerPage, page * itemsPerPage)
  
  const sortAsc = () => {
    const refAsc = ref.orderBy("Name", "asc");  
    observableStore.addData(refAsc)
  }

  const sortDesc = () => {
    const refDesc = ref.orderBy("Name", "desc")
    observableStore.addData(refDesc)
  }

  const HandlePrevPage = () => {
    setPage(page - 1);
  }

  const HandleNextPage = () => {
    setPage(page + 1)
  }

  return (
    <div className="site-container">
      <h1>Mono Project</h1>
      <div className="vehicle-make">
        <h2>Vehicle Make</h2>
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
        <ul>
        {data.map(item => (
          <DisplayVehicleMake key={item.Id}
                              name={item.Name}
                              abrv={item.Abrv}
                              />
        ))}
          </ul>
          <div className="btns">
            <button disabled={page===1} onClick={HandlePrevPage}>Previous Page</button>
            <button disabled={data.length < itemsPerPage} onClick={HandleNextPage}>Next Page</button>
          </div>
      </div>
      <h2>Vehicle Model</h2>
      <DisplayVehicleModel vehicleModelStore={vehicleModelStore}></DisplayVehicleModel>
    </div>
  )
})

export default App;
