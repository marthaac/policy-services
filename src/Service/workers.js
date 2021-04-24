import { HEALTH, DENTAL } from "../Features/const";

/**
 * Function that return the policy value by child number
 * @param {object} worker
 * @param {string} typePolicy
 * @returns {number}
 */
export const calcPolicyByWorker = (worker, typePolicy) => {
    let value = 0;
    switch (worker.childs) {
        case 0:
            value = typePolicy === "H" ? HEALTH.NO_CHILD : DENTAL.NO_CHILD;
            break;
        case 1:
            value = typePolicy === "H" ? HEALTH.CHILD : DENTAL.CHILD;
            break;
        default:
            value = typePolicy === "H" ? HEALTH.CHILDS : DENTAL.CHILDS;
            break;
    }
    return value;
};
