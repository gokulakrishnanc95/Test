import React, {Component} from 'react'

class Billing extends Component{
    constructor(props){
        super(props)
        const initial = {
            code: [],
            name: [],
            quantity: []
        }
        this.state = initial
    }
}


// import React, {Component} from 'react'

// class Billing extends Component {
//     constructor(props){
//         super(props)
//         const initialRow = 1
//         this.itemList = ''
//         this.state = {
//             searchWord : '',
//             result: [],
//             rows: initialRow,
//             totalPrice: '',
//             itemcode: []
//         }
//     }

//     createBody = () => {
//         return this.state.map((data,index) => {
//             return (
//                 <tr key={index}>
//                     {/* <td>this.state.itemcode[index]</td> */}
//                     <td>
//                         <div>
//                             <div>
//                             <input type="text" onKeyPress={searchItem(event)} value={this.state.itemcode[index]} placeholder="Enter Item Code" />
//                             </div>
//                             <div></div>
//                         </div>
//                     </td>
//                     <td>index {index}</td>
//                     <td>index {index}</td>
//                     <td>index {index}</td>
//                     <td>index {index}</td>
//                     <td>index {index}</td>
//                 </tr>
//             )
//         })
//     }

//     searchItem = (event) => {
//         return (() => {event.target.value.length > 3 ? true : false})
//     }

//     render () {
//         const {searchWord, rows} = this.state
//         return(
//             <div>
//                 <table>
//                     <thead>
//                         <tr key="head">
//                             <td key="itemcode">Item Code</td>
//                             <td key="itemname">Item Name</td>
//                             <td key="quantity">Quantity</td>
//                             <td key="costperunit">Cost/Unit</td>
//                             <td key="unittype">Unit</td>
//                             <td key="price">Price</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {createBody}
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }