import { test } from '../../fixtures';

test.describe('Dropdown Component', () => {
  test.beforeEach(async ({ dropdownPage }) => {
    await dropdownPage.goto();
  });

  test('selects Option 1 successfully', async ({ dropdownPage }) => {
    await dropdownPage.selectOption('Option 1');
    await dropdownPage.expectSelectedValue('1');
  });

  test('selects Option 2 successfully', async ({ dropdownPage }) => {
    await dropdownPage.selectOption('Option 2');
    await dropdownPage.expectSelectedValue('2');
  });
});