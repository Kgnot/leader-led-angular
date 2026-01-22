import { Component, ElementRef, ViewChild, ViewChildren, QueryList, OnInit, OnDestroy, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ProfileShowcase {
  id: number;
  name: string;
  dimensions: string;
  application: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-personalized-profiles',
  imports: [CommonModule],
  templateUrl: './personalized-profiles.html',
  styleUrl: './personalized-profiles.scss'
})
export class PersonalizedProfiles implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('showcaseSection', { static: true }) showcaseSection!: ElementRef;
  @ViewChild('showcaseContainer', { static: true }) showcaseContainer!: ElementRef;
  @ViewChildren('profileItem') profileItems!: QueryList<ElementRef>;

  private masterTimeline!: gsap.core.Timeline;
  private isBrowser: boolean;
  private currentProfileIndex = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  profiles: ProfileShowcase[] = [
    {
      id: 1,
      name: 'Perfil 65x65',
      dimensions: '65x65 mm',
      application: 'Oficinas modernas',
      imageUrl: 'perfiles/65x65.png',
      description: 'Ideal para espacios de trabajo contemporáneos'
    },
    {
      id: 2,
      name: 'Perfil Lineal Largo',
      dimensions: '100x50 mm',
      application: 'Centros comerciales',
      imageUrl: 'perfiles/lineal.png',
      description: 'Perfecto para iluminación de pasillos largos'
    },
    {
      id: 3,
      name: 'Perfil Industrial',
      dimensions: '150x75 mm',
      application: 'Bodegas',
      imageUrl: 'perfiles/industrial.png',
      description: 'Resistente para ambientes industriales exigentes'
    },
    {
      id: 4,
      name: 'Perfil Receptivo',
      dimensions: '80x40 mm',
      application: 'Áreas de recepción',
      imageUrl: 'perfiles/receptivo.png',
      description: 'Elegante para primeras impresiones'
    },
    {
      id: 5,
      name: 'Perfil Suspendido',
      dimensions: '120x60 mm',
      application: 'Espacios abiertos ',
      imageUrl: 'perfiles/suspendido.png',
      description: 'Para iluminación colgante moderna'
    },
    {
      id: 6,
      name: 'Perfil Arquitectónico',
      dimensions: '200x100 mm',
      application: 'Diseños personalizados',
      imageUrl: 'perfiles/arquitectonico.png',
      description: 'Soluciones a medida para proyectos únicos'
    }
  ];

  currentProfile: ProfileShowcase = this.profiles[0];

  ngOnInit(): void {
    // Initialization will happen in ngAfterViewInit
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      setTimeout(() => {
        this.initGSAPAnimations();
      }, 100);
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      if (this.masterTimeline) {
        this.masterTimeline.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }

  private initGSAPAnimations(): void {
    if (!this.isBrowser) return;

    const section = this.showcaseSection.nativeElement;
    const profileElements = this.profileItems.toArray();
    const infoElement = section.querySelector('.profile-info');

    if (!profileElements.length || !infoElement) {
      console.warn('GSAP elements not ready');
      return;
    }

    // Set initial states for all profiles
    profileElements.forEach((elementRef, index) => {
      const element = elementRef.nativeElement;
      gsap.set(element, {
        opacity: index === 0 ? 1 : 0,
        scale: index === 0 ? 1 : 0.7,
        x: index === 0 ? 0 : 100,
        rotation: index === 0 ? 0 : 20
      });
    });

    // Create master timeline
    this.masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=300%', // Más espacio para scroll suave
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Actualizar el perfil actual basado en el progreso
          const newIndex = Math.min(
            Math.floor(self.progress * this.profiles.length),
            this.profiles.length - 1
          );

          if (newIndex !== this.currentProfileIndex) {
            this.currentProfileIndex = newIndex;
            this.currentProfile = this.profiles[this.currentProfileIndex];

            // Animar el cambio de información
            gsap.fromTo(infoElement,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.3 }
            );

            // Forzar detección de cambios
            this.cdr.detectChanges();
          }
        }
      }
    });

    // Animar cada perfil secuencialmente
    profileElements.forEach((elementRef, index) => {
      const element = elementRef.nativeElement;
      const isFirst = index === 0;
      const isLast = index === profileElements.length - 1;

      if (!isFirst) {
        // Entrada del nuevo perfil
        this.masterTimeline.fromTo(element,
          {
            opacity: 0,
            scale: 0.7,
            x: 100,
            rotation: 20
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            rotation: 0,
            duration: 0.5,
            ease: 'power2.out'
          },
          index * 0.5 // Espaciado entre animaciones
        );
      }

      // Mantener visible un momento
      if (!isLast) {
        this.masterTimeline.to(element, {
          opacity: 1,
          duration: 0.3
        });

        // Salida del perfil actual
        this.masterTimeline.to(element, {
          opacity: 0,
          scale: 0.7,
          x: -100,
          rotation: -20,
          duration: 0.5,
          ease: 'power2.in'
        });
      }
    });

    // Animación inicial de la información
    gsap.fromTo(infoElement,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out'
      }
    );
  }
}