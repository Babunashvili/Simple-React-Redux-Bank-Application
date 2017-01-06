import React, { Component, PropTypes } from 'react'
import Table from 'react-bootstrap/lib/Table'
import Panel from 'react-bootstrap/lib/Panel'

class HistoryTable extends Component {
	constructor(props) {
		super(props)
	}
	/**
	 * Sort transactions history by date
	 *
	 * @param      {Array}  The array of transactions
	 * @return     {Array}  The array of transactions 
	 */
    rotate(array){
	   let temp = []
		   for (var i = array.length - 1; i >= 0; i--) {
		   	 temp.push(array[i])
		   }
	   return temp
    }
    
	render() {
		return (
			      <Table responsive>
					<thead>
						<tr>
							<th>Transaction ID</th>
							<th>Date</th>
							<th>Description</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						{this.rotate(this.props.trans).map((value, key) => {
							return <tr key={key}>
								<td>{value.trans_id}</td>
								<td>{value.date}</td>
								<td>{value.description}</td>
								<td>{value.amount} USD</td>
							</tr>
						})}
					</tbody>
				</Table>
		)
	}
}
/**
 * Add HistoryTable Component PropTypes
 */
HistoryTable.propTypes = {
	trans: React.PropTypes.arrayOf(React.PropTypes.shape({
     date: React.PropTypes.string,
     amount: React.PropTypes.string,
     description: React.PropTypes.string  
   }))
}
export default HistoryTable