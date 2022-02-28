async function main() {

    const [deployer, admin, wallet] = await ethers.getSigners();

    // console.log("1. deployer: =============", deployer);
    // console.log("2. admin: =============", admin);
    // console.log("3. wallet: =============", wallet);

  
    // console.log(
    //   "Deploying contracts with the account:",
    //   deployer.address
    // );
    
    // console.log("Account balance before:", (await deployer.getBalance()).toString());
    // console.log("Deploying token contract ...");

    // const governanceFactory = await ethers.getContractFactory("Alpha");
    // const governance = await governanceFactory.deploy("Alpha", "Alpha", "0x58e0aa9c87A100E9358Cb458028aE3f2fFa25383");
    // //const governance = await governanceFactory.deploy(admin.address, wallet.address);

    // await governance.deployed();
    // console.log("Governance address:", governance.address);
    // console.log("Account balance after:", (await deployer.getBalance()).toString());
    //const [deployer] = await ethers.getSigners();

    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    
    const Lottery = await ethers.getContractFactory("Lottery");
    LT = await Lottery.deploy();
    console.log("Lottery Contract Address:", LT.address);

  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });