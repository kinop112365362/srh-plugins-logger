# Srh-Plugins-Logger

## Quick Start

```js
import { srhLogger } from 'srh-plugins-logger'
import { createStore } from 'structured-react-hook'

const useStore = createStore(
  {
    initState: {name:''},
    service:{
      helloWorld(){
        this.rc.setName('hello world')
      }
    }
    controller: {
      onMount(){
        this.service.helloWorld()
      }
    }
  },
  [srhLogger]
)
function App(){
  const store = useStore()
  useEffect(()=>{
    store.controller.onMount()
  },[])
  return(
    <div>{store.state.name}</div>
  )
}
```

运行会输出如下 Logger

[Ctrl] onMount

[Service]  helloWorld 'helloWorld'

[Reducer Case]   setName '' → 'helloWorld'
