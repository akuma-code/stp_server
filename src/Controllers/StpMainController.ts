import { NextFunction, Request, Response } from "express"
import { StpMain } from "../DB/Models/StpModel"
import { formulaPreset } from "../DB/Models/StpPreset/GalssPropsPreset"

export class StpController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {

            const stps = await StpMain.findAll({ include: [{ all: true, nested: true }] })

            console.log('stps', stps)
            return res.json(stps)
        } catch (error) {
            next(error)
        }
    }
    static async create(req: Request, res: Response, next: NextFunction) {

        try {
            // const params = req.params as { fname?: string }

            const { fname } = req.query

            if (!fname) return res.status(404).json("Something gone wrong!! Stp not created!")
            const new_stp = await StpMain.create({ formula: fname })


            // console.log('new_stp', new_stp)
            return res.json(new_stp)
        }
        catch (error) {
            console.log("___ Create Error!")
            next(error)
        }
    }
    static async createPreset(req: Request, res: Response, next: NextFunction) {

        try {
            // const params = req.params as { fname?: string }

            const preset = formulaPreset
            // const glasspreset = gpreset.slice(0, 5)

            const new_stp = await StpMain.bulkCreate(preset)


            // console.log('new_stp', new_stp)
            return res.json(new_stp)
        }
        catch (error) {
            console.log("___ Create Error!")
            next(error)
        }
    }
    static async deleteAll(req: Request, res: Response, next: NextFunction) {
        try {
            await StpMain.destroy({ cascade: true, truncate: true })
            return res.status(200).json("table cleared")
        } catch (error) {
            console.log("___ __ Delete Error!")
            next(error)
        }

    }


}


