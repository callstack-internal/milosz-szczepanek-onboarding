# Hardcore Weather App

> **Note**: Make sure you have completed
> the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

Project is created with React Native CLI + TypeScript template.

## Features

**Weather Screen**

Displays list cities where user can investigate weather. User is able to pull to refresh the
list of cities and the list header utilize the native location service to get the current location of the user
and display the weather for that location.

**Weather Details Screen**

User can investigate details of selected city weather.

## Install and run the project

Remember that before running the project you have to put your Open Weather API key in the `.env` file.

You have to create an account on [Open Weather](https://openweathermap.org/) and generate an API key from
here: https://home.openweathermap.org/api_keys

1. Setup project

```shell
yarn setup
```

2. Start bundler

```shell
yarn start
```

3. Run the app from Xcode and Android Studio or via terminal

```shell
 yarn android
```

or

```shell
 yarn ios
```

## Scripts

| Command              | Description                                                                     |
|----------------------|---------------------------------------------------------------------------------|
| `yarn start`         | Starts the Metro bundler.                                                       |
| `yarn android`       | Builds the app for Android and runs it on a connected device or emulator.       |
| `yarn ios`           | Builds the app for iOS and runs it on a connected device or simulator.          |
| `yarn test`          | Runs the unit tests using Jest.                                                 |
| `yarn lint`          | Runs ESLint to check for code style issues.                                     |
| `yarn typescript`    | Runs TypeScript compiler to check for type errors.                              |
| `yarn sanity`        | Runs a sanity check to ensure all the tests are on green.                       |
| `yarn setup`         | Sets up the project by installing dependencies and configuring the environment. |
| `yarn prepare`       | Prepares the project for Husky by installing Git hooks.                         |
| `yarn ci:test`       | Runs the base linting and type checking for husky pre-push hook.                |
| `yarn test:e2e`      | Runs end-to-end tests using Maestro.                                            |
| `yarn setup:maestro` | Sets up the Maestro environment for end-to-end testing.                         |

## Project structure

This project is structured in a flat way that allows for easy navigation and understanding of the codebase. The main
directories are:

- `.githooks`: Contains Git hooks for push checks.
- `specs`: Contains the specs of native modules used in the project.
- `husky`: Contains the configuration for Husky that handles pre-push hook.
- `__E2E__`: Contains end-to-end tests for the app in Maestro.
- `src`: Contains all the source code for the application.
    - `components`: Reusable components used throughout the app.
    - `configs`: Configuration files for the app, such as general styles, environment variables and api interceptors.
    - `hooks`: Custom hooks for managing state and side effects.
    - `navigation`: Navigation setup and configuration.
    - `screens`: Contains the main screens of the app, such as WeatherScreen and WeatherDetailsScreen.
    - `services`: API services for fetching data.
    - `types`: TypeScript types and interfaces used in the app.
    - `utils`: Utility functions used in the app.
    - `mocks`: Mock data and functions used for testing purposes.
    

 
