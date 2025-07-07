import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ui } from '@nx-intro/ui';

@Component({
  selector: 'lib-metrics',
  imports: [CommonModule, Ui],
  templateUrl: './metrics.html',
  styleUrl: './metrics.css',
})
export class Metrics {}
