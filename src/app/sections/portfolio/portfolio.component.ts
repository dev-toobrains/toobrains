import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  activeFilter: string = 'all';
  
  filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'enterprise', label: 'Enterprise' }
  ];
  
  projects = [
    {
      title: 'FinTrack Dashboard',
      category: 'web',
      image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A comprehensive financial tracking dashboard for investment management.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'MediConnect App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/3808849/pexels-photo-3808849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Mobile application connecting patients with healthcare providers.',
      technologies: ['React Native', 'Firebase', 'Express.js']
    },
    {
      title: 'SmartCity Platform',
      category: 'enterprise',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Enterprise IoT platform for smart city infrastructure management.',
      technologies: ['Vue.js', 'Go', 'MongoDB', 'Kubernetes']
    },
    {
      title: 'EcoTrack System',
      category: 'web',
      image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Environmental monitoring web application for sustainability tracking.',
      technologies: ['React', 'Django', 'PostgreSQL']
    },
    {
      title: 'RetailPro Inventory',
      category: 'enterprise',
      image: 'https://images.pexels.com/photos/6169656/pexels-photo-6169656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Comprehensive inventory management system for retail businesses.',
      technologies: ['Angular', 'NestJS', 'MySQL', 'Redis']
    },
    {
      title: 'FitLife Companion',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Fitness tracking and wellness coaching mobile application.',
      technologies: ['Flutter', 'Firebase', 'Node.js']
    }
  ];
  
  get filteredProjects() {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }
  
  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}