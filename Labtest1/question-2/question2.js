//Question 2: Promises
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: "This message is a resolved success!" });
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("This is a rejected failure!"));
        }, 500);
    });
};

resolvedPromise()
    .then(result => console.log("Resolved:", result))
    .catch(error => console.error("Resolved Error:", error));

rejectedPromise()
    .then(result => console.log("Rejected:", result))
    .catch(error => console.error("Rejected Error:", error));
