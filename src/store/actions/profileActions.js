export const createProfile = profile => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call
    const firestore = getFirestore();
    firestore
      .collection("profiles")
      .add({
        ...profile,
        skill: "Mechanic",
        employeeId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROFILE", profile });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROFILE_ERROR", err });
      });
  };
};
