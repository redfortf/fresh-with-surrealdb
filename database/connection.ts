import { LegacyCirqlStateless } from "cirql";
import initialiseSurreal from "$/database/initialise.ts";
import { host, port, user, pass, namespace, database } from "$/environment/database.ts";

export default async () => {
    await initialiseSurreal();

    return new LegacyCirqlStateless({
        connection: { endpoint: `${host}:${port}`, namespace, database, },
        credentials: { user, pass, },
    });
};

