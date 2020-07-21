import React from 'react'
import NameListTag from './NameListTag'

function NameList (){
    const PersonData = [
        {
            name: 'GK',
            age: '25',
            bloodGroup: 'o+ve'
        },
        {
            name: 'SG',
            age: '21',
            bloodGroup: 'o+ve'
        },
        {
            name: 'KGS',
            age: '0',
            bloodGroup: 'o+ve'
        }
    ]
    //const list = NameLists.map(NameLi => <NameListTag key={NameLi.name} NameLi={NameLi} />)
    //const Ddd = NameLists.map(NameListTag => <NameListTag></NameListTag>)
//const Ddd = PersonData.map(Data => <h1>Your Name {Data.name}</h1>)
    const Ddd = PersonData.map(Data => <NameListTag key={Data.name} Names={Data} />) 
    return <div>{Ddd}</div>
}
export default NameList