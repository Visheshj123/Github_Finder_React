import { SET_ALERT, REMOVE_ALERT} from '../types'

//returns the new state
export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return  action.payload //the state now just consists of the payload so alert won't be be null
    case REMOVE_ALERT:
      return null
  }

}
