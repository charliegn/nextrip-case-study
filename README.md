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

### Run as development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build and run as production server

```bash
npm run build
npm run start
```

### Run Tests
While your application is running on `localhost:3000`, you can run cypress tests in a different tab/window of your terminal with the following command:
```bash
npm run cypress
```

## Assumptions

- The functionality was the goal and not making the page look exactly like the actual [NexTrip](https://www.metrotransit.org/nextrip) page.
- Departure time and recurring API call to get updates on departure times was not required
- The option to search "By stop #" was not required
- Routing and UX around direct routing to a list of stops just needed to match that of the [NexTrip](https://www.metrotransit.org/nextrip) page.
- Branding and stying implementation is up to the distruction of the application's author
- Regarding "The steps to execute provided tests" requirement
  - Implementing end-to-end (E2E) tests satisfies this requirement. This requirement does not explicitly mention "unit tests" and thus unit testing, integreation testing and/or E2E testing are all viable options.
  - The use of "tests" (plural) means more then one (1), thus two (2) tests or more satisfies this requirement.
