import {Request, Response} from "express";
import { getManager } from "typeorm";

export const HealthCheck = async (req: Request, res: Response) => {
    const resp = await getCurrentDate()
    res.send(resp);
}

async function getCurrentDate() {
    try {      
      const entityManager = getManager();    
      const result = await entityManager.query('SELECT CURRENT_TIMESTAMP as now');      
      // result = [ { now: '2021-06-01 12:00:00' } ]
      return result[0].now; // Devuelve el valor de 'now' del primer objeto
    } catch (error) {
      console.error('Failed to fetch current date and time:', error);
      throw error;
    }
  }