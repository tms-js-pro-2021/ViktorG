import sum from './index';

describe('index', () => {
    it('adds 1 + 2 to equal 3', () => {

        //AAA
        //arange- настроить 
        const a = 1;
        const b = 2;

        //act - запустить 
        const result = sum(a,b);
        //assert - проверить 
        expect(sum(1,2)).toBe(3);
    })
})