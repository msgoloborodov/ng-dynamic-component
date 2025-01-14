import { Inject, Injectable, InjectionToken, Type } from '@angular/core';

/**
 * Reflect API subsystem required for lib to work
 */
export interface ReflectApi {
  getMetadata(type: string, obj: unknown): unknown[];
}

export const ReflectRef = new InjectionToken<ReflectApi>('ReflectRef', {
  providedIn: 'root',
  factory: () => window.Reflect as any,
});

@Injectable({ providedIn: 'root' })
export class ReflectService {
  constructor(@Inject(ReflectRef) private reflect: ReflectApi) {}

  getCtorParamTypes(ctor: Type<unknown>): unknown[] {
    return this.reflect.getMetadata('design:paramtypes', ctor);
  }
}
