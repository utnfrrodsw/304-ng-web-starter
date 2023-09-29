import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.servce';

@Component({
  selector: 'app-mrx',
  templateUrl: './mrx.component.html',
  styleUrls: ['./mrx.component.css']
})
export class MrxComponent implements OnInit {

  user: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  searchUser() {
    this.apiService.getRandomUser().subscribe({
      next: (response: any) => {
        this.user = response.results[0];
      }
    })
  }

  getUserName(): string {
    return `${this.user?.name.title} ${this.user?.name.first} ${this.user?.name.last}`;
  }
}
