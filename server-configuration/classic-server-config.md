# Classic COD4 Server Config (ModWarfare)

Find the server.cfg file in the ModWarfare directory (e.g. E:\Program Files\Steam\steamapps\common\Call of Duty 4\Mods\ModWarfare)

### Limit the number of players that can choose each class type

```gsc
set class_assault_limit				99
set class_specops_limit				99
set class_heavygunner_limit			99
set class_demolitions_limit			99
set class_sniper_limit				99
```

### Enable dropping of specified weapon class

* 1 = enable, 0 = disable

```gsc
set class_assault_allowdrop			1
set class_specops_allowdrop			1
set class_heavygunner_allowdrop		1
set class_demolitions_allowdrop		1
set class_sniper_allowdrop			1
```

## Weapons

### Assault rifles

```gsc
set weap_allow_m16					1
set weap_allow_ak47					1
set weap_allow_m4					1
set weap_allow_g3					1
set weap_allow_g36c					1
set weap_allow_m14					1				
set weap_allow_mp44					1
```

#### Assault attachments				1
set attach_allow_assault_none		1
set attach_allow_assault_gl			1
set attach_allow_assault_reflex		1
set attach_allow_assault_silencer	1
set attach_allow_assault_acog		1

### SMGs

```gsc
set weap_allow_mp5					1
set weap_allow_skorpion				1
set weap_allow_uzi					1
set weap_allow_ak74u				1
set weap_allow_p90					1
```

#### SMG attachments
```gsc
set attach_allow_smg_none			1
set attach_allow_smg_reflex			1
set attach_allow_smg_silencer		1
set attach_allow_smg_acog			1
```


### Shotguns
```gsc
set weap_allow_m1014				1
set weap_allow_winchester1200		1
```

#### Shotgun attachments
```gsc
set attach_allow_shotgun_none		1
set attach_allow_shotgun_reflex		1
set attach_allow_shotgun_grip		1
```

### Light machine guns
```gsc
set weap_allow_saw					1
set weap_allow_rpd					1
set weap_allow_m60e4				1
```

#### LMG attachments
```gsc
set attach_allow_lmg_none			1
set attach_allow_lmg_reflex			1
set attach_allow_lmg_grip			1
set attach_allow_lmg_acog			1
```


### Sniper rifles
```gsc
set weap_allow_dragunov				1
set weap_allow_m40a3				1
set weap_allow_barrett				1
set weap_allow_remington700			1
set weap_allow_m21					1
```

#### Sniper attachments
```gsc
set attach_allow_sniper_none		1
set attach_allow_sniper_acog		1
```

### Pistols
```gsc
set weap_allow_beretta				1
set weap_allow_colt45				1
set weap_allow_usp					1
set weap_allow_deserteagle			1
set weap_allow_deserteaglegold		1
```

#### Pistol attachments
```gsc
set attach_allow_pistol_none		1
set attach_allow_pistol_silencer	1
```

### Grenades
```gsc
set weap_allow_frag_grenade			1
set weap_allow_concussion_grenade	1
set weap_allow_flash_grenade		1
set weap_allow_smoke_grenade		1
```

## Perks
```gsc
set perk_allow_specialty_parabolic			1
set perk_allow_specialty_gpsjammer			1
set perk_allow_specialty_holdbreath			1
set perk_allow_specialty_quieter			1
set perk_allow_specialty_longersprint		1
set perk_allow_specialty_detectexplosive	1
set perk_allow_specialty_explosivedamage	1
set perk_allow_specialty_pistoldeath		1
set perk_allow_specialty_grenadepulldeath	1
set perk_allow_specialty_bulletdamage		1
set perk_allow_specialty_bulletpenetration	1
set perk_allow_specialty_bulletaccuracy		1
set perk_allow_specialty_rof				1
set perk_allow_specialty_fastreload			1
set perk_allow_specialty_extraammo			1
set perk_allow_specialty_armorvest			1
set perk_allow_specialty_fraggrenade		1
set perk_allow_specialty_specialgrenade		1
set perk_allow_c4_mp						1
set perk_allow_claymore_mp					1
set perk_allow_rpg_mp           1
```		

## Loadout

### Assault class default loadout
```gsc
set class_assault_primary 					m16
set class_assault_primary_attachment 		gl
set class_assault_secondary 				beretta
set class_assault_secondary_attachment 		none
set class_assault_perk1 					specialty_null
set class_assault_perk2 					specialty_bulletdamage
set class_assault_perk3 					specialty_longersprint
set class_assault_grenade 					concussion_grenade
set class_assault_camo 						camo_none
set class_assault_frags 					1
set class_assault_special 					1
```

