import { test, expect } from "@playwright/test"

test.describe('Check all checkboxes with loop', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/practice/simple-multiple-elements-no-ids.html')
    })

    test('All checkboxes in loop', async ({ page }) => {
        // Arrange
        const elementRole = "checkbox";
        const resultsTestId = "dti-results";
        const checkboxLocator = page.getByRole(elementRole);
        const resultsLocator = page.getByTestId(resultsTestId);

        const allChecboxElements = await checkboxLocator.all();
        let n = 0;
        // Act
        for (const checbox of allChecboxElements) {
            n++;
            await checbox.check();
            console.log(await resultsLocator.textContent());
            await expect(resultsLocator).toHaveText(`Checkbox is checked! (Opt ${n}!)`);

        }

        // for (let i = 0; i < allChecboxElements.length; i++) {
        //     const checbox = allChecboxElements[i];
        //     await checbox.check();
        //     console.log(await resultsLocator.textContent());
        //     await expect(resultsLocator).toHaveText(`Checkbox is checked! (Opt ${i + 1}!)`);
        // }
    })
})