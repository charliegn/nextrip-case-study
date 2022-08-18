This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Download source code

Locate the green "< > Code" button near the upper right of this page and choice one of the following options:
#### OPTION 1: Clone repository

1. Choose your clone string type: HTTPS or SSH

2. Copy choosen string type

3. In your terminal, navigate the directory you want the projects files to be stored and enter the following:

    ```bash
    # This example uses the SSH string
    git clone git@github.com:charliegn/nextrip-case-study.git
    ```

4. Change into the cloned project folder and install the dependencies using `npm install`

5. Run the application as development or production server using the following instructions below

#### OPTION 2: Download ZIP file

1. [Download zip file](https://github.com/charliegn/nextrip-case-study/archive/refs/heads/main.zip) of this repostitory and extract it in a directory of your choice

2. From your terminal, go into the extracted folder and install the dependancies using `npm install`

3. Run the application as development or production server using the following instructions below

## Run as development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build and run as production server

```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run Cypress Tests

There are two (2) different ways to run Cypress. One is headless in the terminal and the other is using Cypress Dashboard locally.

### Run tests using headless mode

While your application is running on `localhost:3000`, open a different tab in your terminal. Then run the following command:

```bash
npx cypress run
```

### Run tests using Cypress Dashboard

While your application is running on `localhost:3000`, open a different tab in your terminal. Then run the following command:

```bash
npm run cypress
```

The local Cypress Dashboard will launch, then:

1. Click on the E2E Testing box

2. Choose a browser to run tests in (e.g., Chrome) and click the green "Start E2E Testing in [Chrome]" button. A new window will open

3. Double click on the `app.cy.js` test under E2E specs.

   **NOTE** Watch closely as the tests will start to run automatically and you'll have a visual of the browser on the right of the screen and test running on the left.

4. All the test should pass and you can expand the Navigation tests to see details for each

5. If you want to re-run the tests, find the refresh icon at the top of the page on the far right of the "Specs" Header.

## Assumptions

- The functionality was the goal and not making the page look exactly like the actual [NexTrip](https://www.metrotransit.org/nextrip) page.
- Departure time and recurring API call to get updates on departure times was not required
- The option to search "By stop #" was not required
- Routing and UX around direct routing to a list of stops just needed to match that of the [NexTrip](https://www.metrotransit.org/nextrip) page.
- Branding and stying implementation is up to the distruction of the application's author
- Regarding "The steps to execute provided tests" requirement
  - Implementing end-to-end (E2E) tests satisfies this requirement. This requirement does not explicitly mention "unit tests" and thus unit testing, integreation testing and/or E2E testing are all viable options.
  - The use of "tests" (plural) means more then one (1), thus two (2) tests or more satisfies this requirement.
