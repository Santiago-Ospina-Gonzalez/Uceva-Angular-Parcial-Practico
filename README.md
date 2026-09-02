# Taller de modulos en Angular

Aplicacion Angular para practicar la organizacion por modulos 

## Requisitos

- Node.js y npm instalados.
- Git, si se necesita clonar el repositorio.
- Angular CLI es opcional, porque los comandos del proyecto usan `npx`.

Versiones principales: Angular 20.3.14, TypeScript 5.9.2, RxJS 7.8.0 y Jest 30.2.0.

## Instalacion y ejecucion

Desde la carpeta que contiene `package.json`:

```bash
npm install
npm start
```

Abrir `http://localhost:4200/`. La ruta raiz redirige a
`/arquitectura-de-software`.

Para generar una compilacion de produccion:

```bash
npm run build
```

## Funcionalidades y rutas

La barra de navegacion ofrece estos modulos:

| Modulo | Ruta |
| --- | --- |
| Arquitectura de software | `/arquitectura-de-software` |
| Principios de arquitectura | `/principios-de-arquitectura-de-software` |
| Sistema de diseno | `/sistema-de-diseno` |

Tambien se conservan los modulos de ejemplo `users` y `products` en sus rutas
lazy loading.

## Pruebas y documentacion

```bash
npm test
npm run test:watch
npm run test:coverage
npm run compodoc
```

`npm run compodoc` genera la documentacion HTML a partir de los comentarios
JSDoc y de `tsconfig.doc.json`.

## Estructura resumida

```text
src/app/
├── app-module.ts
├── app-routing-module.ts
├── core/
│   ├── config/
│   └── interfaces/
└── modules/
	├── shared/
	├── users/
	├── products/
	├── arquitectura-de-software/
	├── principios-de-arquitectura-de-software/
	└── sistema-de-diseno/
```

Los componentes no son standalone: pertenecen a un `NgModule`, siguiendo la
configuracion del taller.

## Generacion con Angular CLI

```bash
npx ng g module src/app/modules/nombre --routing
npx ng g component src/app/modules/nombre/pages/list-nombre --standalone=false
npx ng g component src/app/modules/nombre/components/table-nombre --standalone=false
npx ng g service src/app/modules/nombre/services/nombre
npx ng g interface src/app/modules/nombre/interfaces/nombre
```

## Documentacion tecnica

### Objetivo y arquitectura

El proyecto demuestra una aplicacion Angular organizada por modulos de
funcionalidad. Cada modulo mantiene sus paginas, componentes de presentacion,
interfaces y servicios, mientras `shared` concentra piezas reutilizables.

```text
src/app/
├── app-module.ts                 # Modulo raiz
├── app-routing-module.ts         # Rutas globales y lazy loading
├── core/
│   ├── config/                   # Datos y configuracion transversal
│   └── interfaces/               # Contratos transversales
└── modules/
	├── shared/                   # Navbar, iconos y badges reutilizables
	├── users/
	├── products/
	├── arquitectura-de-software/
	├── principios-de-arquitectura-de-software/
	└── sistema-de-diseno/
```

Los modulos de funcionalidad siguen esta forma:

```text
nombre/
├── nombre-module.ts
├── nombre-routing-module.ts
├── nombre.component.ts
├── components/
│   └── table-nombre/
├── pages/
│   └── list-nombre/
├── interfaces/
└── services/
```

### Enrutamiento

`AppRoutingModule` usa `loadChildren` para cargar los modulos bajo demanda.
La ruta vacia y las rutas desconocidas redirigen a
`arquitectura-de-software`. Cada modulo nuevo tiene una ruta hija vacia
(`path: ''`), por lo que el listado se muestra directamente en su URL
principal.

| Modulo | URL |
| --- | --- |
| Arquitectura de software | `/arquitectura-de-software` |
| Principios de arquitectura | `/principios-de-arquitectura-de-software` |
| Sistema de diseno | `/sistema-de-diseno` |

### Flujo de datos

1. `AppRoutingModule` carga el modulo funcional.
2. El routing del modulo muestra la pagina de listado.
3. La pagina inyecta el servicio correspondiente.
4. El servicio devuelve un `Observable` con datos de `core/config`.
5. La pagina entrega los datos a la tabla mediante `@Input`.
6. La tabla presenta la informacion y usa componentes de `SharedModule`.

Los datos actuales son locales y se definen en `products.config.ts` y
`users.config.ts`; no existe una API externa.

### Modulos y responsabilidades

`shared` exporta `NavbarComponent`, `IconComponent` y `BadgeComponent`. El
navbar consume `NAVBAR_ITEMS` desde `core/config/navbar.config.ts`, de modo que
los enlaces se mantienen en un unico lugar.

`users` y `products` son modulos de referencia con paginas de listado, tablas,
interfaces y servicios. Sus servicios estan registrados con
`providedIn: 'root'`.

`arquitectura-de-software`, `principios-de-arquitectura-de-software` y
`sistema-de-diseno` tienen la misma estructura base y estan preparados para
incorporar sus interfaces, datos y logica de dominio especificos.

### Tecnologias y decisiones

- Angular 20 con `NgModule`; no se usan componentes standalone.
- SCSS para estilos de componentes.
- RxJS para exponer datos mediante `Observable`.
- Jest y `jest-preset-angular` para pruebas unitarias.
- Compodoc para generar documentacion desde comentarios JSDoc.
- Lazy loading para reducir la carga inicial de la aplicacion.

### Validacion

Antes de integrar cambios se recomienda ejecutar:

```bash
npm run build
npm test
npm run test:coverage
npm run compodoc
```

### Extension de un modulo

Para agregar una nueva funcionalidad:

1. Crear el modulo con routing.
2. Crear su pagina, componentes, interfaz y servicio.
3. Importar `SharedModule` en el modulo funcional.
4. Declarar los componentes en el `NgModule`.
5. Registrar el modulo con `loadChildren` en `AppRoutingModule`.
6. Agregar el enlace en `NAVBAR_ITEMS`.
7. Crear o actualizar las pruebas unitarias.