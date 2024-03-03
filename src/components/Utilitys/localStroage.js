const getStroedJobApplication = () => {
  const storedJobApplication = localStorage.getItem("Job-applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplication = getStroedJobApplication();
  const exist = storedJobApplication.find((jobIb) => jobIb === id);
  if (!exist) {
    storedJobApplication.push(id);
    localStorage.setItem(
      "Job-applications",
      JSON.stringify(storedJobApplication)
    );
  }
};

export { getStroedJobApplication, saveJobApplication };
