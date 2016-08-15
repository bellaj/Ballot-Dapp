 
  // setup the web3 object and the Ethereum provider
      // also support MetaMask if it's available
      if(typeof window.web3 !== "undefined" && typeof window.web3.currentProvider !== "undefined") {
        var web3 = new Web3(window.web3.currentProvider);
      } else {
        var web3 = new Web3();
      }

      var selectedAccount;

      web3.eth.getAccounts(function(err, accounts){if(!err && accounts.length > 0) selectedAccount = accounts[0];      });

	  
	  
var abiArray =[{"constant":false,"inputs":[{"name":"proposal","type":"uint256"}],"name":"vote","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"name","type":"bytes32"},{"name":"voteCount","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"chairperson","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"delegate","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"winningProposal","outputs":[{"name":"winningProposal","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"}],"name":"giveRightToVote","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voters","outputs":[{"name":"weight","type":"uint256"},{"name":"voted","type":"bool"},{"name":"delegate","type":"address"},{"name":"vote","type":"uint256"}],"type":"function"},{"inputs":[{"name":"proposalNames","type":"bytes32[]"}],"type":"constructor"}]
	  
	  
var MyContract = web3.eth.contract(abiArray);

var contractInstance = MyContract.at('0xd9107d1f3c52bb440256a5f3ad9d6c2c3f38e1ee');// Instantiate from an existing address:

 
/*function yes_()
{  
 var e = document.getElementById("proposals");
var strproposal_id = e.options[e.selectedIndex].value;
var strproposal_name =  e.options[e.selectedIndex].text;

 document.getElementById("Message_label").innerHTML = strproposal_name;

}*/

function vote_()
{  
 var e = document.getElementById("proposals");

var account_voter=web3.eth.accounts[0]   // document.getElementById("address_voter").value;
//var strproposal_id = e.options[e.selectedIndex].value;


 var transactionObject = {from: account_voter,value: web3.toWei(15, "ether"),gas: 3000000};
		
 contractInstance.vote(strproposal_id, transactionObject);
}

function delegate_voter()
{

var deleg_voter=document.getElementById("delegate_voter").value;
 


 var transactionObject = {from: web3.eth.accounts[0],gas: 3000000}; // the chairman delegate the vote
		
 contractInstance.delegate(deleg_voter, transactionObject);
}

function result_()
{  

     var winningProposal = contractInstance.winningProposal(); // return constant 
    document.getElementById("winningProposal").innerHTML = winningProposal;
 

 }  

function settings_()
{  
 //excuted after page load to avoid any "innerhtml nul" problem
  document.getElementById("chairpersson").innerHTML = contractInstance.chairperson();
  
}

function get_voter()
{  
var address =   document.getElementById("address_voter").value;
 var voter = contractInstance.voters( address);//"0x2875c4a50ebda59cfc05b1cae132fbce994d669d"
 var weight=voter[0];
 var voted=voter[1];
 var delegate=voter[2];
 var voty=voter[3];
  document.getElementById("voter_detail").innerHTML ='weight '+weight+'\n delegate : '+delegate+'\n voted : '+voted+' \n vote : '+voty ;  

}
function creat_contract()
{  
 

}

