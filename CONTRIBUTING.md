# Setup on your local machine

## Prerequisites

- You have Node 14+ installed.
- You have [mongodb's local instance](https://docs.mongodb.com/guides/server/install/) installed

## Initial Steps

1. Fork this repository,
   click on the _fork_ icon located on top-right side of this page, below your avatar

2. Clone that _forked_ repository.

```bash
git clone https://github.com/[yourUsername]/class-mgmt-system.git
```

3. Set up the _upstream_ remote URL for referencing the original repository

```bash
git remote add upstream https://github.com/rahuldahal/class-mgmt-system
```

4. from the `class-mgmt-system` directory, install necessary dependencies

```bash
cd class-mgmt-system
```

````bash
yarn install # installs the base dependencies```

## The generic workflow

1. Pull the latest changes from the original repository (the upstream)

```bash
git pull upstream main
````

2. Then, create a separate branch for every new feature/bug fix

```bash
git checkout -b [branchName] # eg. git checkout -b signup-feature
```

3. Start the app(frontend+backend)

```bash
mongod # mongodb's local instance
yarn start # http://localhost:3000
```

4. Do your change / Implement a new feature
5. Don't forget to keep pushing your progress to the remote (your _forked_ repository)

```bash
git add .
git commit -m "brief about your change..."
git push -u origin [branchName]
```

> I recommend you to follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) instructions for writing commit messages. It's not mandatory though.

# Getting ready to send a Pull Request

1. Make sure all the test passes.

```bash
yarn test # should pass all the checks
```

2. Create a pull request,
   - Go to your _forked_ repository on github,
   - If there are no conflicts, you will see a button saying **create a new Pull Request**.
   - Make sure to select the `develop` branch as your pull request target.
   - Click on that big green button.
