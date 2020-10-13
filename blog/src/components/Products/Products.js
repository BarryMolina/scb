import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import React, { createRef, useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import InputNumber from 'rc-input-number'
import ProductCard from './ProductCard'
import ReactDOM from 'react-dom'
import { loadStripe } from '@stripe/stripe-js'

const validateForm = () => {
  var x = document.getElementsByClassName('quantity')
  var y = 0
  for (let box of x) {
    if (box.value == '') {
      y = 0
    } else {
      y = 1
    }
  }
  if (y == 1) {
    redirectToCheckout()
  } else {
    //rdebugger;
    alert('You must set a quantity on at least one item')
    //return false
  }
}

const isEmpty = str => {
  if (str == '') {
    return 0
  } else {
    return parseInt(str)
  }
}
const makeShopArray = () => {
  let prodtable = document.getElementById('productlist')
  let pricelist = []
  var rows = document.getElementById('productlist').getElementsByTagName('tr')
  var i = 0
  for (let row of rows) {
    if (i != 0 && isEmpty(row.getElementsByTagName('input')[0].value) != 0) {
      pricelist.push({
        price: row.cells[4].innerHTML,
        quantity: parseInt(row.getElementsByTagName('input')[0].value),
      })
    }
    i++
  }
  return pricelist
}
const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#000',
  padding: '12px 60px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}
const buttonDisabledStyles = {
  opacity: '0.5',
  cursor: 'not-allowed',
}
let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      'pk_test_51HPt0uKMwW9HTmvkSif4ayeFLRgS80cfQeuF29tvt8ih1GafroMDI2Tsy67e7BA0zTopblg1zEQ1jQ01k59iqE6h00rQx6qOUn'
    )
  }
  return stripePromise
}

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  })
  return numberFormat.format(price)
}

export default function Products() {
  const regRows = React.createRef()

  const enableSubmit = () => {
    console.log('we did it')
    console.log(regRows)

    const enabled = Array.prototype.slice
      .call(regRows.current.children)
      .some(prod => {
        return Boolean(Number(prod.children[3].children.quantity.value || '0'))
      })
    setLoading(!enabled)
    console.log(enabled)

    // let sumQuan = 0
    //const productMap = map(regRows.current.children, (prod) => {
    //  sumQuan.(prod.children[3].children.quantity.value)
    //})

    // = getElementsByClassName('quantity_input')
    //console.log(inputs)
  }
  const onToken = token => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`)
      })
    })
  }
  const [loading, setLoading] = useState(true)
  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: makeShopArray(),
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    })
    if (error) {
      console.warn('Error:', error)
      setLoading(false)
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query ProductQuery {
          prices: allStripePrice(
            filter: { active: { eq: true } }
            sort: { fields: [unit_amount] }
          ) {
            edges {
              node {
                id
                active
                currency
                unit_amount
                product {
                  id
                  description
                  name
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <form className="Form" id="register">
            <table id="productlist">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Description</td>
                  <td>Price</td>
                  <td>Quantity</td>
                </tr>
              </thead>

              <tbody ref={regRows}>
                {data.prices.edges.map(item => (
                  <tr id={item.node.product.id} key={item.node.product.id}>
                    <td>{item.node.product.name}</td>
                    <td>{item.node.product.description}</td>
                    <td>
                      {formatPrice(item.node.unit_amount, item.node.currency)}
                    </td>
                    <td>
                      <input
                        className="quantity_input"
                        id="quantity"
                        placeholder="0"
                        min="0"
                        max="10"
                        type="number"
                        placeholder="0"
                        style={{
                          background: 'rgba(212, 212, 255, 0.035)',
                          border: 'none',
                        }}
                        onChange={enableSubmit}
                      ></input>
                    </td>
                    <td id="priceid" style={{ visibility: 'collapse' }}>
                      {item.node.id}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button disabled={loading} onClick={redirectToCheckout}>
              Register
            </button>
          </form>
        </div>
      )}
    />
  )
}
