import { action, autorun, makeAutoObservable, observable, runInAction } from "mobx"

class VehicleModelStore {
    data = []
    filter = ""

    constructor() {
        makeAutoObservable(this, {
            data: observable,
            filter: observable,
            addData: action,
            setFilter: action,
        });
        autorun(() => console.log(this.data))
    }

    addData(ref) {
        if(this.filter){
            ref = ref.where("name", ">=", this.filter).where("name", "<=", this.filter + "\uf8ff")
        }
        ref.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            runInAction(() => {
                this.data = items
            })
        })
    }

    setFilter(filter) {
        runInAction(() => {
            this.filter = filter
        })
    }
}

const vehicleModelStore = new VehicleModelStore();

export default vehicleModelStore;