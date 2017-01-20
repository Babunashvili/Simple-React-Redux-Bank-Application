/* ==========================================================================
   Form Validations
   ========================================================================== */

import store from '../Store/store'

/**
 * Check User Balance
 *
 * @param      {(Number)}  amount   The amount
 * @param      {Number}    balance  The balance
 * @return     {Boolean}
 */
export const checkBalance = (amount,balance) => {
    if (amount <= balance)
        return true
    return false
}

/**
 * Check Credit Card Balance
 *
 * @param      {Number}  amount  The amount
 * @param      {String}    card    The card key
 * @return     {Boolean}
 */
export const checkCardBalance = (amount,card) => {

    let balance = 0
    let state  = store.getState().transactions
    state.cards.map((v,i) => {
         if(v.key === card) {
            balance = v.balance
         }
    })
    if (amount <= balance)
        return true
    return false
}
/**
 * Check If Value Is Empty
 *
 * @param      {Number}  amount  The amount
 * @return     {Boolean}
 */
export const checkEmptyValue = (amount) => {
    console.log(amount)
    if (amount !== '')
        return true
    return false
}
/**
 * Check If Amount Is > 0
 *
 * @param      {Number}   amount  The amount
 * @return     {Boolean}
 */
export const checkAmountQty = (amount) => {
    if (amount > 0)
        return true
    return false
}
