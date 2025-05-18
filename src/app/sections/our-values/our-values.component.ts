import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.css']
})
export class OurValuesComponent {
  values = [
    {
      title: 'Innovation',
      description: 'We push boundaries and explore new technologies to create solutions that anticipate future needs.',
      icon: 'lightbulb'
    },
    {
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we do, from code quality to user experience.',
      icon: 'trophy'
    },
    {
      title: 'Collaboration',
      description: 'We believe great ideas emerge when diverse perspectives come together in an environment of trust.',
      icon: 'people'
    },
    {
      title: 'Integrity',
      description: 'We act with honesty and transparency, building relationships founded on trust and mutual respect.',
      icon: 'shield'
    },
    {
      title: 'User-Centered',
      description: 'We design with empathy, placing user needs at the heart of every decision we make.',
      icon: 'user'
    },
    {
      title: 'Continuous Growth',
      description: 'We embrace learning and evolution, constantly improving our skills and processes.',
      icon: 'chart'
    }
  ];
}