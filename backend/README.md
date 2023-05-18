# Online shop backend

To configure jest test.

1. Install following packages, version can be different

    "jest": "~29.5.0",\
    "supertest": "~6.3.3",\
    "@types/jest": "^27.5.2",\
    "@types/supertest": "~2.0.12",\
    "ts-jest": "~29.1.0",\
    "@jest/globals": "~29.5.0",

2. Run command to generate jest.config.js `npx ts-jest config:init`

3. Add `**/*.test.ts` in `tsconfig`s.json exclude files list

      "exclude": [\
        "**/*.test.ts",\
      ]

4. Add test script in package.json
      `"test": "jest"`

5. To add coverage in package.json
      `"test": "jest --coverages"`

6. `Jest Runner` debugging extension id vs code: `firsttris.vscode-jest-runner`
