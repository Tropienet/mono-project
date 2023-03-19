import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import firebase from "../Common/firebase"
import DisplayVehicleMake from "./DisplayVehicleMake";

const PAGE_SIZE = 4;

const App = observer(({observableStore}) => {
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState("")

  const ref = firebase.firestore().collection("VehicleMake")
  
  useEffect(() => {
    observableStore.addData(ref);
  }, [])

  useEffect(() => {
    observableStore.setFilter(filter)
    setPage(1)
  }, [filter])

  const filteredData = observableStore.data.filter(item => item.Name.toLowerCase().includes(filter.toLowerCase()))
  const data = filteredData.slice((page - 1)*PAGE_SIZE, page * PAGE_SIZE)
  
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
    <div>
      <button onClick={sortAsc}>Sort Ascending</button>
      <button onClick={sortDesc}>Sort Descending</button>
      <input type="text" value={filter} onChange={e => setFilter(e.target.value)}></input>
      <ul>
      {data.map(item => (
        <DisplayVehicleMake key={item.Id}
                            name={item.Name}
                            abrv={item.Abrv}
                            />
      ))}
      </ul>
      <button disabled={page===1} onClick={HandlePrevPage}>Previous Page</button>
      <button disabled={data.length < PAGE_SIZE} onClick={HandleNextPage}>Next Page</button>
    </div>
  )
})

export default App;
