# React.js Basics

## Introduction to React
React.js is a **JavaScript library** for building **user interfaces**. It allows developers to create reusable components and efficiently update the UI.

### Features of React:
- **Component-Based**: UI is divided into reusable components.
- **Virtual DOM**: Improves performance by updating only changed elements.
- **Declarative Syntax**: Easier to understand and debug.
- **One-Way Data Binding**: Helps maintain data flow control.
- **Hooks**: Enables state management in functional components.

---

## Setting Up a React Project

### Install Node.js and Create React App
```sh
npx create-react-app my-app
cd my-app
npm start
```

---

## JSX (JavaScript XML)
JSX allows writing HTML-like syntax inside JavaScript.
```jsx
const element = <h1>Hello, React!</h1>;
```

### JSX Rules:
1. Must return a **single parent element**.
2. Use **camelCase** for attributes (`className` instead of `class`).
3. JavaScript expressions are enclosed in `{}`.

Example:
```jsx
const user = "Vaibhav";
const element = <h1>Hello, {user}!</h1>;
```

---

## React Components
React components can be **Functional** or **Class-based**.

### Functional Component
```jsx
function Greeting() {
  return <h1>Hello, World!</h1>;
}
export default Greeting;
```

### Class Component
```jsx
import React, { Component } from "react";
class Welcome extends Component {
  render() {
    return <h1>Welcome, React!</h1>;
  }
}
export default Welcome;
```

---

## Props (Properties)
Props allow components to receive data.

### Passing Props:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
export default Welcome;
```

### Using Props in Parent Component:
```jsx
<Welcome name="Vaibhav" />
```

---

## State Management
State allows components to manage and store data dynamically.

### Using `useState` Hook in Functional Components
```jsx
import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Counter;
```

### Using State in Class Components
```jsx
import React, { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
export default Counter;
```

---

## React Lifecycle Methods
**Lifecycle methods** are only available in class components.

- `componentDidMount()` – Runs after the component is mounted.
- `componentDidUpdate()` – Runs after the component updates.
- `componentWillUnmount()` – Runs before the component is removed.

Example:
```jsx
class LifecycleDemo extends React.Component {
  componentDidMount() {
    console.log("Component mounted!");
  }
  componentWillUnmount() {
    console.log("Component will unmount!");
  }
  render() {
    return <h1>Lifecycle Demo</h1>;
  }
}
export default LifecycleDemo;
```

---

## Handling Events in React
```jsx
function ClickHandler() {
  function handleClick() {
    alert("Button Clicked!");
  }
  return <button onClick={handleClick}>Click Me</button>;
}
export default ClickHandler;
```

---

## React Hooks
Hooks allow functional components to use state and lifecycle methods.

### Common Hooks:
- `useState` – State management.
- `useEffect` – Handles side effects like API calls.
- `useContext` – Manages global state.

#### `useEffect` Example:
```jsx
import React, { useState, useEffect } from "react";
function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h1>Seconds: {seconds}</h1>;
}
export default Timer;
```

---

## React Router
React Router enables navigation between components.

### Install React Router:
```sh
npm install react-router-dom
```

### Basic Routing Example:
```jsx
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function Home() {
  return <h1>Home Page</h1>;
}
function About() {
  return <h1>About Page</h1>;
}
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}
export default App;
```

---

## Redux (State Management)
Redux helps manage global state.

### Install Redux:
```sh
npm install redux react-redux
```

### Basic Redux Example:
```jsx
import { createStore } from "redux";
const initialState = { count: 0 };
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
const store = createStore(reducer);
store.dispatch({ type: "INCREMENT" });
console.log(store.getState()); // { count: 1 }
```

---

## Conclusion
React.js is a powerful library for building UI components. Understanding **JSX, props, state, hooks, routing, and Redux** enables developers to create scalable applications efficiently.

