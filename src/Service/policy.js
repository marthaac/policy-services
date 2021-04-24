import { getData } from "./api";
import { calcPolicyByWorker } from "./workers";

/**
 * Function that calc the value of the policy for the company
 * @returns {Promise<number>}
 */
export const getPolicy = async () => {
    try {
        const {
            data: {
                policy: { workers, has_dental_care, company_percentage },
            },
        } = await getData();
        let total = 0;
        workers[0].forEach((worker) => {
            let value = 0;
            if (worker.age > 65) return;
            value = calcPolicyByWorker(worker, "H");
            value += has_dental_care && calcPolicyByWorker(worker, "D");
            total += (value * company_percentage) / 100;
        });
        return total.toFixed(2);
    } catch (error) {
        throw error;
    }
};

/**
 * Function that calculate the copay for every worker
 * @returns {Promise<Array<any>>}
 */
export const getCopay = async () => {
    try {
        const {
            data: {
                policy: { workers, has_dental_care, company_percentage },
            },
        } = await getData();
        let copay = workers[0].map((worker) => {
            let value = 0;
            value = calcPolicyByWorker(worker, "H");
            value += has_dental_care && calcPolicyByWorker(worker, "D");
            if (worker.age > 65) return { ...worker, copago: value.toFixed(2) };
            const company = (value * company_percentage) / 100;
            return { ...worker, copago: (value - company).toFixed(2) };
        });
        return copay;
    } catch (error) {
        throw error;
    }
};
