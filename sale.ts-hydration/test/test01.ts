
import { readFileSync } from '../tools/disk-operations'
import {
  getExpected, 
  getActual, 
  getOriginalSale, 
  getRefundedSale,
  getTotal,
  isRefundedSale,
  getItems,
  getVoidItems,
  getCurrencyDP, 
  getItemsTotalPrice,
  getItemTotalPrice,
  getItem,
  getItemDiscount,
  getItemBasePrice,
  getItemTotalPriceBeforeDiscount,
  getItemModifiers,
  itemOwnTotalPrice,
  getPerParentQuantity,
  getItemsModifiersBasePrices,
  getItemModifierBasePrice,
  getTaxedMoneyIncValue,
  getCalcModsValue,
  getCalcTotalPrice,
  getItemQuantity,
  getNormalisedDiscount,
  getNormalisedDiscountAmount
} from '../tools/helpers'

const filePath01 = 'data-sale-54e74532-c6c8-4e1a-aba7-4ebb40d7e964.json'

// console.log('total', getTotal(originalSale))
import { Sale } from '../../../../src/sale'

export const test01 = () => {

  /* console.log('expected', expected)
  console.log('actual', actual) */

  /* const originalItems = getItems(originalSale)
  const refundItems = getItems(refundedSale ) */

  // console.log()

  /* console.log('originalTotal', originalTotal, 'expected', expected)
  console.log('refundedTotal', refundedTotal, 'actual', actual) */

  /* const oSale = Sale.deserialise(originalSale)
  const rSale = Sale.deserialise(refundedSale)

  const oTotal = getTotal(originalSale)
  const rTotal = getTotal(refundedSale) */

 /*  console.log('oTotal', oTotal, 'rTotal', rTotal)
 */
  /* console.log('original items', originalItems)
  console.log('refund items', refundItems) */

  /* const o_dp = getCurrencyDP(originalSale)
  const r_dp = getCurrencyDP(refundedSale)

  console.log('o_dp', o_dp, 'r_dp', r_dp ) */

  /* const isRefunded_o = isRefundedSale(originalSale)
  const isRefunded_r = isRefundedSale(refundedSale) */

  // console.log(isRefunded_r)

  

  // console.log('oItemsTotalPrice', oItemsTotalPrices, 'rItemsTotalPrices', rItemsTotalPrices)  
  
  /* const o_i0_item = getItemTotalPrice(getItem(originalSale, 0))
  const r_i0_item = getItemTotalPrice(getItem(refundedSale, 0)) */

  /* const o_i0_item = getItem(originalSale, 0)
  const r_i0_item = getItem(refundedSale, 0)

  const o_i0_item_total = getItemTotalPrice(o_i0_item)
  const r_i0_item_total = getItemTotalPrice(r_i0_item ) */

  // console.log('o_i0_item', o_i0_item, 'r_i10_item', r_i0_item )
  
  /* const o_i0_discount = getItemDiscount(o_i0_item)
  const r_discount = getItemDiscount(r_i0_item) */

  // console.log('o_discount', o_discount, 'r_discount', r_discount)
  
  /* const o_discount_s = originalSale.items[0].discount
  const r_discount_s = refundedSale.items[0].discount

  const o_discount_t = originalSale.items[0].type
  const r_discount_t = refundedSale.items[0].type

  const o_i0_item_q = originalSale.items[0].quantity
  const r_i0_item_q = refundedSale.items[0].quantity
  
  const o_i0_item_basePrice = getItemBasePrice(o_i0_item)
  const r_i0_item_basePrice = getItemBasePrice(r_i0_item)

  const o_i0_beforeDiscountPrice = getItemTotalPriceBeforeDiscount(o_i0_item)
  const r_beforeDiscountPrice = getItemTotalPriceBeforeDiscount(r_i0_item) */

  /* console.log('o_discount_s', o_discount_t, o_discount_s, o_discount_q)
  console.log('o_discount_r', r_discount_t, r_discount_s, r_discount_q) */

  /* console.log('o_basePrice', o_basePrice, o_beforeDiscountPrice, o_i0_item_total)
  console.log('r_basePrice', r_basePrice, r_beforeDiscountPrice, r_i0_item_total) */

  /* const o_i0_modifers = getItemModifiers(o_i0_item)
  const r_modifers = getItemModifiers(r_i0_item) */

  /* console.log('o_modifers.length', o_modifers.length)
  console.log('r_modifers.length', r_modifers.length) */

  /* const o_modifers_basePrices = getItemsModifiersBasePrices(o_i0_modifers)
  const r_modifers_basePrices = getItemsModifiersBasePrices(r_modifers)

  const o_i0_modifiers_total_price = 
    o_i0_modifers.reduce((sum: number, modifier: any) => {
      const m_basePrice = getItemModifierBasePrice(modifier)
      const m_perParentQuantity = getPerParentQuantity(modifier)
      return sum + (m_basePrice * m_perParentQuantity)
    }, 0)
  
  const o_0i_item_price_exc_mods = itemOwnTotalPrice(o_i0_item)
  const o_i0_item_total_calc 
    = (o_i0_modifiers_total_price * o_i0_item_q) + (o_0i_item_price_exc_mods * o_i0_item_q) */
    
  // console.log('o_i0_discount', o_i0_discount)
  /* console.log('o_i0_beforeDiscountPrice', o_i0_beforeDiscountPrice)
  console.log('o_i0_item_total_calc', o_i0_item_total_calc, 'o_i0_item_total', o_i0_item_total) */

  /* const o_sum = oItemsTotalPrices.reduce((sum, x) => sum + x)
  const r_sum = rItemsTotalPrices.reduce((sum, x) => sum + x) */

  // console.log('o_0i_item_price_exc_mods', o_0i_item_price_exc_mods)
  
  // const o_i0_ itemo_i0_item_basePrice

  // console.log('o_sum', o_sum, 'o_total', oTotal)

  // console.log('r_sum', r_sum, 'r_total', rTotal)
  
  /* console.log('o_i0_item_total', o_i0_item_total)
  console.log('r_i0_item_total', r_i0_item_total)
  console.log('r_o_total_diff', o_i0_item_total + r_i0_item_total) */

  /* console.log('o_modifers_basePrices', o_modifers_basePrices, 'parentItemQuantity', o_i0_item_q)
  console.log('r_modifers_basePrices', r_modifers_basePrices, 'parentItemQuantity', r_i0_item_q)
  console.log('o_modifers_total_price', o_modifiers_total_price) */
  
  // console.log('o_modifiers_total_price', o_modifiers_total_price, 'oTotal', oTotal)
  // console.log('o_i0_item_total_calc', o_i0_item_total_calc, 'o_i0_item_total', o_i0_item_total)
  
  /* const oItemsTotalPrices = getItemsTotalPrice(originalSale)
  const rItemsTotalPrices = getItemsTotalPrice(refundedSale)

  console.log('oItemsTotalPrices[0]', oItemsTotalPrices[0]) */
  
  const d = JSON.parse(readFileSync(filePath01))
  const expected = getExpected(d)
  const actual = getActual(d)

  const originalSale = getOriginalSale(d)
  const refundedSale = getRefundedSale(d)

  const printItemPrices = (sale, index) => {
    const i0_item = getItem(sale, index)
    const i0_item_quantity = getItemQuantity(i0_item)
    const i0_item_mods = getItemModifiers(i0_item)
    const i0_item_basePrice = getItemBasePrice(i0_item)
    const i0_item_discount = getItemDiscount(i0_item)

    const calcModValue = getCalcModsValue(i0_item_mods)
    
    const calcTotalPrice = getCalcTotalPrice(calcModValue, i0_item_quantity, i0_item_basePrice, i0_item_discount)
    const itemTotalPrice = getItemTotalPrice(i0_item)

    console.log('calcTotalPrice', calcTotalPrice)
    console.log('itemTotalPrice', itemTotalPrice)
  }

  const printModsValues = (sale, index) => {
    const i0_item = getItem(sale, index)
    const i0_item_quantity = getItemQuantity(i0_item)
    const i0_item_mods = getItemModifiers(i0_item)
    const i0_item_discount = getItemDiscount(i0_item)

    const calcModValue = (getCalcModsValue(i0_item_mods) * i0_item_quantity) - i0_item_discount
    const itemTotalModValue = getItemTotalPrice(i0_item)

    console.log('calcModValue', calcModValue)
    console.log('itemTotalModValue', itemTotalModValue)
  }

  const printNoModsTotalValue = (sale, index) => {
    const i0_item = getItem(sale, index)
    const i0_item_quantity = getItemQuantity(i0_item)
    const i0_item_basePrice = getItemBasePrice(i0_item)
    const i0_item_discount = getItemDiscount(i0_item)

    const calcNoModsValue = (getItemBasePrice(i0_item) * i0_item_quantity) - i0_item_discount
    const itemNoModsValue = getItemTotalPrice(i0_item)

    console.log('calcNoModsValue', calcNoModsValue)
    console.log('itemNoModsValue', itemNoModsValue)
  }

  const printNormalisedDiscountAmount = (sale, index) => {
    const i0_item = getItem(sale, index)
    const discountAmount = getNormalisedDiscountAmount(getNormalisedDiscount(i0_item))
    console.log('discountAmount', discountAmount)
  }

  printNormalisedDiscountAmount(refundedSale, 0)
  printNormalisedDiscountAmount(originalSale, 0)

  // printDiscountValue(refundedSale, 0)

  // printNoModsTotalValue(originalSale, 0)
  // printNoModsTotalValue(refundedSale, 0)

  // printModsValues(refundedSale, 0)
  // printModsValues(originalSale, 0)
  // printItemPrices(originalSale, 0)
  // printItemPrices(refundedSale, 0)

  

  /* console.log('o_i0_modifiers_total_price_calc', o_i0_modifiers_total_price_calc)
  console.log('o_i0_item_totalPrice_mods_only', o_i0_item_totalPrice_mods_only) */


  /* const o_i0_totalPrice_no_mods = getItemTotalPrice(o_i0_item)
  const o_i0_item_basePrice = getItemBasePrice(o_i0_item)
  const o_i0_discount = getItemDiscount(o_i0_item)

  console.log('o_i0_totalPrice_no_mods', o_i0_totalPrice_no_mods)
  console.log('o_i0_calc_price_no_mods', (o_i0_item_basePrice * o_i0_item_q) - o_i0_discount) */

  //console.log('_totalPrice_no_mods', _totalPrice_no_mods)
}





