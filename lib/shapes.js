class Shapes { 

function Triangle(params) {
    

}

function Circle(params) {
    render() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>
        <circle cx="25" cy="75" r="20"/>
        `

    }
}

function Square(params) {
    render() {
  return  `<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
`
    }
}
}