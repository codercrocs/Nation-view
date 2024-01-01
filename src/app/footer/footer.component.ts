import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  onGoto() {
    let link = document.createElement('a');
    link.href = 'www.linkedin.com/in/rajkumar-subramanian-codeenthusiast';
    link.click();
  }

  onGithub() {
    let link = document.createElement('a');
    link.href = 'https://github.com/codercrocs';
    link.click();
  }
}
