import { test, expect } from "@playwright/test";

test.describe("Reservation", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/practice/simple-reservation-v1.html');
    })

    test("Simple reservation with one feature", async ({ page }) => {
        // Arrange 
        const expectedMessage = "Reservation for 23.10.2024 with features: Food for total price: 150$";
        const resultsTestId = "dti-results-container";
        const featureName = "Food";
        const reservationDate = '23.10.2024';
        const resultsLocator = page.getByTestId(resultsTestId);
        const checkoutButtonText = 'Checkout';
        const rowRole = 'row';
        const buttonRole = 'button';
        const checkboxRole = 'checkbox';

        const reservationLocator = page.getByTestId(resultsTestId);
        const checkboxLocator = page.getByRole(rowRole, { name: featureName }).getByRole(checkboxRole);
        const reverseButtonLocator = page.getByRole(rowRole, { name: reservationDate }).getByRole(buttonRole);
        // const checkoutButtonLocator = page.getByRole('button', { name: 'Checkout' });
        const checkoutButtonLocator = page.getByRole(buttonRole).filter({ hasText: checkoutButtonText });

        // Act
        await checkboxLocator.check();
        await reverseButtonLocator.click();
        await checkoutButtonLocator.click();

        // Assert
        await expect(resultsLocator).toHaveText(expectedMessage);
    })
});