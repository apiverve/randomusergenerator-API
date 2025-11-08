declare module '@apiverve/randomusergenerator' {
  export interface randomusergeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface randomusergeneratorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class randomusergeneratorWrapper {
    constructor(options: randomusergeneratorOptions);

    execute(callback: (error: any, data: randomusergeneratorResponse | null) => void): Promise<randomusergeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: randomusergeneratorResponse | null) => void): Promise<randomusergeneratorResponse>;
    execute(query?: Record<string, any>): Promise<randomusergeneratorResponse>;
  }
}
