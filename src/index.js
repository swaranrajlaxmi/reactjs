// function Navbar() {
//     return (
// <nav className="navbar navbar-light bg-light">
//   <a className="navbar-brand" href="#">Navbar</a>
// </nav> )
// }

// function Content() {
//     return (
// <h1>I am learning React!</h1>
//     )
// }


// ReactDOM.render(
// <Navbar />
// <Content /> ,
// document.getElementById("root"))
    // const h1Element = document.createElement('h1');
    // h1Element.classList.add('header');
    // h1Element.textContent = 'i am learning React js!';
    // document.getElementById('root').appendChild(h1Element);
    // console.log(h1Element);
    // import React from "react"
    // import ReactDOM from "react-dom"    
    // const navElement = (
    //     <nav>
    //     <h1 className="header">My website</h1>
    //     <ul>
    //         <li>Pricing</li>
    //         <li>About</li>
    //         <li>Contact</li>
    //     </ul>
    //     </nav>
    // )
    // ReactDOM.render(
    //     navElement,
    //     document.getElementById('root')
    // )
    
    // const fourElements = (
    // <div>
    //     <h1>shop</h1>
    //         <p>shop from here</p>
    //         <ul>
    //             <li>Pricing</li>
    //             <li>About</li>        
    //             <li>Contact</li>
    //         </ul>
    
    // </div>)
    // // ReactDOM.render(fourElements, document.getElementById('root'))
    // document.getElementById('root').append(JSON.stringify(fourElements))
    // const page = (
    // <div>
    //     <img src='./react-logo.png'/>
    // </div>
    // )
    
    // ReactDOM.render(page, document.getElementById('root'))
 
import React from "react"
import ReactDOM from "react-dom" 
import Header from "./components/Header"
import BodyContent from "./components/BodyCont"
import Footer from "./components/Footer"
import "./style.css"
function Page(){
    return (
        <div>
            <Header />
            <BodyContent />
            <Footer />
                
        </div>)
}
ReactDOM.render(<Page />, document.getElementById('root'))