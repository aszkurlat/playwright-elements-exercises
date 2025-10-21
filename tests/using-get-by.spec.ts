import { test, expect } from '@playwright/test';

test.describe('Finding different elements with getBy methods', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/practice/simple-elements.html');
    });

    test('Find button element by getByRole method', async ({ page }) => {
        // Arrange
        const elementLocator = page.getByRole('button', { name: 'Click me' });

        // Act & Assert
        await expect(elementLocator).toBeVisible();
    });

    // wyszukanie za pomocą tekstu page.getByText()
    test('Find button element by getByText and getByTestId methods', async ({ page }) => {
        // Arrange
        const resultId = 'dti-results';
        const expectedMessage = "You clicked the button!";
        const elementLocator = page.getByText("Click me");
        const resultElementLocator = page.getByTestId(resultId);

        // Act
        await elementLocator.click();

        // Assert
        await expect(elementLocator).toBeVisible();
        await expect(resultElementLocator).toHaveText(expectedMessage);
    });
});
