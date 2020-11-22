## Create-Island-App

Tiny World is an app that let you create your world by toggling multiple cells from ocean to land and vice versa.

### Technical Requirements

- [x] Tiny world is represented as a grid with width and height.
- [x] The grid is divided into cells.
- [x] Cells have two states, empty or filled (water or land).
- [x] Cells are togglable between states.
- [x] Grid loads in all empty state.
- [x] User can control with and height of the grid.
- [x] The grid handles dimension changes without changing the state modified by the user.
- [x] App has a display of the number of cells that are filled to the user.
- [x] App has a display of the number of Islands. An Island is cells connected with the X or Y-axis.
- [x] The app is tested.
- [x] The app is responsive.
- [x] App has the ability to turn dark and light theme. (Only header, TODO components)

### Preview of folder structure.

```bash
└── src
    ├── context
    │   └── themeContext.js
    │
    ├── lib
    │    ├── constants.js
    │    └── algorithms.js
    └── sections
        ├── AppHeader
        └── IslandApp
            ├── components
            ├── IslandApp.js
            ├── IslandApp.css
            ├── IslandApp.test.js

```
* This is a preview of the folder structure. The app has more components but, they follow the same structure, of react component, style, and test.
* Some folders have a .test.js file with relevant tests.

* Context: holds the configuration use context api, only used to toggle between different themes.
* Lib: holds the algorithm, which are used to count the number of cells and islands.
* Constants: holds data for testing purposes.
* Sections: holds the main components that are rendered in the app. AppHeader and IslandApp which holds the main logic.
    * * Inside the main components we have a component file that holds components relevant to that specific class.


### Design assumptions and architecture

### Components

### Data Structures

### Performance

#### Algorithms:
* count: Complexity: time O(N) and space O(1). The function iterates the grid counting each cell and generating, adding two variables: the number of water cells and land cells seen so far. It returns an object with the two variables.

* countIsland: Complexity: time O(N) and space O(N). The function has two helper functions: *isValid* and *exploreIsland*. CountIsland iterates the grid looking for a filled cell; when found, it triggers *exploreIsland*, which calls recursively and groups all the cells into an Island. By having an array of the visited cells, we know when to stop the recursive calls.

```javascript
  let exploreIsland = (row, col) => {
    if (!isValidCell(row, col)) return;
    if (!grid[row] || !grid[row][col]) return;
    if (grid[row][col].isEmpty === true) return;
    if (visitedCells[row][col] === true) return;
    
    visitedCells[row][col] = true;
    exploreIsland(row + 1, col);
    exploreIsland(row, col + 1);
    exploreIsland(row - 1, col);
    exploreIsland(row, col - 1);
  }
```

#### Render Loop: (TODO)

### UI/UX

This app is engaging and informative; methods used:

* Visual representation: The app displays text and graphs illustrations to display thactual status of the map.

* Pointer: Cursor is changed when the user hovers the grid. This is to inform it is clickable.

* Animations: When the user toggles a cell, it has a transition animation to involve and notify the user.


### Third-Party Libraries

* [Enzyme](https://github.com/enzymejs/enzyme) Used for testing components.
* [Lodash](https://lodash.com/): Used for throttling and memoization functions. (TODO)
* [Ant-Design](https://ant.design/): Used for responsive development, icons, and custom components.
* [Prop-Types](https://www.npmjs.com/package/prop-types): Used for type checking and a way to explain and document props.

### Lessons learn, what can be improved

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
