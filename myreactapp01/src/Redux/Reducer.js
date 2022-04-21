const initialstate = {
    age: 21
}

const Reducer = (state=initialstate, action)=>{
  switch(action.type){
      case "AgeUp": return {...state, age:state.age+1};
      case "AgeDown": return {...state, age:state.age-1};
      default : return state;
  }
}

export default Reducer;