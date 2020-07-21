import React, {Component} from 'react'
import RenderRow from './RenderRow'
import Table from 'react-bootstrap/Table'

class TableShow extends Component{
    constructor(props){
        super(props)
        var keys = []
        this.keys = keys
        this.getKeys = this.getKeys.bind(this)
        this.getHeader = this.getHeader.bind(this)
        this.getRowsData = this.getRowsData.bind(this)
    }

    getKeys = function(){
        return Object.keys(this.props.data[0]);
    }

    getHeader = function(){
        this.keys = this.getKeys();
        return this.keys.map((key, index)=>{
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }

    getRowsData = function(){
            var items = this.props.data;
            var keys = this.getKeys();
            return items.map((row, index)=>{
                return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
            })
        }

    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>{this.getHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.getRowsData()}
                    </tbody>
                </Table>
            </div>
            
        )
    }
}

// function TableShow (props){
//     var data = props.data
//     var getKey = function () { return(Object.keys((data[0])))}
//     var getHeader = function(){ return(getKey.map((head) => <th key={head}>{head.toUpperCase()}</th>))}
//     return(
//         <table>
//             <thead>
//                 <tr>
//                     <th>is Working</th>
//                     {getHeader}
//                 </tr>
//             </thead>
//         </table>
//     )
// }


// function TableShow (props){
//     // let Header = props.json.map(()=> keys)
//     // let createHeader = props.json.map(keys => {
//     //     return({keys.map(data => <p key={data}>{data} ,</p>)})
//     // })
//     var tifOptions = Object.keys(props.json).map(function(key) {
//         // return <option value={key}>{props.json[key]}</option>
//     });
//     return (
//         // <table>
//         //     <thead>
                
//         //     </thead>
//         // </table>
//         <div>
//             <p>Hi</p>
//         {/* {createHeader.keys} */}
//             {props.json.map(data => <div>{data.itemCode}</div>)}
//             <p>Hello</p>
//             {/* {tifOptions} */}

//         </div>
//     )
// }
export default TableShow