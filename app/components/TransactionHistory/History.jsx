import React, { Component, PropTypes } from "react"

import Table from 'react-bootstrap/lib/Table'

class History extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="well">
				<h3 className="text-center">Transactions History</h3>
				<hr/>
				<Table responsive>
					<thead>
						<tr>
							<th>Date</th>
							<th>Description</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						{this.props.trans.map((value, key) => {
							return <tr key={key}>
								<td>{value.date}</td>
								<td>{value.description}</td>
								<td>{value.amount}</td>
							</tr>
						})}
					</tbody>
				</Table>
			</div>
		)
	}
}

History.propTypes = {
	trans: React.PropTypes.arrayOf(React.PropTypes.shape({
     date: React.PropTypes.string,
     amount: React.PropTypes.string,
     description: React.PropTypes.string  
   }))
}
export default History