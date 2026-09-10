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
            label: 'Create patient',
            icon: 'pi pi-user-plus',
            command: () => {
              this.router.navigate(['/patient/create']);
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
            label: 'Create patient',
            icon: 'pi pi-user-plus',
            command: () => {
              this.router.navigate(['/patient/create']);
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
        label: 'Eligliblity',
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
        label: 'Claim',
        icon: 'pi pi-envelope'
      },
      
      {
        label: 'Billing',
        icon: 'pi pi-envelope'
      },
      
      {
        label: 'Pre Assesment',
        icon: 'pi pi-envelope'
      },

      {
        label: 'Users',
        icon: 'pi pi-envelope'
      }
    ];
  }
}
