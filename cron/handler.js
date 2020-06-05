const AWS = require("aws-sdk");
const ec2 = new AWS.EC2();

const INSTANCES = process.env.INSTANCES;

exports.stopInstance = async (event) => {
  console.log("Stop Instance");

  const instanceIdsArray = INSTANCES.split(",");

  const params = {
    InstanceIds: instanceIdsArray,
  };

  return ec2
    .stopInstances(params)
    .promise()
    .then((data) => {
      console.log(data);
      return;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

exports.startInstance = async (event) => {
  console.log("Start Instance");

  const instanceIdsArray = INSTANCES.split(",");

  const params = {
    InstanceIds: instanceIdsArray,
  };

  return ec2
    .startInstances(params)
    .promise()
    .then((data) => {
      console.log(data);
      return;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
