import React from 'react'

import Table from 'react-bootstrap/Table'

class Finance extends React.Component {

    constructor(){
        super()
        this.state = {
            financeData: [
                {
                    industry: "Energy",
                    product: "Website",
                    cost: 1000
                },
                {
                    industry: "Environment",
                    product: "Accounting",
                    cost: 3000
                },
                {
                    industry: "Infrastructure",
                    product: "Food",
                    cost: 500
                },
                {
                    industry: "Software",
                    product: "Food Truck",
                    cost: 40000
                },
                {
                    industry: "Engineering",
                    product: "Instruments",
                    cost: 2000
                },
                {
                    industry: "Energy",
                    product: "Website",
                    cost: 1000
                },
                {
                    industry: "Environment",
                    product: "Accounting",
                    cost: 3000
                },
                {
                    industry: "Infrastructure",
                    product: "Food",
                    cost: 500
                },
                {
                    industry: "Software",
                    product: "Food Truck",
                    cost: 40000
                },
                {
                    industry: "Engineering",
                    product: "Instruments",
                    cost: 2000
                }
            ],
            showButton: false,
            inputParentId: null,
            inputClass: 'changed'
        }
    }

    makeFinanceCards = () => {
        return this.state.financeData.map((data, ind) => {
            return(
                <tr id={ind} key={ind}>
                    <th className="industry" onClick={this.changeInput}>{data.industry}</th>
                    <th className="product" onClick={this.changeInput}>{data.product}</th>
                    <th className="cost" onClick={this.changeInput}>{data.cost}</th>
                </tr>
            )
        });
    }

    changeInput = (e) => {
        const initialValue = e.target.innerHTML
        const thTarget = e.target
        let thing = true;
        thTarget.innerHTML = `<input value=${initialValue} />`
        e.target.className = 'changed'
        this.setState({
            ...this.state,
            showButton: true
        })
    }

    updateChanges = () => {
        let inputNode = document.querySelector('.changed')
        let newValue = inputNode.children[0].value
        inputNode.innerHTML = newValue
        inputNode.className = ''
        this.setState({
            ...this.state,
            showButton: false
        })
    }

    render(){
        return(
            <section>
                <div>
                    <h1>Finances</h1>
                    <p>Click to alter</p>
                    { this.state.showButton ? <button onClick={this.updateChanges}>update</button> : null}
                </div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Industry</th>
                            <th>Product</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody className='finance-table'>
                        {this.makeFinanceCards()}
                    </tbody>
                </Table>
            </section>
        )
    }
}

export default Finance