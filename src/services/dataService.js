const departments = {
  qa: ["Junior QA", "QA Manager"],
  development: ["Junior Developer", "Senior Developer", "Development Manager"],
};

export const fetchTitlesByDepartment = (department) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(departments[department]);
    }, 2000);
  });

export const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        firstName: "Steve",
        lastName: "Jobs",
      });
    }, 2000);
  });

export const saveData = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: !!data.title });
    }, 2000);
    setTimeout(() => {
      reject("somthing wrong try again");
    }, 3000);
  });
