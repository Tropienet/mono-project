import { observer } from "mobx-react";
import React, { useEffect } from "react";
import firebase from "../Common/firebase"
import DisplayVehicleMake from "./DisplayVehicleMake";

const App = observer(({observableStore}) => {
  const ref = firebase.firestore().collection("VehicleMake")
  
  useEffect(() => {
    observableStore.addData(ref);
  }, [])

  
  const sortAsc = () => {
    const refAsc = ref.orderBy("Name", "asc");  
    observableStore.addData(refAsc)
  }

  const sortDesc = () => {
    const refDesc = ref.orderBy("Name", "desc")
    observableStore.addData(refDesc)
  }

  return (
    <div>
      <button onClick={sortAsc}>Ascending</button>
      <button onClick={sortDesc}>Descending</button>
      <ul>
      {observableStore.data.map(item => (
        <DisplayVehicleMake key={item.Id}
                            name={item.Name}
                            abrv={item.Abrv}
                            />
      ))}
      </ul>
    </div>
  )
})

export default App;
