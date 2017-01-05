import React, { Component, PropTypes } from "react"
import Table from 'react-bootstrap/lib/Table'
import Panel from 'react-bootstrap/lib/Panel'

class History extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<Panel header="Your Transactions History">
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
								<td>{value.amount} USD</td>
							</tr>
						})}
					</tbody>
				</Table>
			    </Panel>
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