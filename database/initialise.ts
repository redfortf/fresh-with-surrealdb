import { LegacyCirqlStateless } from "cirql";
import { host, port, user, pass, namespace, database } from "$/environment/database.ts";

const init_query = String.raw`
-- Define namespace.
DEFINE NAMESPACE $namespace;

-- Use defined namespace and create database in it.
USE NS $namespace;
DEFINE DATABASE $database;

-- Create schemafull table.
USE DB $database;
DEFINE TABLE student SCHEMAFULL;

-- Define some fields.
DEFINE FIELD firstName ON TABLE student TYPE string;
DEFINE FIELD lastName ON TABLE student TYPE string;`;

export default async () => {
    console.log("");
    console.log("\x1b[97;45m \udb82\udec8  SurrealDB \x1b[0m Initialising database...");

    await new LegacyCirqlStateless({
        connection: { endpoint: `${host}:${port}`, },
        credentials: { user, pass, },
    }).query(init_query
        .replaceAll("$namespace", namespace)
        .replaceAll("$database", database),
    {});
    
    console.log("");
    console.log("\x1b[97;45m \udb82\udec8  SurrealDB \x1b[0m Database finished initialising");
}
