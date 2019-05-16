import ReduceStore from "flux/lib/FluxReduceStore";
import Dispatcher from '@/base/dispatcher/AppDispatcher'

const initState = {
  a: 1,
}

class PageStore extends ReduceStore {
  constructor() {
    super(Dispatcher)
  }

  getInitialState() {
    return { ...initState }
  }


  reduce(state = { ...initState }, action) {
    switch (action.type) {
      case RESET:
        return { ...initState }
      default:
        return state
    }
  }
}

export default new PageStore()
