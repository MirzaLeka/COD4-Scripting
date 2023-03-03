### launch options
```bash
-novid -tickrate 128 +mat_queue_mode 2 +cl_forcepreload 1 -novid -nojoy
```

### remove blood
```bash
bind w "+forward;r_cleardecals";bind a "+moveleft;r_cleardecals";bind s "+back;r_cleardecals";bind d "+moveright;r_cleardecals";
```

### remove details
```bash
cl_forcepreload 1; mat_queue_mode 2; r_drawtracers_firstperson 0; r_dynamic 0;
```
