import { observable, action } from "mobx";
import firebase from "../Common/firebase";

class Store {
   data =  observable([]);
   
   fetchData = action(async () => {
    const db = firebase.firestore();
    const dataref = db.collection("VehicleMake");
    const snapshot = await dataref.get();
    const data = snapshot.docs.map(doc => doc.data());
    this.data = data
   })

   
}

const store = new Store()

export default store;