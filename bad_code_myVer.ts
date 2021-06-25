function deliveryMethod(): string {
  // TODO
  const foo: (null | object) = null // for example
  // TODO

  return foo ? 'overnight' : 'standard'
}

function shipWeight(): number {
  const id: string = 'weight'
  const el: any = document.getElementById(id) // ? how to specify type for html object?

  if (!el) {
    return 0
  } else {
    const elData: string = el.textContent // ! Property 'textContent' does not exist on type 'object'
    return parseInt(elData)
  }
}

function sendUpdates(emailAddr: string | string[]): void {
  
  function sendEmail(addr: string): void {
    console.log(`Shipping to ${addr} via ${deliveryMethod()} delivery`)
    if (shipWeight() > 100) {
      console.log('WARNING: Oversize package')
    }
  }

  if (Array.isArray(emailAddr)) {
    emailAddr.forEach((item: string): void => { // forEach instead of map
      sendEmail(item.trim())
    })
  } else {
    sendEmail(emailAddr.trim())
  }
}