import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-development-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './development-process.component.html',
  styleUrls: ['./development-process.component.css']
})
export class DevelopmentProcessComponent {
  processSteps = [
    {
      step: 1,
      title: 'Discovery',
      description: 'We thoroughly analyze your requirements, conduct market research, and define project objectives and scope.',
      tasks: [
        'Requirement gathering',
        'Market analysis',
        'Project scoping',
        'User research',
        'Competitive analysis'
      ]
    },
    {
      step: 2,
      title: 'Planning',
      description: 'We create detailed project plans, architecture designs, and set up development environments and workflows.',
      tasks: [
        'Architecture design',
        'Data modeling',
        'Sprint planning',
        'Task prioritization',
        'Resource allocation'
      ]
    },
    {
      step: 3,
      title: 'Development',
      description: 'Our developers write clean, efficient code following best practices and industry standards.',
      tasks: [
        'Frontend development',
        'Backend implementation',
        'API integration',
        'Database setup',
        'Code reviews'
      ]
    },
    {
      step: 4,
      title: 'Testing',
      description: 'We rigorously test all aspects of the application to ensure it meets quality standards and requirements.',
      tasks: [
        'Unit testing',
        'Integration testing',
        'User acceptance testing',
        'Performance testing',
        'Security audits'
      ]
    },
    {
      step: 5,
      title: 'Deployment',
      description: 'We securely deploy your application to production environments with minimal downtime and disruption.',
      tasks: [
        'Environment setup',
        'CI/CD pipeline',
        'Production deployment',
        'Data migration',
        'Monitoring setup'
      ]
    },
    {
      step: 6,
      title: 'Maintenance',
      description: 'We provide ongoing support and enhancements to keep your application running smoothly.',
      tasks: [
        'Bug fixes',
        'Feature enhancements',
        'Performance optimization',
        'Security updates',
        'Scaling solutions'
      ]
    }
  ];
}