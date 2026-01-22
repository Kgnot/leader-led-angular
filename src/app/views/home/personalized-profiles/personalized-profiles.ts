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
  // Posiciones de entrada y salida
  enterFrom: { x: string; y: string };
  centerAt: { x: string; y: string };
  exitTo: { x: string; y: string };
  rotation: { enter: number; center: number; exit: number };
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
      description: 'Ideal para espacios de trabajo contemporáneos',
      enterFrom: { x: '100%', y: '50%' },    // Entra desde la derecha
      centerAt: { x: '75%', y: '30%' },      // Se posiciona arriba derecha
      exitTo: { x: '-30%', y: '20%' },       // Sale por la izquierda arriba
      rotation: { enter: 45, center: 0, exit: -25 }
    },
    {
      id: 2,
      name: 'Perfil Lineal Largo',
      dimensions: '100x50 mm',
      application: 'Centros comerciales',
      imageUrl: 'perfiles/lineal.png',
      description: 'Perfecto para iluminación de pasillos largos',
      enterFrom: { x: '-30%', y: '0%' },     // Entra desde arriba izquierda
      centerAt: { x: '25%', y: '50%' },      // Centro izquierda
      exitTo: { x: '100%', y: '80%' },       // Sale abajo derecha
      rotation: { enter: -30, center: 0, exit: 35 }
    },
    {
      id: 3,
      name: 'Perfil Industrial',
      dimensions: '150x75 mm',
      application: 'Bodegas',
      imageUrl: 'perfiles/industrial.png',
      description: 'Resistente para ambientes industriales exigentes',
      enterFrom: { x: '50%', y: '-30%' },    // Entra desde arriba centro
      centerAt: { x: '70%', y: '70%' },      // Abajo derecha
      exitTo: { x: '0%', y: '100%' },        // Sale por abajo izquierda
      rotation: { enter: 15, center: 0, exit: -40 }
    },
    {
      id: 4,
      name: 'Perfil Receptivo',
      dimensions: '80x40 mm',
      application: 'Áreas de recepción',
      imageUrl: 'perfiles/receptivo.png',
      description: 'Elegante para primeras impresiones',
      enterFrom: { x: '100%', y: '100%' },   // Entra desde abajo derecha
      centerAt: { x: '30%', y: '25%' },      // Arriba izquierda
      exitTo: { x: '-30%', y: '70%' },       // Sale centro izquierda
      rotation: { enter: 50, center: 0, exit: -30 }
    },
    {
      id: 5,
      name: 'Perfil Suspendido',
      dimensions: '120x60 mm',
      application: 'Espacios abiertos',
      imageUrl: 'perfiles/suspendido.png',
      description: 'Para iluminación colgante moderna',
      enterFrom: { x: '-30%', y: '100%' },   // Entra desde abajo izquierda
      centerAt: { x: '75%', y: '50%' },      // Centro derecha
      exitTo: { x: '100%', y: '0%' },        // Sale por arriba derecha
      rotation: { enter: -45, center: 0, exit: 40 }
    },
    {
      id: 6,
      name: 'Perfil Arquitectónico',
      dimensions: '200x100 mm',
      application: 'Diseños personalizados',
      imageUrl: 'perfiles/arquitectonico.png',
      description: 'Soluciones a medida para proyectos únicos',
      enterFrom: { x: '0%', y: '-30%' },     // Entra desde arriba izquierda
      centerAt: { x: '50%', y: '50%' },      // Centro (último perfil)
      exitTo: { x: '50%', y: '110%' },       // Sale por abajo centro
      rotation: { enter: -20, center: 0, exit: 15 }
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
      const profile = this.profiles[index];

      gsap.set(element, {
        opacity: index === 0 ? 0 : 0,
        scale: index === 0 ? 0.6 : 0.5,
        left: profile.enterFrom.x,
        top: profile.enterFrom.y,
        rotation: profile.rotation.enter,
        xPercent: -50, // Mantener centrado en su posición
        yPercent: -50
      });
    });

    // Create master timeline
    this.masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=400%', // Más espacio para animaciones complejas
        scrub: 1.5, // Más suave
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

            // Animar el cambio de información con efecto de desvanecimiento
            gsap.timeline()
              .to(infoElement, {
                opacity: 0,
                y: -15,
                duration: 0.2,
                ease: 'power2.in'
              })
              .set(infoElement, { y: 15 })
              .to(infoElement, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
                onStart: () => {
                  this.cdr.detectChanges();
                }
              });
          }
        }
      }
    });

    // Animar cada perfil con su trayectoria única
    profileElements.forEach((elementRef, index) => {
      const element = elementRef.nativeElement;
      const profile = this.profiles[index];
      const isFirst = index === 0;
      const isLast = index === profileElements.length - 1;

      // Fase 1: ENTRADA - desde enterFrom hacia centerAt
      this.masterTimeline.fromTo(element,
        {
          opacity: 0,
          scale: 0.5,
          left: profile.enterFrom.x,
          top: profile.enterFrom.y,
          rotation: profile.rotation.enter
        },
        {
          opacity: 1,
          scale: 1,
          left: profile.centerAt.x,
          top: profile.centerAt.y,
          rotation: profile.rotation.center,
          duration: 1,
          ease: 'power2.out'
        },
        index * 1.5 // Espaciado entre perfiles
      );

      // Fase 2: MANTENER visible en centerAt
      if (!isLast) {
        this.masterTimeline.to(element, {
          opacity: 1,
          duration: 0.5
        });

        // Fase 3: SALIDA - desde centerAt hacia exitTo
        this.masterTimeline.to(element, {
          opacity: 0,
          scale: 0.6,
          left: profile.exitTo.x,
          top: profile.exitTo.y,
          rotation: profile.rotation.exit,
          duration: 1,
          ease: 'power2.in'
        });
      } else {
        // El último perfil se mantiene visible más tiempo
        this.masterTimeline.to(element, {
          opacity: 1,
          duration: 1
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
        delay: 0.5,
        ease: 'power2.out'
      }
    );
  }
}