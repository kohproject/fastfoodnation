export function FilterByType (state, payload){
   
    const $rests = state.rests.filter(itm => itm.cl === payload);

   this.commit('MUT_RESTS',$rests);
}

export function MUT_RESTS(state, payload){
    state.filteredRests =[];

    if(payload !== null){
        state.filteredRests = payload;
    }
else{
        state.filteredRests = state.rests;
    }

    console.log(state.filteredRests);
}