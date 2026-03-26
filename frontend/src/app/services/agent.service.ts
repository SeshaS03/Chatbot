import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Agent {
  id: number;
  name: string;
  description: string;
  icon: string | null;
  order: number;
}

@Injectable({ providedIn: 'root' })
export class AgentService {
  private dbEndpoint = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${this.dbEndpoint}/api/agent`);
  }
}
