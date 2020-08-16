const MyContract = artifacts.require("Agrinsure");
const LinkTokenInterface = artifacts.require("LinkTokenInterface");

const linkTokenAddress = "0x20fE562d797A42Dcb3399062AE9546cd06f63280";
const oracle = "0x4a3fbbb385b5efeb4bc84a25aaadcd644bd09721";
const jobId = web3.utils.toHex("67c9353f7cc94102b750f84f32027217"); //0x3637633933353366376363393431303262373530663834663332303237323137
const perCallLink = web3.utils.toWei("0.1"); //100000000000000000
const depositedLink = web3.utils.toWei("1");

module.exports = async function(deployer) {
  await deployer.deploy(
    MyContract,
    linkTokenAddress,
    oracle,
    jobId,
    perCallLink
  );
  const myContract = await MyContract.deployed();

  const linkToken = await LinkTokenInterface.at(linkTokenAddress);
  await linkToken.transfer(myContract.address, depositedLink);
};
//"0x20fE562d797A42Dcb3399062AE9546cd06f63280","0x4a3fbbb385b5efeb4bc84a25aaadcd644bd09721","0x3637633933353366376363393431303262373530663834663332303237323137","100000000000000000"
//"400","burundi",true,"1"