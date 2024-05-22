
# setup first tests in cypress dashboard
https://cloud.cypress.io/projects/hc1h8u/runs

# help
https://docs.cypress.io/guides/cloud/account-management/projects#Set-up-a-project-to-record

# setup a new app
- install cypress -D
- append cypress.yml and cypress.config.js
- create or login to a account: https://cloud.cypress.io/
- launch cy:open and select e2e to scaffold it
- add to you secrets in github secretes actions
- create a local file .env with following entries
```
CYPRESS_RECORD_KEY=<some secret given in https://cloud.cypress.io/>
CYPRESS_PROJECT_ID=<some projectId given in https://cloud.cypress.io/>
```

# execute tests
```
npx run cy:test
```

(see test dashboard)[https://cloud.cypress.io/projects/b1gx68/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&tagsMatch=ANY&timeRange=%7B%22startDate%22%3A%222023-05-23%22%2C%22endDate%22%3A%222024-05-22%22%7D]
