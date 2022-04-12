const express = require('express');
const source = require('gamedig');
const app = express();

// Credits: https://github.com/cod4mw/serverinfo-api

/* GET home page. */
app.get('/:address', async (req, res, next) => {
  try {
    let address = req.params.address;

    if (!/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9]))?$/.test(address)) {
      return next();
    }

    address = address.split(':');
    let ip = address[0];
    let port = address[1] || '28960';


    let data = await source.query({
      type: 'cod4',
      host: ip,
      port: port
    });

    let serverData = {
      host: ip,
      port: port
    };
    if (data) {
      serverData.data = data;
    }


    res.json(serverData);
  }
  catch (e) {
    if (e.toString().includes('UDP Watchdog Timeout')) {
      res.json({
        error: '1004',
        message: 'Game Server Offline'
      });
    }
    else {
      next(e);
    }
  }
});

app.listen(4000, () => {
  console.log('server started on port 4000');
})