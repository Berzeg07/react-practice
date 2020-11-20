import React, { Component } from "react";
import './App.css';

// function Car() {
//   return (
//     <h2>Car component</h2>
//   );
// }

// ES6 *
const Car = (props) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      marginBottom: '10px',
      paddingBottom: '25px'
    }}>
      <h3>Car name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
      <input type="text" onChange={props.onChangeName} value={props.name} />
      <button onClick={props.onDelete}>Delete</button>
      {/* <button onClick={props.onChangeTitle}>Click</button> */}
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cars: [
        { name: 'Ford', year: 2018 },
        { name: 'Audi', year: 2016 },
        { name: 'Mazda', year: 2010 }
      ],
      pageTitle: 'React components',
      showCars: false
    }
  }

  // state = {
  //   cars: [
  //     { name: 'Ford', year: 2018 },
  //     { name: 'Audi', year: 2016 },
  //     { name: 'Mazda', year: 2010 }
  //   ],
  //   pageTitle: 'React components',
  //   showCars: false
  // }

  // changeTitleHandler = (newTitle) => {
  //   this.setState({
  //     pageTitle: newTitle
  //   })
  // }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({ cars })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({ cars })

  }

  componentWillMount() {
    console.log('App componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  render() {
    console.log('App render')

    const divStyle = {
      textAlign: 'center'
    }

    let carList = null

    if (this.state.showCars) {
      carList = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <button
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>

        { carList}
      </div >
    );
  }
}

export default App;
