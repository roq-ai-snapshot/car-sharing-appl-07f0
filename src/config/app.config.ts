interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage personal user information', 'Book a car', 'Create a review', 'Report a car'],
  ownerAbilities: ['Manage user information', 'Manage company information', 'Manage car details', 'Manage bookings'],
  getQuoteUrl: 'https://app.roq.ai/proposal/a15d6f97-4975-4488-9127-acfb9625e0d7',
};
