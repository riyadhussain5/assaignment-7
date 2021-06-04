import React from 'react';

const Cost = (props) => {

const Bill = props.cost;
console.log(Bill)
let personCost =0;
for (let i = 0; i < Bill.length; i++) {
    const bill = Bill[i];
    personCost =personCost + bill.salary ;
    
}
    return (
        <div>
            <h2>Total Cost for team : $ {personCost}</h2>
            
        </div>
    );
};

export default Cost;