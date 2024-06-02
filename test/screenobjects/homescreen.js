class HomeScreen {

    appListItemSelector = `~App`;
    searchListItemSelector = `//android.widget.TextView[@content-desc="Search"]`;
    invokeListItemSelector = `new UiSelector().resourceId("android:id/text1")`;
    searchBoxSelector = `new UiSelector().resourceId("io.appium.android.apis:id/txt_query_prefill")`;

    async clickOnTheAppText() {
        await $(this.appListItemSelector).click();
    }
    async clickOnTheSearchText() {
        await $(this.searchListItemSelector).click();
    }
    async clickOnTheInvokeText() {
        const selector = `android=${this.invokeListItemSelector}`;
        await $(selector).click();
    }
    async enterSearchItem(text) {
        const selector = `android=${this.searchBoxSelector}`;
        await $(selector).setValue(text);
    }

}

module.exports = new HomeScreen();
