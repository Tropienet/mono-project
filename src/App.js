import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import './App.css';
import firebase  from './Common/firebase';
import DisplayVehicle from './Components/DisplayVehicleMake';
import store from './Stores/Store';


/*function App() {

  const [loading, setLoading] = useState(false);
  const [vehicleMake, setVehicleMake] = useState([])

  const ref = firebase.firestore().collection("VehicleMake");

  function getVehicleMake() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setVehicleMake(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getVehicleMake();
  }, [])

  if(loading) {
    return <h1>Loading</h1>
  }

  return (
    <div className="App">
      <p>This is a mono Application</p>
      <ul>
        {vehicleMake.map((vehicle) => (
          <DisplayVehicle key={vehicle.Id} 
                          name={vehicle.Name}
                          abrv={vehicle.Abrv} />
        ))}
        </ul>
        {store.data.map(vehicle => (
          <div key={vehicle.Id}>
            <div>{vehicle.Name}</div>
          </div>
        ))}
    </div>
  );
}*/

const App = observer(() => {
  useEffect(() => {
    store.fetchData()
  }, [])

  return(
    <div>
  
      <ul>
      {store.data.map(vehicle =>(
        <DisplayVehicle key={vehicle.Id}
                        name={vehicle.Name}
                        abrv={vehicle.Abrv}
                        />
      ))}
      </ul>
    </div>
  )
})


export default App;
