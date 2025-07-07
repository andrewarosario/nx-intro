import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ui } from '@nx-intro/ui';

@Component({
  selector: 'lib-users',
  imports: [CommonModule, Ui],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {}
