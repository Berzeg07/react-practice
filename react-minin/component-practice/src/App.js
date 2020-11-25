import { Component } from "react";
// import React, { Component } from "react"
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizCreator/QuizCreator'

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
        {/* <Quiz /> */}
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} />
        </Switch>
      </Layout>
    );
  }
}

export default App
