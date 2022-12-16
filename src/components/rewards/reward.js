import React, { Component } from "react";

class Rewards extends Component {
    
    render() {
        return (
            <div className="Rewards">
              <div className="title-text"><strong>Customers</strong></div>
              {this.props.customers &&
                this.props.customers?.map(({ name, id, transactions }) => (
                  <div key={id} className="list-row">
                    <strong>{name}</strong>
                    {transactions && 
                      transactions?.map((transaction) => (
                        <div>{transaction}</div>
                      ))
                    }
                    <div>{calculateRewards(transactions)}</div>
                  </div>
                ))}
                <hr />
            </div>
        );
    }
  }
  
export default Rewards;

const calculateRewards = (transactions) => {
    let points = 0;
    transactions.forEach(transaction => {
      let over100 = (transaction- 100);
      if (over100 > 0) {
        // A customer receives 2 points for every dollar spent over $100 in each transaction      
        points += (over100 * 2);
      }    
      if (transaction.amt > 50 && transaction.amt < 100) {
        let aboeve50 = transaction.amt - 50;
        // plus 1 point for every dollar spent over $50 and $100 in each transaction.
        points += aboeve50;      
      }
    });
    return points;
}

