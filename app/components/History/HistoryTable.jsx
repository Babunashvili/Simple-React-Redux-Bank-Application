import React, { Component, PropTypes } from "react"
import Table from 'react-bootstrap/lib/Table'
import Panel from 'react-bootstrap/lib/Panel'

class HistoryTable extends Component {
	constructor(props) {
		super(props)
	}
    rotate(a,inc = 1){
	      for (var l = a.length, inc = (Math.abs(inc) >= l && (inc %= l), inc < 0 && (inc += l), inc), i, x; inc; inc = (Math.ceil(l / inc) - 1) * inc - l + (l = inc))
          for (i = l; i > inc; x = a[--i], a[i] = a[i - inc], a[i - inc] = x);
        return a;
    }
	render() {
		return (
			      <Table responsive>
					<thead>
						<tr>
							<th>Date</th>
							<th>Description</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						{this.rotate(this.props.trans.slice()).map((value, key) => {
							return <tr key={key}>
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

HistoryTable.propTypes = {
	trans: React.PropTypes.arrayOf(React.PropTypes.shape({
     date: React.PropTypes.string,
     amount: React.PropTypes.string,
     description: React.PropTypes.string  
   }))
}
export default HistoryTable