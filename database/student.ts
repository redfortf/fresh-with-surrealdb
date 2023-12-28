import { z } from "$zod/mod.ts";
import { LegacyCirqlStateless, RecordSchema, create, delRecord, select } from "cirql";

class StudentDAO {
    public static readonly tablename = "student"
    public static readonly schema = RecordSchema.extend({
        firstName: z.string(),
        lastName: z.string()
    })

    private cirql: LegacyCirqlStateless

    public constructor(cirql: LegacyCirqlStateless) {
        this.cirql = cirql;
    }
    
    public getAll = async () =>
        await this.cirql.execute({ 
            query: select()
                .from(StudentDAO.tablename),
            schema: StudentDAO.schema
        })

    public create = async (firstName: string, lastName: string) => 
        await this.cirql.execute({
            query: create(StudentDAO.tablename)
                .content({ firstName, lastName }),
            schema: StudentDAO.schema
        }) 

    public del = async (id: string) => 
        await this.cirql.execute({
            query: delRecord(id),
            schema: z.any()
        })
}

export default StudentDAO;
export type StudentSchema = typeof StudentDAO.schema._type
