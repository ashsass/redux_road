const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200
  }
  
  const emptyReducer = (state = initialWagonState, action) => {
    switch(action.type){
      case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1 
        };
      }
      case 'travel': {
        if(state.supplies - (20 * action.payload) <= 0){
          return state;
        }
        return {
          ...state,
          supplies: state.supplies - (20 * action.payload),
          distance: state.distance + (10 * action.payload),
          days: state.days + action.payload
        }
      }
      case 'tippedWagon': {
        return {
          ...state,
          supplies: state.supplies - 30,
          distance: state.distance,
          days: state.days + 1
        }
      }
      case 'sell': {
        return {
          ...state,
          supplies: state.supplies - 20,
          cash: state.cash + 5
        }
      }
      case 'buy': {
        return {
          ...state,
          supplies: state.supplies + 25,
          cash: state.cash -15
        }
      }
      case 'theft': {
        return {
          ...state,
          cash: state.cash - (state.cash / 2)
        }
      }
      default: {
        return state;
      }
    }
  }
  
  
  
  let wagon = emptyReducer(undefined, {});
  console.log(wagon);
  
  wagon = emptyReducer(wagon, {type: 'travel', payload: 1});
  console.log('You travel for 1 day. Your wagon now looks like: ')
  console.log(wagon)
  
  wagon = emptyReducer(wagon, {type: 'gather'});
  console.log('You decide to gather supplies. Your wagon now looks like :');
  console.log(wagon);
  
  wagon = emptyReducer(wagon, {type: 'tippedWagon'});
  console.log('You attempt to ford a rushing river. Your fail at your attempt and tip the wagon over. Your wagon now looks like: ');
  console.log(wagon);
  
  wagon = emptyReducer(wagon, {type: 'travel', payload: 3});
  console.log('You travel for 3 days to cover more distance. Your wagon looks like: ');
  console.log(wagon);