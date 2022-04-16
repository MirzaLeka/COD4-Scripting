# COD4 Remote CONtrol Server Commands

## User Auth 👤

* Login to remote rcon: ```/rcon login [RCONPASSWORD]```

* Change or remove the password to join your server by leaving the value empty: ```/rcon g_password ""```

* Change the hostname on the request form or if you want to change it after you've started it, you can do so using this command (Please note that you are required to keep the advert part in the hostname):
```/rcon sv_hostname "^6CUSTOM HOSTNAME ^7- free @ fshost.me"```

## Kicks 🦵

* Kick a player by name from the server (Must include Color Codes): ```/rcon kick [NAME]```

* Kick all players from the server: ```/rcon kick all```

* Kicks a player by name from the server (Does not need Color Codes): ```/rcon onlykick [NAME]```

* Kick all players from the server: ```/rcon onlykick all```

* Kicks a player by client id from the server: ```/rcon clientkick [ID]```

## Bans 🚫

* Ban a user by ther ingame name. Writes their GUID to ban.txt: ```/rcon banUser [NAME]```

* Ban a user by their client number. Writes their GUID to ban.txt: ```/rcon banClient [ID]```

* Kick and temporarily bans player by name from server: ```/rcon tempBanUser [NAME]```. Time is set using the variable ```sv_kickBanTime```

* Unban every player banned with [NAME]. If you want to unban a single player whose name appears more than once, you should edit "ban.txt" manually: 
```/rcon unbanuser [NAME]```


## Map Controls 🗺️

* Load/Change map specified by [MAPNAME](https://github.com/MirzaLeka/COD4-Scripting/blob/main/dev-maps.md): ```/rcon map [MAPNAME]```, eg: ```/rcon map mp_crash```

* Load next map in rotation set in ```sv_maprotation```: ```/rcon map_rotate```

* Reload map: ```/rcon map_restart``` 

* Restart map: ```/rcon fast_restart```

## Server Info 💻

* Show the current server's settings: ```/rcon serverinfo```

* Show the current System Information: ```/rcon systeminfo```

* Display info of all the players on the server: ```/rcon status```

* Execute a Server Config File (located in your server's main directory): ```/rcon exec [FILENAME]```

* Save a Server Config File: ```/rcon writeconfig [FILENAME]```

* Post a console message to all players: ```/rcon say [MESSAGE]```

## Screenshot 🖼️

* Take a screenshot for 1.7 (you will need PB enabled for this): ```/rcon pb_sv_getss clientslot```

* Take a screenshot for CoD4x v20 ```/rcon getss clientslot or all```

## Sources 🔗

* [GamesClan](https://www.gamesclan.net/billing/index.php/knowledgebase/33/Call-of-Duty-4-Rcon-Commands.html)
* [Wiki4NetPlayers](https://wiki.4netplayers.com/en/RCON_Commands_CoD_4)
* [FSHost](https://fshost.me/help/rcon/cod4)
* [COD1Mania](https://www.cod1mania.com/the-most-important-rcon-commands/)
