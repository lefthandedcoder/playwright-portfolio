import { Page, Locator, expect } from '@playwright/test';

export class CheckboxesPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/checkboxes');
  }

  getCheckbox(index: number): Locator {
    return this.page.getByRole('checkbox').nth(index);
  }

  async setCheckboxState(index: number, checked: boolean) {
    const checkbox = this.getCheckbox(index);
    if (checked) {
      await checkbox.check();
    } else {
      await checkbox.uncheck();
    }
  }

  async expectCheckboxState(index: number, shouldBeChecked: boolean) {
    const checkbox = this.getCheckbox(index);
    if (shouldBeChecked) {
      await expect(checkbox).toBeChecked();
    } else {
      await expect(checkbox).not.toBeChecked();
    }
  }
}