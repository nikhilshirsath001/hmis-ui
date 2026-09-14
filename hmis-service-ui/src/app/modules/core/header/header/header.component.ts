import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  imports: [Menubar],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   items: MenuItem[] | undefined;

     constructor(private router: Router) {}
ngOnInit() {
  this.items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        this.router.navigate(['/']);
      }
    },

    {
      label: 'Insurance Plan',
      icon: 'pi pi-user',
      items: [
        {
          label: 'Create Insurance Plan',
          icon: 'pi pi-user-plus',
          routeParam: 'insurance-plan',
          command: () => {
            this.router.navigate(['/insurance/form', 'insurance-plan']);
          }
        },

        {
          label: 'Blocks',
          icon: 'pi pi-server'
        },

        {
          label: 'UI Kit',
          icon: 'pi pi-pencil'
        },

        {
          label: 'Templates',
          icon: 'pi pi-palette',
          items: [
            {
              label: 'Apollo',
              icon: 'pi pi-palette'
            },
            {
              label: 'Ultima',
              icon: 'pi pi-palette'
            }
          ]
        }
      ]
    },

    {
      label: 'Patient',
      icon: 'pi pi-user',
      items: [
        {
          label: 'Create Patient',
          icon: 'pi pi-user-plus',
          routeParam: 'create-patient',
          command: () => {
            this.router.navigate(['/patient/', 'create-patient']);
          }
        },

        {
          label: 'Create Diagnosis',
          icon: 'pi pi-user-plus',
          routeParam: 'create-diagnosis',
          command: () => {
            this.router.navigate(['/patient/', 'create-diagnosis']);
          }
        },

        {
          label: 'Create Procedure',
          icon: 'pi pi-user-plus',
          routeParam: 'create-procedure',
          command: () => {
            this.router.navigate(['/patient/', 'create-procedure']);
          }
        }
      ]
    },

    {
      label: 'Eligibility',
      icon: 'pi pi-search',
      items: [
        {
          label: 'Components',
          icon: 'pi pi-bolt'
        },
        {
          label: 'Blocks',
          icon: 'pi pi-server'
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-pencil'
        }
      ]
    },
    {
      label: 'Pre Auth',
      icon: 'pi pi-envelope',
      items: [
        {
          label: 'Doctor',
          icon: 'pi pi-bolt'
        },
        {
          label: 'Diagnosis',
          icon: 'pi pi-server'
        },
        {
          label: 'Procedure',
          icon: 'pi pi-pencil'
        }
        ,
        {
          label: 'Billing',
          icon: 'pi pi-pencil'
        }
      ]
    },

    {
      label: 'Claim',
      icon: 'pi pi-envelope',
       items: [
        {
          label: 'Create Patient',
          icon: 'pi pi-user-plus',
          routeParam: 'create-create-doctor',
          command: () => {
            this.router.navigate(['/claim/', 'create-doctor']);
          }
        }
      ]
    },

    {
      label: 'Billing',
      icon: 'pi pi-envelope'
    },

    {
      label: 'Pre Assessment',
      icon: 'pi pi-envelope'
    },

    {
      label: 'Users',
      icon: 'pi pi-envelope'
    }
  ];
}
}
