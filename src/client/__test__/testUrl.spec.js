// TODO: import the url check function
import { checkForUrl } from "src/client/js/checkURL.js"

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        // TODO: write your logic here
        ;
        expect(checkForUrl).toBeDefined();
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        // TODO: write your logic here
        expect(checkForUrl('hello')).toBe(false);
    })

    test('Testing the checkUrl function return true for valid url', () => {
        // TODO: write your logic here
        expect(checkForUrl('https://www.google.com/')).toBe(true);
    })
})
