import { NavbarItem } from "../../modules/shared/interfaces/navbar.interface";

/**
 * Configuración de los ítems del menú de navegación principal.
 *
 * Esta constante define las opciones visibles en el Navbar de la aplicación,
 * permitiendo centralizar la gestión de rutas y etiquetas del menú.
 *
 * Cada elemento representa un acceso directo a un módulo funcional del sistema.
 *
 * @type {NavbarItem[]}
 *
 * @example
 * <app-navbar></app-navbar>
 */
export const NAVBAR_ITEMS: NavbarItem[] = [
    { label: 'Arquitectura', url: '/arquitectura' },
    { label: 'Principios Arquitectura', url: '/principios' },
    { label: 'Sistema de diseño', url: '/diseno' },
    { label: 'arquitectura de software', url: '/arquitectura-software' },
    { label: 'principios de diseño', url: '/principios-diseno' },
    { label: 'sistema de diseño', url: '/sistema-diseno'}
] 