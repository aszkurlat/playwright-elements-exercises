import { test, expect } from '@playwright/test';

test.describe('Finding checkbox - different methods to locate checkbox element', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/practice/simple-multiple-elements-no-ids.html')
    });
    test('Should find all buttons on the page', async ({ page }) => {
        // Arrange
        const elementRole = "button";
        const buttonLocator = page.getByRole(elementRole);
        const expectedElementsCount = 7;

        console.log(await buttonLocator.count());

        // Assert
        await expect(buttonLocator).toHaveCount(expectedElementsCount);
    })
    test('Action on nth button', async ({ page }) => {
        // Arrange
        const elementRole = "button";
        const resultsTestId = "dti-results";
        const expectedMessage = "You clicked the button! (Second one!)";

        const buttonLocator = page.getByRole(elementRole);
        const resultsLocator = page.getByTestId(resultsTestId);

        // Act
        await buttonLocator.nth(2).click();

        // Assert
        await expect(resultsLocator).toHaveText(expectedMessage);
    })


    test('Action on multiple buttons', async ({ page }) => {

        // Arrange
        const elementRole = "button";
        const resultsTestId = "dti-results";
        const elementText = "Click!";

        const buttonLocator = page.getByRole(elementRole, { name: elementText });
        const resultsLocator = page.getByTestId(resultsTestId);

        // Act 
        // await buttonLocator.nth(0).click();
        // console.log(await resultsLocator.textContent());

        // await buttonLocator.nth(1).click();
        // console.log(await resultsLocator.textContent());

        // await buttonLocator.nth(2).click();
        // console.log(await resultsLocator.textContent());

        //  first loop example

        // const numberOfElements = await buttonLocator.count();
        // for (let index = 0; index < numberOfElements; index++) {
        //     await buttonLocator.nth(index).click();
        //     console.log(await resultsLocator.textContent());
        // }


        // second loop example
        const allButtonLocators = await buttonLocator.all();

        // Act 
        for (const button of allButtonLocators) {
            await button.click();
            console.log(await resultsLocator.textContent())
        }
    })
});