### Specops class default loadout
```gsc
set class_specops_primary 					mp5
set class_specops_primary_attachment 		none
set class_specops_secondary 				usp
set class_specops_secondary_attachment 		silencer
set class_specops_perk1 					c4_mp
set class_specops_perk2 					specialty_explosivedamage
set class_specops_perk3 					specialty_bulletaccuracy
set class_specops_grenade 					flash_grenade
set class_specops_camo 						camo_none
set class_specops_frags 					1
set class_specops_special 					1
```

### Heavygunner class default loadout
```gsc
set class_heavygunner_primary 				saw
set class_heavygunner_primary_attachment 	none
set class_heavygunner_secondary 			usp
set class_heavygunner_secondary_attachment 	none
set class_heavygunner_perk1 				specialty_specialgrenade
set class_heavygunner_perk2 				specialty_armorvest
set class_heavygunner_perk3 				specialty_bulletpenetration
set class_heavygunner_grenade 				concussion_grenade
set class_heavygunner_camo 					camo_none
set class_heavygunner_frags 				1
set class_heavygunner_special 				1
```

### Demolitions class default loadout

```gsc
set class_demolitions_primary 				winchester1200
set class_demolitions_primary_attachment 	none
set class_demolitions_secondary 			beretta
set class_demolitions_secondary_attachment 	none
set class_demolitions_perk1 				rpg_mp
set class_demolitions_perk2 				specialty_explosivedamage
set class_demolitions_perk3 				specialty_longersprint
set class_demolitions_grenade 				smoke_grenade
set class_demolitions_camo 					camo_none
set class_demolitions_frags 				1
set class_demolitions_special 				1
```

### Sniper class default loadout

```gsc
set class_sniper_primary 					m40a3
set class_sniper_primary_attachment 		none
set class_sniper_secondary 					beretta
set class_sniper_secondary_attachment 		silencer
set class_sniper_perk1 						specialty_specialgrenade
set class_sniper_perk2 						specialty_bulletdamage
set class_sniper_perk3 						specialty_bulletpenetration
set class_sniper_grenade 					flash_grenade
set class_sniper_camo 						camo_none
set class_sniper_frags 						1
set class_sniper_special 					1
```


```gsc
set scr_enable_nightvision					1
set scr_enable_music						1
set scr_enable_hiticon						1
```

## Gameplay

```gsc
set scr_game_allowkillcam				1
set scr_game_onlyheadshots 				0
set scr_game_deathpointloss 			0
set scr_game_suicidepointloss 			0
set scr_team_teamkillpointloss 			1
set scr_game_spectatetype				1
set scr_game_forceuav					0
set scr_game_hardpoints					1
```

### Hardpoints (killstreaks)
```gsc
set scr_hardpoint_allowartillery		1
set scr_hardpoint_allowuav				1
set scr_hardpoint_allowhelicopter		1
```


### Modes

```gsc
set scr_hardcore						0 / 1 // sets hardcore mode
set scr_oldschool_mw 					0 / 1 sets oldschool mode
```

### UI Details

```gsc
set ui_hud_obituaries					1
set ui_hud_showobjicons 				1
```

### Teams

```gsc
set scr_team_fftype						0
set scr_team_teamkillspawndelay 		20
set scr_team_kickteamkillers 			0
```
### Player

```gsc
set scr_player_maxhealth 				100
set scr_player_suicidespawndelay		0
set scr_player_healthregentime 			5
set scr_player_forcerespawn 			1
set scr_player_sprinttime				4
```

### Movement Speed

```gsc
set class_assault_movespeed					0.95
set class_specops_movespeed					1.00
set class_heavygunner_movespeed				0.875
set class_demolitions_movespeed				1.00
set class_sniper_movespeed					1.00
```

### Helicopter settings

It may take some trial and error to get it exactly how you like.

```gsc
set scr_heli_armor “100”
set scr_heli_armor_bulletdamage “0.3”
set scr_heli_attract_range “4096”
set scr_heli_attract_strength “1000”
set scr_heli_hardpoint_interval “180”
set scr_heli_health_degrade “0”
set scr_heli_loopmax “1”
set scr_heli_maxhealth “100” //value of 1 upto 1300. 1 is easiest to kill, 1300 is default.
set scr_heli_missile_engage_dist “2000”
set scr_heli_missile_friendlycare “256”
set scr_heli_missile_max “3”
set scr_heli_missile_regen_time “10”
set scr_heli_missile_rof “5”
set scr_heli_missile_target_cone “0.3”
set scr_heli_rage_missile “5”
set scr_heli_target_recognition “0.3”
set scr_heli_target_spawnprotection “5”
set scr_heli_targeting_delay “0.5”
set scr_heli_turret_engage_dist “1000”
set scr_heli_turret_spinup_delay “0.75”
set scr_heli_turretClipSize “5” // values of 0 to 40. 0 heli wont fire, but 40 is default value.
set scr_heli_turretReloadTime “1.5”
set scr_heli_visual_range “3500”
```
