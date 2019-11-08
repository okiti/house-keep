const initState = {
  profiles: [
    { id: "1", name: "Alayande Abiola", age: "35", work: "5 years" },
    { id: "2", name: "Okiti Eric", age: "20", work: "3 years" },
    { id: "3", name: "Ogunniyi Tunmise", age: "23", work: "2 years" }
  ]
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROFILE":
      console.log("created profile", action.profile);
      return state;
    case "CREATE_PROFILE_ERROR":
      console.log("create profile error", action.err);
      return state;
    default:
      return state;
  }
};

export default profileReducer;
