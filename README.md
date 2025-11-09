# LeaderLedAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Futura mejora: 

Se podría inplementar algo similar a esto: 
```textmate
{
  "idInventory": 16,
  "marketName": "HIGH BAY",
  "reference": "BY698X LED300 CW",
  "power": 230,
  "lumens": 29000,
  // NUEVOS CAMPOS SUGERIDOS:
  "voltage": "100-277V",
  "colorTemperature": 6500,
  "cri": 80,
  "ipRating": "IP65",
  "powerFactor": 0.95,
  "efficacy": 126, // lúmenes por watt
  "beamAngle": 120,
  "dimension": "300x300x150mm",
  "weight": 4.2,
  "lifespan": 50000,
  "warranty": 5,
  "certifications": ["UL", "DLC", "CE"],
  "desc": "Luminaria high bay de 230w DALI, 6500K",
  "images": [
    "/inventory/high-bay-industrial.jpg",
    "/inventory/high-bay-installation.jpg",
    "/inventory/high-bay-dimensions.png"
  ],
  "technologies": [
    {
      "name": "LED",
      "idTechnology": 1
    },
    {
      "name": "DALI",
      "idTechnology": 5
    }
  ],
  "applications": [
    {
      "type": "Industrial",
      "idApplication": 7
    }
  ],
  "categories": [
    {
      "name": "Plafón",
      "idCategory": 7
    }
  ],
  // NUEVAS SECCIONES:
  "brand": {
    "idBrand": 1,
    "name": "Tecnolite"
  },
  "stock": {
    "quantity": 45,
    "minStock": 10,
    "location": "Bodega A - Estante 12"
  },
  "pricing": {
    "cost": 85.50,
    "price": 120.00,
    "currency": "USD"
  },
  "compatibility": {
    "mounting": ["Suspensión", "Empotrado"],
    "environments": ["Interior", "Exterior"]
  },
  "features": [
    "Protección contra sobretensiones",
    "Temperatura de operación -40°C a 50°C",
    "Driver integrado",
    "Aluminio inyectado"
  ],
  "documents": [
    {
      "type": "fichaTecnica",
      "url": "/docs/ficha-tecnica-highbay.pdf"
    },
    {
      "type": "manualInstalacion",
      "url": "/docs/manual-highbay.pdf"
    }
  ]
}
```

Esto sería para cuando haya base de datos y algo muchisimo más profesional.
