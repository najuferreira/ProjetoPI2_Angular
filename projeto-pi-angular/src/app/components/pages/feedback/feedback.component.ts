import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../admin/header-admin/header-admin.component";
import { MainFeedbackComponent } from "./main-feedback/main-feedback.component";

@Component({
  selector: 'app-feedback',
  imports: [HeaderAdminComponent, MainFeedbackComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

}
