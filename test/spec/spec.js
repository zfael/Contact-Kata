describe('Protractor Contact KATA', function () {
    it('should have a title', function () {
        browser.get('http://localhost:3000/');
        expect(browser.getTitle()).toEqual('Contact-Kata');
    });
});