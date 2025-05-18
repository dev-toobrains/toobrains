import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cursor-follower',
  standalone: true,
  template: `<div #cursorFollower class="cursor-follower"></div>`,
  styles: []
})
export class CursorFollowerComponent implements AfterViewInit, OnDestroy {
  private cursorFollowerElement: HTMLElement | null = null;
  private mouseMoveListener: ((e: MouseEvent) => void) | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.cursorFollowerElement = document.querySelector('.cursor-follower');
      
      if (this.cursorFollowerElement) {
        this.mouseMoveListener = this.onMouseMove.bind(this);
        document.addEventListener('mousemove', this.mouseMoveListener);
        
        // Add event listeners for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .card, input, textarea');
        
        interactiveElements.forEach(element => {
          element.addEventListener('mouseenter', this.onInteractiveElementEnter.bind(this));
          element.addEventListener('mouseleave', this.onInteractiveElementLeave.bind(this));
        });
      }
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.mouseMoveListener) {
      document.removeEventListener('mousemove', this.mouseMoveListener);
    }
  }

  private onMouseMove(e: MouseEvent): void {
    if (this.cursorFollowerElement) {
      // Add a slight delay to the cursor follower for a smoother effect
      const x = e.clientX;
      const y = e.clientY;
      
      this.cursorFollowerElement.style.left = `${x}px`;
      this.cursorFollowerElement.style.top = `${y}px`;
    }
  }
  
  private onInteractiveElementEnter(): void {
    if (this.cursorFollowerElement) {
      this.cursorFollowerElement.style.width = '150px';
      this.cursorFollowerElement.style.height = '150px';
      this.cursorFollowerElement.style.background = 'radial-gradient(circle, rgba(0, 229, 204, 0.2), transparent 70%)';
    }
  }
  
  private onInteractiveElementLeave(): void {
    if (this.cursorFollowerElement) {
      this.cursorFollowerElement.style.width = '300px';
      this.cursorFollowerElement.style.height = '300px';
      this.cursorFollowerElement.style.background = 'radial-gradient(circle, rgba(0, 229, 204, 0.15), transparent 70%)';
    }
  }
}