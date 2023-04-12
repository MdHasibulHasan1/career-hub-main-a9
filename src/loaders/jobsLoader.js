
export const jobsLoader = async () => {
    const loadedJobs = await fetch('/jobs.json')
    const allJobs = await loadedJobs.json();
    return allJobs;
}
