import { observer } from "mobx-react";
import React from "react";
import firebase from "../Common/firebase"

const App = observer(({observableStore}) => {
  const ref = firebase.firestore().collection("VehicleMake")
  
  const logStore = () => {
    observableStore.addData(ref);
  }

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
      <button onClick={logStore}>Click</button>
      <button onClick={sortAsc}>Ascending</button>
      <button onClick={sortDesc}>Descending</button>
      Hello World
      {observableStore.data.map(item => (
        <div key={item.Id}>{item.Name} {item.Abrv}</div>
      ))}
    </div>
  )
})

export default App;
