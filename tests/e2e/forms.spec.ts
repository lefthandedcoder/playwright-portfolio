import { test } from '../../fixtures';
import { CheckboxesPage } from '../../pages/CheckboxesPage';

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

test.describe('Checkboxes Component', () => {
  test.beforeEach(async ({ checkboxesPage }) => {
    await checkboxesPage.goto();
  });

  test('checks both checkboxes', async ({ checkboxesPage }) => {
    await checkboxesPage.setCheckboxState(0, true);
    await checkboxesPage.expectCheckboxState(0, true)
    await checkboxesPage.setCheckboxState(1, true);
    await checkboxesPage.expectCheckboxState(1, true)
  });

  test('validates checkbox defaults', async ({ checkboxesPage }) => {
    await checkboxesPage.setCheckboxState(0, false);
    await checkboxesPage.expectCheckboxState(1, true)
  });

  test('validates checkboxes return to defaults at page reload', async ({ checkboxesPage }) => {
    await checkboxesPage.setCheckboxState(0, true);
    await checkboxesPage.setCheckboxState(1, true);
    await checkboxesPage.page.reload();
    await checkboxesPage.setCheckboxState(0, false);
    await checkboxesPage.expectCheckboxState(1, true)
  });
});
