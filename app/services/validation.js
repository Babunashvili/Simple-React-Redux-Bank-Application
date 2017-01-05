export const checkBalance = (amount) => {
    if (amount <= this.props.balance)
        return true
    return false
}

export const checkEmptyAmount = (amount) => {
    if (amount !== '')
        return true
    return false
}

export const checkAmountQty = (amount) => {
    if (amount > 0)
        return true
    return false
}
