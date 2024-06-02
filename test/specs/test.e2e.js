const { expect } = require('@wdio/globals')
const HomeScreen = require('../screenobjects/homescreen')
describe('Filling the Input', () => {
    it('Verify that user can type somthing in the search box', async () => {
        
        await expect($(HomeScreen.appListItemSelector)).toBeExisting()
        await HomeScreen.clickOnTheAppText()
        await HomeScreen.clickOnTheSearchText()
        await HomeScreen.clickOnTheInvokeText()
        await HomeScreen.enterSearchItem("Hello World")
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})

