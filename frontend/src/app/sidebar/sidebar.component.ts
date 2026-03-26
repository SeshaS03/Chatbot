import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();
    searchTerm = '';
    threads = [
      { icon: '💬', text: 'Q4 Logistics Analysis' },
      { icon: '💬', text: 'Supply Chain Optimization' },
      { icon: '💬', text: 'Inventory Review' }
    ];
    folders = [
      { icon: '📁', name: 'Roboship', count: 12 },
      { icon: '📁', name: 'Ciena', count: 8 },
      { icon: '📁', name: 'HR Policies', count: 4 }
    ];

    get filteredThreads() {
      if (!this.searchTerm) return this.threads;
      return this.threads.filter(t => t.text.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }

    onSearch(event: Event) {
      const value = (event.target as HTMLInputElement).value;
      this.searchTerm = value;
    }
}