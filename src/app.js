import express from "express";
import { getCopay, getPolicy } from "./Service/policy";
const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
