import { test, expect } from "@playwright/test";

test.describe('Locator filters', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/practice/simple-multiple-elements-no-ids.html');
    })

    test.describe('Finding elenet - different approaches', () => {
        test('Single button click using options', async ({ page }) => {
            // Arrange
            const elementRole = 'button';
            const resultsTestId = 'dti-results';
            const expectedMessage = 'You clicked the button!';
            const elementText = 'Click me!';

            const buttonLocator = page.getByRole(elementRole, { name: elementText });
            const resultsLocator = page.getByTestId(resultsTestId);
            // Act
            await buttonLocator.click();
            // Assert
            await expect(resultsLocator).toHaveText(expectedMessage);
        })

        test('Single button click using filter and hasText', async ({ page }) => {
            // Arrange
            const elementRole = 'button';
            const resultsTestId = 'dti-results';
            const expectedMessage = 'You clicked the button!';
            const elementText = 'Click me!';

            const buttonLocator = page.getByRole(elementRole).filter({ hasText: elementText });
            const resultsLocator = page.getByTestId(resultsTestId);

            // Act
            await buttonLocator.click();
            // Assert
            await expect(resultsLocator).toHaveText(expectedMessage);
        });
    });
    test.describe("Buttons in table - different approaches", () => {
        test('Single button click (chained getBy)', async ({ page }) => {
            // Arrange
            const elementRole = 'button';
            const resultsTestId = 'dti-results';
            const parentText = 'Row 2';
            const parentRole = 'row';
            const expectedMessage = 'You clicked the button! (row 2)';

            const resultsLocator = page.getByTestId(resultsTestId);
            const buttonLocator = page.getByRole(parentRole, { name: parentText }).getByRole(elementRole);
            // Act
            await buttonLocator.click();
            // Assert
            await expect(resultsLocator).toHaveText(expectedMessage);
        });
    });
    test.describe("Buttons in table - different approaches", () => {
        test('Single button click (using filter)', async ({ page }) => {
            // Arrange
            const elementRole = 'button';
            const resultsTestId = 'dti-results';
            const parentText = 'Row 2';
            const parentRole = 'row';
            const expectedMessage = 'You clicked the button! (row 2)';

            const resultsLocator = page.getByTestId(resultsTestId);
            const buttonLocator = page.getByRole(parentRole).filter({ has: page.getByText("Row 2") }).getByRole(elementRole);
            // Act
            await buttonLocator.click();
            // Assert
            await expect(resultsLocator).toHaveText(expectedMessage);
        });
    });

})