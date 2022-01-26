import menuItems from "../data/menuItemsData";
import { makeAutoObservable } from "mobx";

class MenuStore {
  menu = menuItems;
  constructor() {
    makeAutoObservable(this);
  }
  addMenuItem = (newMenu) => {
    this.menu = [...this.menu, newMenu];
  };
}

const menuStore = new MenuStore();
export default menuStore;
