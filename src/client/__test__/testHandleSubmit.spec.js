// to solve ReferenceError: regeneratorRuntime is not defined
// import 'babel-polyfill'
import { handleSubmit } from 'src/client/js/formHandler.js'

describe('Client Test', () => {
    // TODO: add your test cases to test client
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    });
})
