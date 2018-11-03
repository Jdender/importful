import { add } from './main';

describe('add', () => {

    it('should add 1 + 2', () => {
        const num = add(1, 2);
        expect(num).toBe(3);
    });
});
