import express from "express";
import { getCopay, getPolicy } from "./Service/policy";
import { EXPRESS_PORT } from "./Features/const";

const app = express();

app.get("/policy", (req, res) => {
    getPolicy()
        .then((value) => res.send({ policy: value }))
        .catch((error) => {
            console.log(error);
            res.status(500).send({ error: "Ha ocurrido un error..." });
        });
});

app.get("/copay", (req, res) => {
    getCopay()
        .then((values) => res.send({ insurances: values }))
        .catch((error) => {
            console.log(error);
            res.status(500).send({ error: "Ha ocurrido un error..." });
        });
});

app.listen(EXPRESS_PORT, () => {
    console.log(`App listening at http://localhost:${EXPRESS_PORT}`);
});
