# `nl-tboi-frontend`
Frontend interface to my linear regression model used to predict Northernlion's The Binding of Isaac: Repentance runs.

## Contents
```
src
├── components      # all React components
│   ├── CharacterSelectbox.js    # Selectbox associated with entering starting params
│   ├── Footer.js
│   ├── Header.js
│   ├── ObjectiveSelectbox.js
│   ├── Submit.js                # Submit button and sending data as API request
│   └── TimedSelectbox.js
├── reducers      # all React components
│   └── rootReducer.js    # Root reducer for data between components
├── App.js          # main React app
├── index.css       # root-level styling
└── index.js        # React entrypoint (where React gets inserted into the page)
```

## Config
### Styling
Root page styling is done in `src/index.css`. All component styling is done through [`styled-components`](https://styled-components.com/docs/basics#getting-started) (example in `src/App.js`).

### Deployment
Deployed via [Heroku](https://www.heroku.com/) and is viewable [here](https://nl-tboi-frontend.herokuapp.com/).
