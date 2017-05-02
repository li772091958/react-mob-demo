import { observable, action } from 'mobx'
import api from '../utils/api'

class HomeState {
  @observable title = 'Hello, Mobx!';
  @observable province = [];

  async fetchData() {
    let data = await api('/mobilecdn/api/v3/search/hot');
    //debugger
    console.log(data);
    this.setData(data.data.info);
  }

  @action setData(data) {
    this.province = data
  }
  
}

export default HomeState;