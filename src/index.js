// eslint-disable-next-line no-unused-vars
function getStateType(rcKey) {
  return rcKey.slice(3).charAt(0).toLowerCase() + rcKey.slice(4)
}
function enhanceUtils(store, storeKey, worker = { before() {} }) {
  const keys = Object.keys(store[storeKey])
  keys.forEach((key) => {
    const originFn = store[storeKey][key]
    store[storeKey][key] = (...args) => {
      worker.before(key, ...args)
      return originFn(...args)
    }
  })
}
export const srhLogger = (s, storeConfig) => {
  enhanceUtils(s, 'rc', {
    before(rcKey, ...args) {
      console.groupCollapsed(`[Reducer Case]   ${rcKey}`)
      console.log('NextValue:', args)
      console.groupEnd(`[Reducer Case]  ${rcKey}`)
    },
  })
  if (s.controller) {
    enhanceUtils(s, 'controller', {
      before(ctrlKey, ...args) {
        console.groupCollapsed(`[Ctrl] ${ctrlKey}`)
        if (args) {
          console.log(args)
        }
        console.groupCollapsed('SourceCode')
        console.log(storeConfig.controller[ctrlKey])
        console.groupEnd('SourceCode')
        console.groupEnd(`[Ctrl] ${ctrlKey}`)
      },
    })
  }
  if (s.service) {
    enhanceUtils(s, 'service', {
      before(serviceKey, ...args) {
        console.groupCollapsed(`[Service]  ${serviceKey}`)
        if (args) {
          console.log(args)
        }
        console.groupCollapsed('SourceCode')
        console.log(storeConfig.service[serviceKey])
        console.groupEnd('SourceCode')
        console.groupEnd(`[Service]  ${serviceKey}`)
      },
    })
  }
  return s
}
