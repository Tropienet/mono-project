import { useEffect, useState } from 'react';
import './App.css';
import firebase  from './Common/firebase';

function App() {

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
        {vehicleMake.map((vehicle) => (
          <div key={vehicle.Id}>
            <h2>{vehicle.Name}</h2>
            <p>{vehicle.Abrv}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
