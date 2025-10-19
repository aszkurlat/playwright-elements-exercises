import { test, expect } from "@playwright/test"

test.describe('Finding checkbox - different methods to locate checkbox element', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/practice/simple-elements.html')
    })
    // using role
    test.only('Find checkbox element by getByRole method', async ({ page }) => {
        // Arrange:
        const checkboxElement = page.getByRole('checkbox');

        // Act
        await expect.soft(checkboxElement).toBeVisible();
    })
    // using id
    test.only('Find checkbox element by id method', async ({ page }) => {
        // Arrange
        const checkboxElement = page.locator('#id-checkbox');
        // Act
        await expect.soft(checkboxElement).toBeVisible();
    })
    // using class
    test.only('Find checkbox element by class name method', async ({ page }) => {
        // Arrange
        const checkboxElement = page.locator(".my-checkbox");

        //Act
        await expect.soft(checkboxElement).toBeVisible();
    })
    // using data-testid
    test.only('Find checkbox element by data-testid method', async ({ page }) => {
        // Arrange
        const checkboxElement = page.getByTestId("dti-checkbox");

        // Act
        await expect.soft(checkboxElement).toBeVisible();
    })

    // using attribute named "ckbx"

    //test.use({ testIdAttribute: 'ckbx' });
    test.only('Find checkbox element by ckbx method', async ({ page }) => {
        // Arrange
        const checkboxElement = page.locator("[ckbx='val1']");
        // const checkboxElement = page.locator("val1");

        // Act
        await expect.soft(checkboxElement).toBeVisible();
    })
})

// using custom testIdAttribute ('ckbx')

test.describe("Test with my own attribute", () => {
    test.use({ testIdAttribute: 'ckbx' });
    test.only('Find checkbox element by ckbx method', async ({ page }) => {
        // Arrange
        //  const checkboxElement = page.locator("[ckbx='val1']");
        await page.goto('/practice/simple-elements.html')
        const checkboxElement = page.getByTestId("val1");

        // Act
        await expect(checkboxElement).toBeVisible();
    })
})