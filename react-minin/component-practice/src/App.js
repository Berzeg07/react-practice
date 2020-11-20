import { Component } from "react";
// import React, { Component } from "react"
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'

/*

Layout (компонент класса) - компонент высшего порядка (Шаблон для всех страниц) *
Quiz (компонент класса) - контейнер, обертка для блока с ответами, содержит state *
ActiveQuiz (функциональный компонент) - обертка для списка ul с ответами, сам вопрос *
AnswearsList (функциональный компонент) - обертка ul для ответов li *
AnsweItem (функциональный компонент) - элементы li для списка ul

*/

class App extends Component {
  render() {
    return (
      <Layout>
        <Quiz />
      </Layout>
    );
  }
}

export default App
