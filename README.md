# express-react-app
A template for a simple app with node/Express backend and ReactJS frontend. 
Webpack and ESLint config are mostly based on [Francesco Angoletto's simple-react-app](https://github.com/Kornil/simple-react-app/blob/master/package.json).
The only backend dependency is Express, but it should be easily expandable.
Routing should be handled via React Routes. Includes scss.

# Usage
The project uses yarn instead of npm, so if you don't have it, head to the
[yarn installation guide](https://yarnpkg.com/lang/en/docs/install/).

After you install yarn, you can use the following commands:
```bash
yarn install
```
Install all the dependencies.
<br>

```bash
yarn clear
```
Removes the build directory from your project. Recommended to use before doing
anything else.
<br>

```bash
yarn front-dev-init
```
This command just fires up your server on `localhost:5000`. Should be used 
if you want to test requests from your frontend to your own backend.<br>
**note** This command has to be run in a separate terminal.
<br>
```bash
yarn front-dev
```
Starts webpack-dev-server on `localhost:8080` that will listen to changes in 
any of your `.jsx` files and reload. Should be used for developing the frontend
side of your app.<br>
**note** If you want to test sending requests to your own backend, you need to
use `yarn front-dev-init` first.<br>
**note** Using `yarn front-dev-init` in conjunction with `yarn front-dev`
actually allows you to do some tweaks in the code responsible for handling 
requests on your server that will be immediately visible on the frontend side. 
<br>
```bash
yarn back-dev
```
Will bundle the react part of the app, start your server.js using nodemon
(you get server restart on each change) and use the bundle as a default view.
<br>

# Images
Adding images is done using url-loader module. Example:
```javascript
// In someComponent.jsx

import React from 'react';
import image from '../img/img.png';

const someComponent = () => (
  <img src={image} alt="just some image" />
);

...
```