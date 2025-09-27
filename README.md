# build-test

Test repository for validating builds with **GitHub Actions**.

* Uses Node.js with environment variables (`.env`).
* If `BUILD_RESULT=success` → build passes, otherwise it fails.
* Workflow runs automatically on push and PR.

### Local run

```bash
npm install
npm run build
```

