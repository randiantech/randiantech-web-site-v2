/*eslint-disable no-useless-escape*/

export const MOBILE_WIDTH = 1200;

export const DESKTOP_ITEMS = [
  'ABOUT',
  'SERVICES',
  'TEAM',
  'CAREERS',
  'CLIENTS',
  'CONTACT',
];

export const CONTACT_US_ITEMS = [
  {
    label: 'First Name',
    id: 'firstName',
    initialValue: '',
    isRequired: true,
    isValid: (value: string) => value.length > 1,
  },
  {
    label: 'Last Name',
    id: 'lastName',
    initialValue: '',
    isRequired: true,
    isValid: (value: any) => value.length > 1,
  },
  {
    label: 'Email',
    id: 'email',
    initialValue: '',
    isRequired: true,
    isValid: (value: any) => {
      const isValidEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      return isValidEmail.test(value);
    }
  },
  {
    label: 'Phone',
    id: 'phone',
    isRequired: false,
    initialValue: '',
    isValid: (value: any) => {
      if(!value) return false;
      const isValidPhone = new RegExp(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      );
      return isValidPhone.test(value);
    }
  },
  {
    label: 'Comments',
    id: 'comments',
    isRequired: true,
    initialValue: '',
    style: 'free-text'
  },
];
