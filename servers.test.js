describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function() {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function() {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a new server to allServers on updateServerTable()', function() {
    let serverId = 1;
    let serverName = 'Robert';
    allServers['server' + serverId] = {
      serverName
    };
    updateServerTable();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Robert');

  });

  afterEach(function() {
    // teardown logic
    // document.getElementById("serverTable").remove(); // removes all rows including the header
    document.getElementById("serverTable").deleteRow(1);
    serverNameInput.value = '';
  });
});
