import 'babel-polyfill'
import { handleSubmit } from 'src/client/js/formHandler.js'

describe('Client Test', () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    });
})
