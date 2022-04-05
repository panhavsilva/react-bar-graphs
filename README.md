![](assets/logo.png)
<h1 align="center">react-bar-graphs</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/panhavsilva/react-bar-graphs#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/panhavsilva/react-bar-graphs/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/panhavsilva/react-bar-graphs/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/panhavsilva/react-bar-graphs" />
  </a>
</p>

> This library provides an easy way to create customizable graphics with Vite, Typescript and ReactJS.

<br />

## :black_nib: Author

:bust_in_silhouette: **Pâmela Vieira da Silva - @panhavsilva**

* Github: [@panhavsilva](https://github.com/panhavsilva)

<br />

---
## 📦 Install
### Using NPM
```sh
npm install @panhasilva/react-bar-graphs 
```
### Using Yarn
```sh
yarn add @panhasilva/react-bar-graphs
```
<br />

---
## 🚀 Usage
```jsx
import { Graphic } from '@panhasilva/react-bar-graphs'

export const App = () => {
  const data = [
    {label: 'Mon', value: 300},
    {label: 'Tue', value: 4000},
  ]

  return (
    <Graphic 
      title='title'
      data={data}
    />
  )
}
```

## 🔭 Props
The ReactBarGraphs component takes the following props:
* **data**: Data[ ]
* **title**: string
* **type** *(optional)*: price | seconds | number
* **size** *(optional)*: { height: number, width: number }
* **colors** *(optional)*: Colors

### Data
The Data type have of the following values:
* **label**: string
* **value**: number

### Colors
The Colors type have of the following values:
* **bars** *(optional)*: string (hex color)
* **gradient** *(optional)*: string (linear-gradient(hex color, hex color))
* **title** *(optional)*: string (hex color)
* **border** *(optional)*: string (hex color)
* **text** *(optional)*: string (hex color)
* **lines** *(optional)*: string (hex color)

<br />
---

## :handshake: Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/panhavsilva/react-bar-graphs/issues). You can also take a look at the [contributing guide](https://github.com/panhavsilva/react-bar-graphs/blob/master/CONTRIBUTING.md).

<br />

---

## 📝 License

Copyright © current [Pâmela Vieira da Silva - @panhavsilva](https://github.com/panhavsilva).<br />
This project is [MIT](https://github.com/panhavsilva/react-bar-graphs/blob/master/LICENSE) licensed.
