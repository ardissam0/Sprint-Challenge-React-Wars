# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    - React JS is a JavaScript library that is used to build UI. I allows us to build reusable UI components. It tries to solve the issues that come with building large apps with dynamic data changes. 

2. What does it mean to think in react?

    - It means to think in components with props, where parents pass props down.


3. Describe state.

    - State is an object that can change and each component can have its own state.

4. Describe props.

    - props are properties that are used to pass data between components.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

    - side effects are anything that affects something outside of the scope of the function that is being executed. You add a second argument to useEffect(() => to handle the syncing of effects to state or prop changes using the name of the dependency that is being synced.
