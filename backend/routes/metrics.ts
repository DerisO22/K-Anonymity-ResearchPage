import express from "express";
import type { Request, Response } from "express";
import { getAllMetricData } from "../services/metrics_service.ts";

const router = express.Router();

router.get('/metrics', async(req: Request, res: Response) => {
    try {       
        const result = await getAllMetricData(req.pgClient);

        if(!result) {
            return res.status(404).json({ error: "Metrics not found" });
        }

        res.json(result);
    } catch (err: any) { 
        console.error("Rip");
        res.status(500).json({ error: err.message });
    }
})

export default router;