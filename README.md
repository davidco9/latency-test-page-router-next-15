# CP Sponsor Accounts

Sponsor accounts for minor customers

## Pre-requisites

- Node v22.18.0 or higher.
- pnpm v8.15.8.

## Usage

Run/start the project for development:

```
$ pnpm run dev
```

Create a production build and serve it on locahost:

```
$ pnpm run build:prod
```

Build the project:

```
$ pnpm run build
```

Run the tests:

```
$ pnpm run test
```

Run the test on watch mode:

```
$ pnpm run test:watch
```

Run eslint on the project.

```
$ pnpm run lint
```

To see the list the rest of available scripts, check `package.json`

# Getting Started

1. Install project dependencies (if not installed already) and bundle the libs using the `setup` command.

   ```
   $ pnpm run setup
   ```

2. Create a new `.env` file at the root of your newly generated project and add the ContentStack environment variables. Please request these from WJT or your team mates.
   _See `.env.example`_

```
  // .env
  # Information for Platform''s Content Stack
  PLATFORM_STACK_API_KEY = <ContentStack Key>
  PLATFORM_STACK_DELIVERY_TOKEN = <ContentStack Token>
  PLATFORM_STACK_ENVIRONMENT = <staging | onboarding | production>
  PLATFORM_STACK_BRANCH = <development | staging | onboarding | main>

  # Information for Business Configuration Stack
  BUSINESS_STACK_API_KEY = <ContentStack Key>
  BUSINESS_STACK_DELIVERY_TOKEN = <ContentStack Token>
  BUSINESS_STACK_ENVIRONMENT = <staging | onboarding | production>
  BUSINESS_STACK_BRANCH =<development | staging | onboarding | main>
```

3. Start the project running the `build:prod` command below. Navigate throught the default pages and explore the content

```

$ pnpm run build:prod

```

4. If applicable, add the name of the zone to corresponding web portal in `portalsConfig.mjs` file located in [`frontend-monorepo` repository](https://gitlab.com/raisin-global/raisin-gmbh/frontend/frontend-monorepo). This step will enable you to automatically start the zone together with all the other zones belonging to a portal. For more info check `fe-monorepo` [README.md](https://gitlab.com/raisin-global/raisin-gmbh/frontend/frontend-monorepo/-/blob/master/README.md)

## How to create/update resources on Transifex for µFEs

For a new zone, you only have to merge your zone's code to master. The master pipeline will detect it is a new zone and take all the required steps to create a new resource in transifex for your project. There is also 0 configuration needed, everything is already set up in `.tx/config`.

For updating resources in transifex, it is also an automated process. It works like this:

- Your changes related to translations will modify one of the `**/messages.ts` files. Once the code is merged to master, the pipeline will notice there were changes in those files.
- The pipeline will then execute `pnpm run tx:extract` to extract the resources and then `pnpm run tx:push` to push `default.json` to Transifex. This happens under the `translations` step in the pipline.
- Next, the pipeline will pause at `translations-approval` step. This is when you go to Transifex and update the required translations.
- Lastly, after you are finished updating them on transifex, resume the pipeline by approving the `translations-approval` step. The pipeline will take care of pulling the new translations (`pnpm run tx:pull`), compling them (`pnpm run tx:compile`) and then committing the changes into `master`.

## Setup / Run Lighthouse locally.

To run Lighthouse locally, you will first need to install the Lighthouse CI tool globally, by running `yarn global add @lhci/cli@latest`.
Run `lhci autorun` command to run Lighthouse on your Micro-Frontend. You should run this with the project running on localhost on a production build - `pnpm run build:prod`
This will either output all warnings and errors (if there are any) or a success message in your terminal. It will also generate a report in the `.lighthouseci` folder.

## Setup Sonarqube and monitor your projects code coverage, code smells, security vulnerabilities and more

Setting up sonarqube is also a 0 config job for you.

Once you push your code and open a MR, the pipeline will run on the MR and sonarqube will analyse your code. You will be able to log in to Sonarqube and find it in the list of projects under the following name pattern `MFE: "project name"`. Sonarqube also runs on master to do an overall code analysis of the entire project while in the MR pipeline it only checks new code.

## Troubleshooting

**Error**: `Cannot read property 'region' of undefined`

**Solution**: Your application is trying to reach ContentStack but you have not set up the `.env` file. Please create a `.env` file based on the `.env.example` and ask your team for the ContentStack credentials. If you already have the file, check that the credentials are correct

---

**Error**: `window not defined`

**Solution**: Make sure you are not trying to access the window object directly in your code without checking if it exists first. When we run our µFEs or libs with Next.js, the code is run locally as we generate the pages statically at build time, and not in the client browser. Because of this, there is no window object. Also pay attention how you check if the `window` object exists:
Right: `... typeof window !== 'undefined ...'`
Wrong: `... window?.location ...`
