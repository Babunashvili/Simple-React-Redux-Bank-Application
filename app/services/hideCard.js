/* ==========================================================================
   Hide Card Number
   ========================================================================== */

export const  hiddenCard = (cards) => {
	let newCards = []
	cards.forEach((card,key) => {
	  let number = card.card.number.split('-')
	  let newNumber = '****-****-****-'+number[3]
      newCards.push({
      	key:card.key,
      	balance:card.balance,
      	card:{
      		number:newNumber,expires:card.card.expires,cvc:card.card.cvc
      	}
      })
	})
   return newCards
}