import { FreshContext } from "$fresh/server.ts";
import { LegacyCirqlStateless } from "cirql";
import initCirql from "$/database/connection.ts";

export interface State {
    context: Context;
}

export class Context {
    private static context: Context;
    public cirql: LegacyCirqlStateless;

    public constructor(cirql: LegacyCirqlStateless) {
        this.cirql = cirql;
    }

    public static init = async () => {
        if (!Context.context)
            Context.context = new Context(await initCirql());
    }

    public static instance = async () => {
        if (!Context.context)
            await Context.init();
        return Context.context;
    }
}

export const handler = async (_req: Request, ctx: FreshContext<State>) => {
    ctx.state.context = await Context.instance();
    return (await ctx.next());
}
