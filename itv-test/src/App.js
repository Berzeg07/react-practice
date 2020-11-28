/*
Загружаем список пользователей и отображаем его.
По клику на имя оргинизации пользователя делаем его
оргинизацию "выбранной" и отображаем только пользователей
этой организации.
Так же, при наличии выбранной организации, нужно
дать возможность ее сбросить. Для этого рендерим кнопку.
*/

import React, { Component } from "react";
import UserList from './components/UserList/UserList'

class App extends Component {
  render() {
    return (
      <UserList />
    )
  }
}

export default App;
