import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/lib/Table'
import Panel from 'react-bootstrap/lib/Panel'
import HistoryTable from './HistoryTable'
import EmptyHistory from './EmptyHistory'
import constants from '../../constants'



import transAction from '../../actions/transAction'

class History extends Component {
	constructor(props) {
		super(props)
	}
    /**
     * Check transactions history
     */
	HistoryContent(){
			if(this.props.trans.length > 0)
				return <HistoryTable trans={this.props.trans} />
			else 
                return <EmptyHistory message={constants.ALERT.NO_TRANSACTIONS_HISTORY} />
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
/**
 * Add History Component PropTypes
 */
History.propTypes = {
	trans: React.PropTypes.arrayOf(React.PropTypes.shape({
     date: React.PropTypes.string,
     amount: React.PropTypes.string,
     description: React.PropTypes.string  
   }))
}

const stateProps = (state) => {
	return {
		trans: state.transaction.transactions
	}
}

const dispatchProps = (dispatch) => {
	return bindActionCreators({
		handleTransaction: transAction
	}, dispatch)
}

export default connect(stateProps, dispatchProps)(History)