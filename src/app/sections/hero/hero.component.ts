import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private typed: Typed | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initTyped();
    }
  }

  ngOnDestroy(): void {
    if (this.typed) {
      this.typed.destroy();
    }
  }

  private initTyped(): void {
    const options = {
      strings: [
        `<span class="keyword">function</span> <span class="function">innovation</span>() {
  <span class="keyword">const</span> <span class="variable">vision</span> = <span class="string">"Transforming ideas into reality"</span>;
  <span class="keyword">let</span> <span class="variable">technology</span> = <span class="string">"Cutting-edge"</span>;
  
  <span class="comment">// At Toobrains, we combine innovation with excellence</span>
  <span class="keyword">return</span> {
    <span class="property">solutions</span>: <span class="string">"Scalable & Efficient"</span>,
    <span class="property">approach</span>: <span class="string">"User-Centered"</span>,
    <span class="property">results</span>: <span class="string">"Exceeding Expectations"</span>
  };
}

<span class="keyword">const</span> <span class="variable">toobrains</span> = <span class="function">innovation</span>();
<span class="comment">// Let's build something amazing together</span>`
      ],
      typeSpeed: 30,
      backSpeed: 0,
      startDelay: 300,
      loop: false,
      showCursor: true,
      cursorChar: '<span class="cursor"></span>',
      contentType: 'html',
    };

    const element = document.querySelector('.code-editor-body .code-content');
    if (element) {
      this.typed = new Typed(element as Element, options);
    }
  }
}