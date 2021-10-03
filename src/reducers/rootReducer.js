const initState = {
    character: [],
    obj: [],
    timed: []
}

export default function rootReducer (state=initState, action) {
    console.log(action);
    switch (action.type) {
        // do stuff
        case 'CHANGE_CHAR':
            return {
                ...state,
                character: [...state.character, action.newCharacter]
            }
        case 'CHANGE_OBJ':
            return {
                ...state,
                obj: [...state.obj, action.newObjective]
            }
        case 'CHANGE_TIMED':
            return {
                ...state,
                timed:  [...state.timed, action.newTimed]
            }
        default:
            // default to existing state
            return state
    }
}