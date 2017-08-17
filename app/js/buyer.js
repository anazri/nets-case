// BUYER PAGE LOAD

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
      console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
      // Use Mist/MetaMask's provider
      window.web3 = new Web3(web3.currentProvider);
      console.log("PROVIDER; ")
      console.log(web3.currentProvider)
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    //window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
  App.start();

  // compile template
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

  var properties = App.GetAllProperties();
  // put dummy data into props
    properties.push(['test','haps']);
    properties.push(['8888','hasdf']);
    properties.push(['jfjfj','34erd']);
  console.log(properties);

  var entriesdiv = $("#entries");
    for(i=0; i<properties.length;i++) {
        var context = {image: "http://placehold.it/350x250", price: properties[i][0], type: properties[i][1], city: "copenhagen", street: "Universitetsgade 5", year: "2001", size: "200", rooms: "4", energyclass: "Class D"};
        var html    = template(context);
        entriesdiv.append(html);
    }

});