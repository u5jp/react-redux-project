import _ from 'lodash'
import { 
  CREAT_EVENT,
  READ_EVENTS,
  READ_EVENT ,
  DELETE_EVENT,
  UPDATE_EVENT
} from '../actions'

export default (events = {}, action) => {
  //console.log(action.type)
  switch (action.type){
    case CREAT_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      //{id: 3, title: "Let's have an event 3!", body: "This is the body for event 3."}
      return { ...events, [data.id]: data}
    case READ_EVENTS:
      //[
      //   {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
      //   {"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."}
      //]
      // {
      //   1:{"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
      //   2:{"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."}
      // }
      // console.log(action.type);
      // console.log(action.response.data)
      // console.log(_.mapKeys(action.response.data,'id'))
      return _.mapKeys(action.response.data,'id')

    case DELETE_EVENT:
      console.log(action.id)
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}