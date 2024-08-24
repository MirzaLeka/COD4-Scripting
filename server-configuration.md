# Multiplayer Server Configuration
Configuration, Rules and Restrictions.

* [Original article - pingperfect](https://pingperfect.com/index.php/knowledgebase/618/Call-of-Duty-4-Modern-Warfare-CoD4--Server-Configuration.html)
#

It's easy to configure your Pingperfect Call of Duty 4 Modern Warfare (CoD4) Server. Just follow the steps below.

Open the 'Configuration Files' section from your control panel.
Select the 'Text Editor' option next to 'main\server.cfg'
Refer to the Example Configuration below and change the respective settings where you need to do so in order to configure your server to your desires.

### Colors for text
Do not clear the comment in front of the color codes. Useful for your server name, motd msg's - Information and ref use only 

```gsc
// ^1 = Red 
// ^2 = Green
// ^3 = Yellow
// ^4 = Blue
// ^5 = Cyan
// ^6 = pink/Magenta
// ^7 = White
// ^0 = Black
```

### Server Config

 ```gsc
sets sv_hostname "COD4 Server"    //Server name, exactly as it will be displayed in the in-game server browser
sets _Admin "admin"    //
sets _Email ""    //
sets _Website ""    //
sets _Location ""    //
sets _Irc ""    //
set scr_motd ""    //
 ```

### Log Settings

```gsc
set g_logsync "2"         // 0=no log, 1=buffered, 2=continuous, 3=append
set logfile "1"           // 0 = NO log, 1 = log file enabled
set g_log "games_mp.log"  // Name of log file, default is games_mp.log
set sv_log_damage "1"
```
 

### Master servers

```gsc
set sv_master1 "cod2master.activision.com" 
set sv_master2 "cod2authorize.activision.com"
set sv_master3 "cod2master.infinityward.com"
set sv_master3 "cod2update.activision.com"
set sv_master4 "master.gamespy.com:28960" 
set sv_master5 "master0.gamespy.com" 
set sv_master6 "master1.gamespy.com" 
set sv_master7 "clanservers.net" 
set sv_gamespy "1" 
```
 

### Password Settings

```gsc
set rcon_password "45450"   // RCON password set here, must supply password to use RCON commands
set sv_privatePassword ""      // Private slots, non-public slots, to join a private slot you must enter the private password set here
```

The following can be used to lock out the server so that only those players that have been provide the password can connect.  Good for matches, practices, etc.

```gsc
set g_password ""
```

### Player slots setup

```gsc
set sv_privateclients ""       // Number of private player slots, maxclients - privateclients = public slots
```
 

### Ping 

```gsc
set sv_minPing "0"             // MIN player ping on CONNECT, any lower and player isnt allowed to connect
set sv_maxping "350"           // MAX player ping on CONNECT, any higher and player isnt allowed to connect
```
 

### Client Download Settings
* `0=off / 1=on`
* Used for MODs and custom maps

```gsc
set sv_allowdownload "1"    // enable download redirection
seta sv_wwwDownload "1"    // enable download redirection
//seta sv_wwwBaseURL "http://www.your_website.com/base_folder"    // defines url to download from
seta sv_wwwBaseURL "ftp://client:client@ftpfiles.myftp.org"    // defines url to download from
seta sv_wwwDlDisconnected "1"    //0 to disconnect clients while downloading, 1 to not disconnect clients
```
 

### Rate 

```gsc
set sv_maxRate "5000" 
```
 

### FPS

```gsc
set sv_fps "20"
```
 

### Drop inactive players

```gsc
set sv_timeout "300"
set sv_zombietime "1"
set g_inactivity "0"
set g_inactivityspectator "0"
```
 

### AntiFlooding Settings

```gsc
set sv_floodProtect "1"
set sv_reconnectlimit "3"
```
 
### Anti Cheat Settings

```gsc
set sv_disableClientConsole "0"
set cl_autocmd "0"
set sv_cheats "0"
set sv_pure "1"
set g_banIPs ""
set g_no_script_spam "1"
set sv_punkbuster "1"
```
 
### Temporary Ban duration, in seconds

```gsc
set sv_kickBanTime "3600"
```
 

### In-game voice communication system

```gsc
set sv_voice "1"
set sv_voiceQuality "1"
set voice_deadChat "0"
set voice_global "0"
set voice_localEcho "0"
set winvoice_mic_mute "1"
set sv_allowAnonymous "0"
set g_antilag "0"
set g_compassShowEnemies "0"
```

 ## Configuration per Game Mode

### DEATHMATCH

```gsc
set scr_dm_scorelimit 150
set scr_dm_timelimit 10
set scr_dm_roundlimit 1
set scr_dm_numlives 0
set scr_dm_playerrespawndelay 0
set scr_dm_waverespawndelay 0
```
 
### DOMINATION

```gsc
set scr_dom_scorelimit 200
set scr_dom_timelimit 0
set scr_dom_roundlimit 1
set scr_dom_numlives 0
set scr_dom_playerrespawndelay 0
set scr_dom_waverespawndelay 0
```
 
### TEAM DEATHMATCH

```gsc
set scr_war_scorelimit 750
set scr_war_timelimit 10
set scr_war_roundlimit 1
set scr_war_numlives 0
set scr_war_playerrespawndelay 0
set scr_war_waverespawndelay 0
 ```

### SABOTAGE

```gsc
set scr_sab_scorelimit 1
set scr_sab_timelimit 20
set scr_sab_roundlimit 0
set scr_sab_roundswitch 1
set scr_sab_numlives 0
set scr_sab_bombtimer 30
set scr_sab_planttime 2.5
set scr_sab_defusetime 5
set scr_sab_hotpotato 0
set scr_sab_playerrespawndelay 7.5
set scr_sab_waverespawndelay 0
```
 
### SEARCH AND DESTROY CLASSIC

```gsc
set scr_sd_scorelimit 4
set scr_sd_timelimit 2.5
set scr_sd_roundlimit 0
set scr_sd_roundswitch 3 // rounds between switching teams
set scr_sd_numlives 1 // elimination
set scr_sd_bombtimer 45
set scr_sd_planttime 5
set scr_sd_defusetime 5
set scr_sd_multibomb 0
set scr_sd_playerrespawndelay 0
set scr_sd_waverespawndelay 0
```
 
### CAPTURE THE FLAG -- NOT INCLUDED IN COD4

```gsc
set scr_ctf_scorelimit 10
set scr_ctf_timelimit 5
set scr_ctf_roundlimit 2
set scr_ctf_roundswitch 1
set scr_ctf_numlives 0
set scr_ctf_playerrespawndelay 0
set scr_ctf_waverespawndelay 15
```
 
### KING OF THE HILL (HQ)

```gsc
set scr_koth_scorelimit 250
set scr_koth_timelimit 15
set scr_koth_roundlimit 1
set scr_koth_roundswitch 1
set scr_koth_numlives 0
set scr_koth_playerrespawndelay 0
set scr_koth_waverespawndelay 0
set koth_autodestroytime 60
set koth_spawntime 0
set koth_kothmode 0
set koth_capturetime 20
set koth_destroytime 10
set koth_delayPlayer 0
set koth_spawnDelay 60
```
 

### First gametype to load

```gsc
// "dm"   - free for all deathmatch
// "dom"  - domination
// "koth" - headquarters
// "sab"  - sabotage
// "sd"   - search & destroy
// "war"  - team deathmatch
```

## Map Rotation Setting

### DEATHMATCH (FREE FOR ALL)

```gsc
set sv_mapRotation
gametype dm
map mp_backlot
```
Or inline (original)

```gsc
set sv_mapRotation "gametype dm map mp_backlot gametype dm map mp_bloc gametype dm map mp_bog gametype dm map mp_cargoship gametype dm map mp_citystreets gametype dm map mp_convoy gametype dm map mp_countdown gametype dm map mp_crash gametype dm map mp_crossfire gametype dm map mp_farm gametype dm map mp_overgrown gametype dm map mp_pipeline gametype dm map mp_shipment gametype dm map mp_showdown gametype dm map mp_strike gametype dm map mp_vacant"
```

### DOM -- DOMINATION

```gsc
set sv_mapRotation "gametype dom map mp_backlot gametype dom map mp_bloc gametype dom map mp_bog gametype dom map mp_cargoship gametype dom map mp_citystreets gametype dom map mp_convoy gametype dom map mp_countdown gametype dom map mp_crash gametype dom map mp_crossfire gametype dom map mp_farm gametype dom map mp_overgrown gametype dom map mp_pipeline gametype dom map mp_shipment gametype dom map mp_showdown gametype dom map mp_strike gametype dom map mp_vacant"
```

### KOTH -- HEADQUARTERS

```gsc
set sv_mapRotation "gametype koth map mp_backlot gametype koth map mp_bloc gametype koth map mp_bog gametype koth map mp_cargoship gametype koth map mp_citystreets gametype koth map mp_convoy gametype koth map mp_countdown gametype koth map mp_crash gametype koth map mp_crossfire gametype koth map mp_farm gametype koth map mp_overgrown gametype koth map mp_pipeline gametype koth map mp_shipment gametype koth map mp_showdown gametype koth map mp_strike gametype koth map mp_vacant"
```

### SAB -- SABOTAGE

```gsc
//set sv_mapRotation "gametype sab map mp_backlot gametype sab map mp_bloc gametype sab map mp_bog gametype sab map mp
```
