module.exports = {
    'First test'(browser) {
        browser
            .url('https://kodify.io/')
            .waitForElementVisible('body')
            .assert.titleContains('Kodify')
            
    }
}