import { getShoppingCart } from "../utilities/fakedb.js";

export const cartProductsLoader = async () => {
    const loadedJobs = await fetch('/jobs.json')
    const allJobs = await loadedJobs.json();

   

    const storedCart = getShoppingCart();
    const savedJob = [];
    for (const id in storedCart) {
        const addedJob = allJobs.find(job => job.id === id)
        if (addedJob) {
            const quantity = storedCart[id];
            addedJob.quantity = quantity;
            savedJob.push(addedJob);
        }
    }

    return {allJobs, savedJob};
}
