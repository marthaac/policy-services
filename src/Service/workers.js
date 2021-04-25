import { HEALTH, DENTAL } from "../Features/const";

/**
 * Function that return the policy value by child number
 * @param {object} worker
 * @param {string} typePolicy
 * @returns {number}
 */
export const calcPolicyByWorker = (worker, typePolicy = "H") => {
    let value = 0;
    let type = typePolicy === "H";
    switch (worker.childs) {
        case 0:
            value = type ? HEALTH.NO_CHILD : DENTAL.NO_CHILD;
            break;
        case 1:
            value = type ? HEALTH.CHILD : DENTAL.CHILD;
            break;
        default:
            value = type ? HEALTH.CHILDS : DENTAL.CHILDS;
            break;
    }
    return value;
};
