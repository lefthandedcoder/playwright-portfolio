import { test, expect, VALID_USER, INVALID_USERS} from '../../fixtures';

test.describe(`Authentication`, () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
    });

    test(`successful login`, async ({ loginPage }) => {
        await loginPage.login(VALID_USER.username, VALID_USER.password);
    });

    for (const { username, password, desc } of INVALID_USERS) {
        test(`rejects login with ${desc}`, async( { loginPage }) => {
            await loginPage.login(username, password);
            await loginPage.expectLoginError();
        });
    }

    test('full login → verify → logout flow', async ({ loginPage, securePage }) => {
        await loginPage.login(VALID_USER.username, VALID_USER.password);
        await loginPage.expectSuccessfulLogin();
        await securePage.expectLoaded();
        await securePage.logout();
        await securePage.expectLoggedOut();
    });
});