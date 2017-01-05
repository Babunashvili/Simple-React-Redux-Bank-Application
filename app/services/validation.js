export const checkBalance = (amount,balance) => {
    if (amount <= balance)
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
