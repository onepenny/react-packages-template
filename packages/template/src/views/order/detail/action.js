export function init() {
  console.log('order/detail init')
}


export function trigger(type, payload = {}) {
    console.log(`trigger:${type}_${JSON.stringify(payload)}`)
    switch (type) {
        case 'pay':
            return jumpToPay()
        default: break
    }
}

function jumpToPay(params) {
  console.log('jumpToPay')
}

