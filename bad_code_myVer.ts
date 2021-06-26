function deliveryMethod(addr: string): string {
  // TODO
  return addr ? 'overnight' : 'standard'
}

function shipWeight(): number {
  const id: string = 'weight'
  const el: HTMLElement = document?.getElementById(id) // ? how to specify type for html object?

  if (!el) {
    return 0
  } else {
    const elData: string = el.textContent // ! Property 'textContent' does not exist on type 'object'
    return parseInt(elData)
  }
}

// function sendUpdates<T>(addr: T): T

function sendUpdates(addr: string): string
function sendUpdates(addr: string[]): string[]

function sendUpdates(emailAddr: string | string[]) {
  
  function sendEmail(addr: string): string | string[] {
    return `Shipping to ${addr} via ${deliveryMethod(addr)} delivery`

    if (shipWeight() > 100) {
      return 'WARNING: Oversize package'
    }
  }

  if (Array.isArray(emailAddr)) {
    return emailAddr.map((item: string): string | string[] => {
      return sendEmail(item.trim())
    })
  } else {
    return sendEmail(emailAddr.trim())
  }
}

console.log(sendUpdates("Pikulki 56"))
console.log(sendUpdates(["Pikulki 56"]))