import { action, autorun, makeAutoObservable, observable, runInAction } from "mobx"

class bservableStore {
    data = []

    constructor() {
        makeAutoObservable(this, {
            data: observable,
            addData: action,
        });
        autorun(() => console.log(this.data))
    }

    addData(ref) {
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
}

const observableStore = new bservableStore();

export default observableStore;

