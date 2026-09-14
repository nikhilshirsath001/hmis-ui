import { MenuItem } from 'primeng/api';

export const MENU_ITEMS : MenuItem[] = [

  {
    label: 'Home',
    icon: 'pi pi-home',
    routerLink: '/'
  },

  {
    label: 'Insurance Plan',
    icon: 'pi pi-shield',
    items: [
      {
        label: 'Create Insurance Plan',
        icon: 'pi pi-plus-circle',
        routerLink: ['/insurance/form', 'insurance-plan']
      },
      {
        label: 'Blocks',
        icon: 'pi pi-th-large'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-sliders-h'
      },
      {
        label: 'Templates',
        icon: 'pi pi-file'
      }
    ]
  },

  {
    label: 'Patient',
    icon: 'pi pi-users',
    items: [
      {
        label: 'Create Patient',
        icon: 'pi pi-user-plus',
        routerLink: ['/patient', 'create-patient']
      },
      {
        label: 'Create Diagnosis',
        icon: 'pi pi-heart',
        routerLink: ['/patient', 'create-diagnosis']
      },
      {
        label: 'Create Procedure',
        icon: 'pi pi-list-check',
        routerLink: ['/patient', 'create-procedure']
      }
    ]
  },

  {
    label: 'Eligibility',
    icon: 'pi pi-check-circle',
    items: [
      {
        label: 'Check Eligibility',
        icon: 'pi pi-search'
      },
      {
        label: 'Components',
        icon: 'pi pi-bolt'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-th-large'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-sliders-h'
      }
    ]
  },

  {
    label: 'Pre Auth',
    icon: 'pi pi-file-check',
    items: [
      {
        label: 'Doctor',
        icon: 'pi pi-user'
      },
      {
        label: 'Diagnosis',
        icon: 'pi pi-heart'
      },
      {
        label: 'Procedure',
        icon: 'pi pi-list-check'
      },
      {
        label: 'Billing',
        icon: 'pi pi-wallet'
      }
    ]
  },

  {
    label: 'Claim',
    icon: 'pi pi-file-edit',
    items: [
      {
        label: 'Create Claim',
        icon: 'pi pi-plus-circle',
        routerLink: ['/claim', 'create-claim']
      }
    ]
  },

  {
    label: 'Billing',
    icon: 'pi pi-wallet',
    routerLink: ['/billing']
  },

  {
    label: 'Pre Assessment',
    icon: 'pi pi-clipboard',
    routerLink: ['/pre-assessment']
  },

  {
    label: 'Users',
    icon: 'pi pi-users',
    routerLink: ['/users']
  }

];