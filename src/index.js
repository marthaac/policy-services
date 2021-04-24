import { getCopay, getPolicy } from "./Service/policy";

(async () => {
    try {
        const policy = await getPolicy();
        const copay = await getCopay();
        console.log(`La empresa debe pagar ${policy} UF`);
        copay.forEach((element) => {
            console.log(`Copago de ${element.copago} UF`);
        });
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit();
    }
})();
