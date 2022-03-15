![SparkHeroHeader](/.github/assets/SparkHeroHeader.png)

# Build Your Own Web App - SparkHero

Pow! Bam! Let's build a web application! This week, you are going to work on SparkHero — the latest web application to show of all of our favorite heroes and villains from the DC and Marvel universes. SparkHero will let users see all 369 heros and villains along with their intelligence, strength, and combat power stats. In addition, it will allow users to sort by publisher, by role, and will eventually allow users to sort characters by power stats.

Are you ready to don your cape? Let's build SparkHero!

## Getting Started

1. Clone the repo to your local machine.
1. Install all required dependencies (`npm i`).
1. Get building!

## Anatomy of SparkHero

SparkHero is two things: an app that consumes character data, and and API that supplies character data. Our application will fetch character data, including biographical data and images, and then build the user interface (UI) using HTML, CSS, and JavaScript. For this exercise, you will be working __exclusively__ on the application side—meaning that you will not be modifying, adding, or deleting any code on the API side, which is located in the `/api` directory at the project root.

## Running the Project

For the most part, you'll be running `npm run dev`. This command will run SparkHero in development mode on your local machine at <http://localhost:8080> and the API that supplies the data at <http://localhost:8080/api>. Running in development mode will automatically update SparkHero in the browser using [hot module replacement][Webpack-HotModule] without _actually_ reloading the project. This means you can make change to your code and see the results quickly.

Running SparkHero in development mode is different than production mode. In production mode, the hot module replacement and live reloading are disabled. These production builds of the application are generally smaller and are focused on performance. While development mode is great for local development, the production builds are what we'll be using if SparkHero is deployed.

## Deployment

The main branch of SparkHero is deployed automatically to <https://sparkhero.netlify.app> via a GitHub action. When you submit PRs, your branch will automatically be deployed to a PR branch that can be used by developers reviewing your PR. The URL of this deployed branch will be automatically posted to your PR in GitHub once deployment is complete.

## Available APIs

Our SparkHero app needs data and luckily, it comes with a sidekick: the SparkHero API. The SparkHero API has the following available endpoints:

| Endpoint | Method | Description |
| ------------- | ------------- |------------- |
| `/api/all` | `GET` | Return all all characters |
| `/api/id/{CHARACTER ID}` | `GET` | Return the information for a specific character based on their ID |
| `/api/image/{IMAGE_NAME}` | `GET` | Return the image for a character based on their ID |

## All Available Commands

| Command | Description |
| ------------- | ------------- |
| `npm run dev` | Build and run both the SparkHero app and API in development mode |
| `npm run dev:app` | Build and run only the SparkHero app in development mode |
| `npm run dev:api` | Run only the SparkHero API in development mode |
| `npm test` | Run all Jest tests |
| `npm test:coverage` | Run all Jest tests, but with coverage collected |
| `npm run lint` | Lint all JavaScript and Sass/CSS |
| `npm run lint:js` | Lint only JavaScript |
| `npm run lint:css` | Lint all Sass/CSS |
| `npm build` | Build the project for production |
| `npm build:dev` | Build the project for development |

[Webpack-HotModule]: https://webpack.js.org/concepts/hot-module-replacement/
