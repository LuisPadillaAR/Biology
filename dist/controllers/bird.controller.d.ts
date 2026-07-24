import { type Request, type Response } from "express";
interface bird {
    id: string;
}
export declare const getBirds: (req: Request, res: Response) => void;
export declare const getBirdById: (req: Request<bird>, res: Response) => void;
export declare const createBird: (req: Request, res: Response) => void;
export declare const deleteBirdById: (req: Request<bird>, res: Response) => void;
export {};
//# sourceMappingURL=bird.controller.d.ts.map