interface bird {
    id: number;
    name: string;
    family: string;
}
export declare const findAllBirds: () => bird[];
export declare const findBirdById: (id: number) => bird | null;
export declare const addBird: (name: string, family: string) => void;
export declare const deleteBird: (id: number) => bird | null | undefined;
export {};
//# sourceMappingURL=bird.service.d.ts.map