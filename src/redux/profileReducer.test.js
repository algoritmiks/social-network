import profileReducer, {newPostActionCreate} from "./profileReducer";

let state = {
  postsData: [
      { id: 1, post: "Hi there! How are you?", likes: 5 },
      { id: 2, post: "I'm going to hard work!", likes: 100 }
  ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    const action = newPostActionCreate("Just new post text");

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expecting
    expect(newState.postsData.length).toBe(3);

});

it('message of new post should be correct', () => {
    // 1. test data
    const action = newPostActionCreate("Just new post text");

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expecting
    expect(newState.postsData[2].post).toBe("Just new post text");
});
