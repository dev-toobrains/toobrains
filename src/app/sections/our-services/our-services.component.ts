import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent {
  services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions designed to address your unique business challenges and opportunities.',
      features: [
        'Enterprise Applications',
        'Web Applications',
        'Mobile Apps',
        'Cloud Solutions',
        'API Development'
      ]
    },
    {
      title: 'UX/UI Design',
      description: 'User-centered design that creates intuitive, engaging experiences for your customers.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Design Systems',
        'Usability Testing'
      ]
    },
    {
      title: 'Technical Support',
      description: 'Comprehensive support services to keep your systems running smoothly and efficiently.',
      features: [
        'Maintenance & Updates',
        'Performance Optimization',
        'Security Audits',
        'System Migration',
        'Technical Documentation'
      ]
    }
  ];
}