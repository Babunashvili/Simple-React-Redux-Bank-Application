import React, { Component } from "react"

import Table from 'react-bootstrap/lib/Table'


class History extends Component {
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
						<tr>
							<td>rame</td>
							<td>rame</td>
							<td>rame</td>
						</tr>
					</tbody>
				</Table>
			</div>
		)
	}
}


export default History