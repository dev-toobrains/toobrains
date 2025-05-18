import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inspiration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent {
  quotes = [
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      position: "Co-founder of Apple"
    },
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      position: "Computer Scientist"
    },
    {
      text: "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.",
      author: "Charles Darwin",
      position: "Naturalist and Biologist"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      position: "Former First Lady of the United States"
    },
    {
      text: "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
      author: "Mark Zuckerberg",
      position: "CEO of Meta Platforms"
    },
    {
      text: "Intelligence is the ability to adapt to change.",
      author: "Stephen Hawking",
      position: "Theoretical Physicist"
    }
  ];
}