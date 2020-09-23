import { Sale } from '../../../../src/sale'
import { moneyValue } from '../../../../src/money'
import { taxedMoneyCreate } from 'sales/src/taxed-money'

export const generateReport = (actual: any, expected:any, originalSale: any, refundedSale: any) => {
  return JSON.stringify({
    actual,
    expected,
    originalSale,
    refundedSale
  })
}

export const getExpected = (data: any) => data.expected
export const getActual = (data: any) => data.actual
export const getOriginalSale = (data: any) => data.originalSale
export const getRefundedSale = (data: any) => data.refundedSale

export const deserialiseSale = (saleData: any) => { 
  return Sale.deserialise(saleData)
}

export const getTotal = (sale: any) => deserialiseSale(sale).total.inc[moneyValue].toNumber()

export const isRefundedSale = (sale: any) => !!sale.refundedSale

export const getItems = (sale: any) => sale.items
export const getVoidItems = (sale: any) => sale.voidItems

export const getCurrencyDP = (sale: any) => sale.currency.decimalPlaces

export const getItemTotalPrice = (item: any) => item.totalPrice.inc[moneyValue].toNumber()

export const getItemsTotalPrice = (sale: any) =>
  deserialiseSale(sale).items.map(i => getItemTotalPrice(i))

export const getItem = (sale: any, index: number) => deserialiseSale(sale).items[index]

export const getItemDiscount = (item: any) => item.discount.amount.inc[moneyValue].toNumber()

// export const geItemDiscountSerialised = (item: any) => item.discount.serialise()

export const getItemType = (item: any) => item.type

export const getItemQuantity = (item: any) => item.quantity

export const getItemBasePrice = (item: any) => item.basePrice.inc[moneyValue].toNumber()

export const getItemTotalPriceBeforeDiscount = (item: any) => item.totalPriceBeforeDiscount.inc[moneyValue].toNumber()

export const getItemModifiers = (item: any) => item.modifiers

export const getItemModifierBasePrice = (modifer: any) => modifer.basePrice.inc[moneyValue].toNumber()

export const getItemsModifiersBasePrices = (modifiers: any) => modifiers.map(
  (m: any) => getItemModifierBasePrice(m)
)

export const getPerParentQuantity = (modifier: any) => modifier.perParentQuantity

export const itemOwnTotalPrice = (item: any) => item.ownTotalPrice.inc[moneyValue].toNumber()

export const getTaxedMoneyIncValue = (taxedMoney: any) => taxedMoney.inc[moneyValue].toNumber()

export const getCalcModsValue = (modifiers: any) => 
  modifiers.reduce((sum: number, modifier: any) => {
    const m_basePrice = getItemModifierBasePrice(modifier)
    const m_perParentQuantity = getPerParentQuantity(modifier)
    return sum + (m_basePrice * m_perParentQuantity)
  }, 0)

export const getCalcTotalPrice 
  = (modifiers_calc: number, quantity: number, itemBasePrice: number, discount: number) =>
  (modifiers_calc * quantity) + (itemBasePrice * quantity) - discount

export const getNormalisedDiscount = (item: any) => item.normalisedDiscount

export const getNormalisedDiscountAmount = (normalisedDiscount: any) => normalisedDiscount.amount[moneyValue].toNumber()