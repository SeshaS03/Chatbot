
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AgentService, Agent } from '../services/agent.service';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  agentsPanelOpen = false;
  agents: Agent[] = [];
  loading = false;
  error = '';

  constructor(private agentService: AgentService) {}

  ngOnInit(): void {
    this.fetchAgents();
  }

  toggleAgentsPanel() {
    this.agentsPanelOpen = !this.agentsPanelOpen;
    if (this.agentsPanelOpen && this.agents.length === 0) {
      this.fetchAgents();
    }
  }

  fetchAgents() {
    this.loading = true;
    this.error = '';
    this.agentService.getAgents().subscribe({
      next: (agents) => {
        this.agents = agents;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load agents.';
        this.loading = false;
      }
    });
  }
}