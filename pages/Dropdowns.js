export class Dropdowns {
  constructor(page) {
    this.page = page;
    this.suffixDropdown = page.getByRole('button', { name: 'Your Suffix' });
    this.branchDropdown = page.getByRole('button', { name: 'Your Branch of Service' });
    this.rankDropdown = page.getByRole('button', { name: 'Your Rank' });
    this.travelCategoryDropdown = page.getByRole('button', { name: 'Your Travel Category' });
    this.relationshipDropdown = page.getByRole('button', { name: 'Select Relationship' });
  }