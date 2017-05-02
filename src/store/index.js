import { observable, action } from 'mobx'
import api from '../utils/api'

class AppState {
  @observable title = 'Hello, Mobx!';
  @observable province = [];

  async fetchData() {
    let data = await api('http://www.shanlinbao.com/parameterController/findByType?type=province', 'get', {type: 'province'});
    console.log(data);
    this.setData(data);
  }

  @action setData(data) {
    this.province = data
  }
  
}

export default AppState;