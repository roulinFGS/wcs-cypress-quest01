
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
- create a local file .env
```
CYPRESS_RECORD_KEY=<some secret given in https://cloud.cypress.io/>
CYPRESS_PROJECT_ID=<some projectId given in https://cloud.cypress.io/>
```

# execute tests
```
npx cypress run --record --key 21341236-3058-46db-af7e-0d910139281d
```
