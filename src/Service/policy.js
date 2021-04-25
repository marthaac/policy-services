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
        let totalCost = 0;
        workers[0].forEach((worker) => {
            let cost = 0;
            if (worker.age > 65) return; // company don't cover policy
            cost = calcPolicyByWorker(worker, "H"); // healt cost
            cost += has_dental_care && calcPolicyByWorker(worker, "D"); // dental cost
            totalCost += (cost * company_percentage) / 100;
        });
        return totalCost.toFixed(2);
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
            let cost = 0;
            cost = calcPolicyByWorker(worker, "H"); // healt cost
            cost += has_dental_care && calcPolicyByWorker(worker, "D"); // dental cost
            if (worker.age > 65) return { ...worker, copago: cost.toFixed(2) }; // company don't cover policy
            const companyCoverage = (cost * company_percentage) / 100;
            return { ...worker, copago: (cost - companyCoverage).toFixed(2) };
        });
        return copay;
    } catch (error) {
        throw error;
    }
};
