export const createProject = (project) => {
    return(dispatch, getState) => {  // Dispatch method that dispatches the Action to a Reducer
        // make async call to database
        dispatch({ type: 'CREATE_PROJECT', project});

    }
};