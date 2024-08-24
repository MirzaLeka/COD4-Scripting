# Binds in COD4

COD4 binds are a quick and useful way to convey common commands at a touch of a button. 
I refer to **binds** as variables that hold the value user sets and then the value can be reused anytime during the match by using the bind.

### Simple Bind
The most common use case of binds is to print out messages in the screen. Open up a console (`~` tilde key) and start typing:

```gsc
/bind 7 say Hello World!
```
Now hit enter.
What you just did is created a bind. Every time you hit the numeber `7` on your keyboard, the game will print the message `Hello World!`.

### How it works

| Bind command | Any key you desire | The action     |
| :--------- | :------------------- | :------------- |
| `/bind`    | `7`                  | `Hello World!` |

### Unbind key
To overrite the existing key you need to first unbind, then create a new bind.

```gsc
/unbind 7
```

Now when that's done you can bind the same key again:

```gsc
/bind 7 say_team Go go go!
```

This time around the message will be printed in the team chat.

### Colorful message bind
Often you'll see players use colorful text when printing messages using binds. This is done using the `^` caret symbol:

```gsc
/bind ^1Good ^5Game
```

#### Color Variations:
* Black: `^0`
* Red: `^1`
* Green: `^2`
* Yellow: `^3`
* Blue: `^4`
* Dark Blue: `^5`
* Purple: `^6`
* White (Default): `^7`
* Cyan (Light Blue), "Team Chat" Color: `^8`
* Grey: `^9`

## More examples of using Binds
I like to record demos when playing and at some point it became annoying to do 
* `/record some_demo_1`
* `/stoprecord`
* `/record some_demo_2`
* `/stoprecord`

at the beginning and the end of a match or a flawless moment. Hence, I use binds.

```gsc
/bind 0 stoprecord
```

With this command I can terminate the ongoing recording just by pressing the bind.
This demonstrates that binds can be used with other [GSC commands](https://github.com/MirzaLeka/COD4-Scripting/blob/main/all-cod4-commands.gsc) besides printing messages.

### More Useful Links on using Binds:

* [How to binds](https://steamcommunity.com/sharedfiles/filedetails/?id=121629944)
* [CoD4 Text Binds: How to make and use them](https://fearless-assassins.com/forums/topic/12279-cod4-text-binds-how-to-make-and-use-them/)
* [CoD4 Weapon Cycle Delay Bind Explained](https://www.youtube.com/watch?v=uIRzoQ1mYUA)


