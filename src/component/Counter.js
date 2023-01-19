// import React from 'react'

//  class Counter extends React.Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          counter: 0
//       }
//     }
//     increment = () =>{
//         this.setState({counter:this.state.counter + 1})
//     }
//     decrement = () =>{
//         this.setState({counter:this.state.counter - 1})
//     }
//     render() {
//         return (
//           <>
//             <div className="counter-container">
//               <div id="counter-content">
//                 <i class="fa-solid fa-minus" onClick={this.decrement}></i>
//                 <div className="counter-box">{this.state.counter}</div>
//                 <i class="fa-solid fa-plus" onClick={this.increment}></i>
//               </div>
//             </div>
//           </>
//         );
//       }
//     }
    
//     export default Counter
import React from 'react'
import { useState } from 'react'
import '../index.css'
  
  function Counter() {
    const [count, setCount] = useState(0)
    
    const increment = () =>{
        setCount(count + 1)
    }

    const decrement = () =>{
        setCount(count - 1)
    }
    return (
        <>
<div className="counter-container">
 <div id="counter-content">
      <i class="fa-solid fa-minus" onClick={decrement}></i>
<div className="counter-box">{count}</div>
        <i class="fa-solid fa-plus" onClick={increment}></i>
        </div>
        </div>
        </>
    )
  }
  
  export default Counter
