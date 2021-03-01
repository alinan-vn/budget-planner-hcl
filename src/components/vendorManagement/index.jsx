import React from 'react'

import Table from 'react-bootstrap/Table'

class VendorManagement extends React.Component {

    constructor(){
        super()
        this.state = {
            financeData: [
                {
                    name: "one"
                },
                {
                    name: "two"
                },
                {
                    name: "three"
                },
                {
                    name: "four"
                },
                {
                    name: "five"
                },
                {
                    name: "six"
                },
                {
                    name: "seven"
                },
                {
                    name: "eight"
                },
                {
                    name: "nine"
                },
                {
                    name: "ten"
                },
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
                    <th className="">{data.name}</th>
                    <th className="" onClick={this.changeInput}><button>EDIT</button></th>
                    <th className="" onClick={this.changeDelete}><button>DELETE</button></th>
                </tr>
            )
        });
    }

    changeDelete = (e) => {
        const thParent = e.target.parentNode.parentNode
        thParent.innerHTML = ''
        console.log('parent', thParent)
    }

    changeInput = (e) => {
        const thTarget = e.target.parentNode.parentNode.children[0]
        const initialValue = thTarget.innerHTML
        thTarget.innerHTML = `<input value=${initialValue} />`
        thTarget.className = 'changed'
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
                    <h1>Vendors</h1>
                    <p>Click to alter</p>
                    { this.state.showButton ? <button onClick={this.updateChanges}>update</button> : null}
                </div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
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

export default VendorManagement