import {injectable, /* inject, */ BindingScope, Provider} from '@loopback/core';

/*
 * Fix the service type. Possible options can be:
 * - import {Notificacion} from 'your-module';
 * - export type Notificacion = string;
 * - export interface Notificacion {}
 */
export type Notificacion = unknown;

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionProvider implements Provider<Notificacion> {
  constructor(/* Add @inject to inject parameters */) {}

  value() {
    // Add your implementation here
    throw new Error('To be implemented');
  }
}
