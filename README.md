# Goal

This project is a seed react boilerplate which combines [React](https://reactjs.org/) + [Redux](https://redux.js.org/) + [Typescript](https://www.typescriptlang.org/) + [React Hooks](https://reactjs.org/docs/hooks-intro.html) with a reactive programming approach with [RxJs](https://rxjs-dev.firebaseapp.com/) + [redux-observable](https://redux-observable.js.org/) + [typesafe-actions](https://github.com/piotrwitek/typesafe-actions), which makes it very clean and simple boilerplate for dealing with redux and very typesafe. This was partially inspired by [this talk](https://www.youtube.com/watch?v=AslncyG8whg) about how they use it in Netflix

## Done so far:
- Framework: React
- Language: Typescript
- State management: Redux
- Side effects: Redux-observable + RxJs
- i18n - react-i18next
- Styling: Material UI + Styled-components
- Environment dependant variables: Dotenv
- Bundling tool: Create react app (CRA) + Craco (to allow aliased imports)

## Missing/TODO:
- Unit tests - Jest + Enzyme

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
