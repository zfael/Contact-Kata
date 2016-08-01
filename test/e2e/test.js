describe('Protractor Contact KATA', function () {

    var listButton = element(by.id('list-button'));
    var newButton = element(by.id('new-button'));

    //new page
    var nameField = element(by.model('data.name'));
    var addressField = element(by.model('data.address'));
    var phoneField = element(by.model('data.phone'));
    var saveNewContactButton = element(by.id('save-contact-button')); 

    beforeEach(function () {
        browser.get('http://localhost:3000/');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Contact-Kata');
    });

    it('should add a contact and list', function () {
        addContact();
        expect(element.all(by.repeater("x in contacts")).count()).toBe(1);

        addContact();
        expect(element.all(by.repeater("x in contacts")).count()).toBe(2);
    });

    function addContact() {
        newButton.click();

        nameField.sendKeys("Rafael");
        addressField.sendKeys("Rua Teste");
        phoneField.sendKeys("997618886");

        saveNewContactButton.click();

        browser.sleep(1000);
    };

});