import React, { Component, PropTypes } from "react"
import Table from 'react-bootstrap/lib/Table'
import Panel from 'react-bootstrap/lib/Panel'
import HistoryTable from './HistoryTable'
import EmptyHistory from './EmptyHistory'

class History extends Component {
	constructor(props) {
		super(props)
	}

	HistoryContent(){
			if(this.props.trans.length > 0)
				return <HistoryTable trans={this.props.trans} />
			else 
                return <EmptyHistory message="You have not any Transactions." />
	}

	render() {
		return (
			<div>
				<Panel header="Your Transactions History">
			      {this.HistoryContent()}
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