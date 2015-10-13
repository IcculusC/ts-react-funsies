// Type definitions for flux/utils

/// <reference path='./flux.d.ts' />

declare module FluxUtils {
  import flux = Flux;
  
  export class Store {
    
    constructor(dispatcher: flux.Dispatcher<any>);
    
    addListener(callback: (eventType?: string) => void): any;
    
    getDispatcher(): flux.Dispatcher<any>;
    
    getDispatchToken(): string;
    
    hasChanged(): boolean;
    
    __emitChange(): void;
    
    __onDispatch(payload: any): void;
  }
}

declare module "flux/utils" {
  export = FluxUtils;
}