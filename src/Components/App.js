import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import firebase from "../Common/firebase"
import DisplayVehicleMake from "./DisplayVehicleMake";

const PAGE_SIZE = 4;

const App = observer(({observableStore}) => {
  const [page, setPage] = useState(1)

  const ref = firebase.firestore().collection("VehicleMake")
  
  useEffect(() => {
    observableStore.addData(ref);
  }, [])

  const data = observableStore.data.slice((page - 1)*PAGE_SIZE, page * PAGE_SIZE)
  
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
      <button onClick={sortAsc}>Ascending</button>
      <button onClick={sortDesc}>Descending</button>
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
