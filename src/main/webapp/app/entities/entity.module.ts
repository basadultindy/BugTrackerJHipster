import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'ticket',
        loadChildren: () => import('./ticket/ticket.module').then(m => m.BugTrackerJHipsterTicketModule)
      },
      {
        path: 'label',
        loadChildren: () => import('./label/label.module').then(m => m.BugTrackerJHipsterLabelModule)
      },
      {
        path: 'project',
        loadChildren: () => import('./project/project.module').then(m => m.BugTrackerJHipsterProjectModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class BugTrackerJHipsterEntityModule {}
