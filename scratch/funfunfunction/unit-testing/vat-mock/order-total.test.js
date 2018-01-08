const orderTotal = require('./order-total')

const emptyFunction = () => {}

//with response parsing (Part 5, video: https://www.youtube.com/watch?v=ZbModC5pqv0)
it('parses the response correctly', () => {
  let isFakeFetchCalled = false
  const fakeFetch = (url) => {
    expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE')
    isFakeFetchCalled = true
    return Promise.resolve({
      json: () => Promise.resolve({
        rates: {
          standard: {
            value: 19
          }
        }
      })
    })
  }
  return orderTotal(fakeFetch, {
    country: 'DE',
    items: [
      { 'name': 'Dragon waffles', price: 20, quantity: 2 }
    ]
  }).then(result => {
    expect(result).toBe(20*2*1.19)
  })
})

it('Quantity', () =>
  orderTotal(emptyFunction, {
    items: [
      { 'name': 'Dragon candy', price: 2, quantity: 3 }
    ]
  }).then(result => expect(result).toBe(6)))

it('No quantity specified', () =>
  orderTotal(emptyFunction, {
    items: [
      { 'name': 'Dragon candy', price: 3 }
    ]
  }).then(result => expect(result).toBe(3)))

it('Happy path (Example 1)', () =>
  orderTotal(emptyFunction,{
    items: [
      { name: 'Dragon food', price: 8, quantity: 1 },
      { name: 'Dragon cage (small)',  price: 800, quantity: 1 }
    ]
  }).then(result => expect(result).toBe(808)))

it('Happy path (Example 2)', () =>
  orderTotal(emptyFunction, {
    items: [
      { name: 'Dragon collar', price: 20, quantity: 1 },
      { name: 'Dragon chew toy',  price: 40, quantity: 1 }
    ]
  }).then(result => expect(result).toBe(60)))