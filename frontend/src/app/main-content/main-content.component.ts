import { Component } from '@angular/core';
import { ChatInputComponent } from '../chat-input/chat-input.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ChatInputComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {}