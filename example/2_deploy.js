const Bank = artifacts.require("Bank");

module.exports = async function (deployer) {
	await deployer.deploy(Bank)
};