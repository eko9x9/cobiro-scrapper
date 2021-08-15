import { Request, Response } from "express";
import services from "../../services/index";

export class WeddingController {

    /**
     * GetScarppedFile
     */
    public async GetScarppedFile(req: Request, res: Response) {
        res.send(await services.WeddingServices.ScrappingHtml());
    }
}