## Classes
<dl>
<dt><a href="#Pitch">Pitch</a></dt>
<dd></dd>
</dl>
## Functions
<dl>
<dt><a href="#parsePitch">parsePitch(sciPitch)</a> ⇒ <code>object</code> | <code>false</code></dt>
<dd><p>Parse a pitch string and return its properties or
false if the string is not valid</p>
</dd>
<dt><a href="#toMidi">toMidi(sciPitch)</a> ⇒ <code>Number</code></dt>
<dd><p>What is the <a href="http://newt.phys.unsw.edu.au/jw/notes.html">midi number</a> of this pitch?
<a href="https://en.wikipedia.org/wiki/Enharmonic">Enharmonic</a> notes will return the same
midi number.</p>
</dd>
</dl>
<a name="Pitch"></a>
## Pitch
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Pitch.name | <code>string</code> | this pitch in scientific pitch notation |


* [Pitch](#Pitch)
  * [new Pitch(sciPitch)](#new_Pitch_new)
  * [.toString()](#Pitch+toString) ⇒ <code>String</code>
  * [.sciPitch()](#Pitch+sciPitch) ⇒ <code>String</code>
  * [.letter()](#Pitch+letter) ⇒ <code>String</code>
  * [.accidental()](#Pitch+accidental) ⇒ <code>String</code>
  * [.octave()](#Pitch+octave) ⇒ <code>Number</code>
  * [.pitchClass()](#Pitch+pitchClass) ⇒ <code>String</code>
  * [.numAccidental()](#Pitch+numAccidental) ⇒ <code>Number</code>
  * [.midi()](#Pitch+midi) ⇒ <code>Number</code>

<a name="new_Pitch_new"></a>
### new Pitch(sciPitch)
Creates a new immutable Pitch.

**Throws**:

- Will throw an error if string is not a valid pitch


| Param | Type | Description |
| --- | --- | --- |
| sciPitch | <code>string</code> | a pitch in scientific pitch notation |

**Example**  
```js
var p = new Pitch('Bb3')
p.name => 'Bb3'
```
<a name="Pitch+toString"></a>
### pitch.toString() ⇒ <code>String</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>String</code> - string in scientfic pitch notation  
<a name="Pitch+sciPitch"></a>
### pitch.sciPitch() ⇒ <code>String</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>String</code> - in [scientfic pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation)
(same as Pitch.name)  
<a name="Pitch+letter"></a>
### pitch.letter() ⇒ <code>String</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>String</code> - will return 'A', 'B', 'C', 'D', 'E', 'F', or 'G'  
<a name="Pitch+accidental"></a>
### pitch.accidental() ⇒ <code>String</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>String</code> - 'b', 'bb', '#', '##' (double sharp is not 'x'),
or '', the empty string if there is no accidental.  
<a name="Pitch+octave"></a>
### pitch.octave() ⇒ <code>Number</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - the octave number (C4 is
[middle C](https://en.wikipedia.org/wiki/C_(musical_note)#Middle_C))  
<a name="Pitch+pitchClass"></a>
### pitch.pitchClass() ⇒ <code>String</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>String</code> - the [pitch class](https://en.wikipedia.org/wiki/Pitch_class),
same as [Pitch.sciPitch()](#Pitch+sciPitch) but without octave number.  
<a name="Pitch+numAccidental"></a>
### pitch.numAccidental() ⇒ <code>Number</code>
returns the number of accidentals on this letter:
positive for sharps, negative for flats.

**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - how many half steps from its letter, will be in the range [-2, 2]  
**Example**  
```js
var p = new Pitch('Abb3')
p.halfSteps() => -2
```
<a name="Pitch+midi"></a>
### pitch.midi() ⇒ <code>Number</code>
What is the [midi number](http://newt.phys.unsw.edu.au/jw/notes.html) of this pitch?

**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - the midi number for this pitch. C4 is 60.  
**Example**  
```js
toMidi('C4')    => 60
toMidi('B#3')   => 60
toMidi('Bb3')   => 58
toMidi('A#3')   => 58
```
<a name="parsePitch"></a>
## parsePitch(sciPitch) ⇒ <code>object</code> &#124; <code>false</code>
Parse a pitch string and return its properties or
false if the string is not valid

**Kind**: global function  
**Returns**: <code>object</code> &#124; <code>false</code> - False if invalid pitch string or an object
with the following properties:
- letter: string
- accidental: string
- numAccidental: number of accidentals [-2, 2], positive for sharps, negative for flats
- octave: integer
- sciPitch: string  

| Param | Type | Description |
| --- | --- | --- |
| sciPitch | <code>string</code> | a pitch in scientific pitch notation |

**Example**  
```js
parsePitch('Bb3')   => {letter: 'B', accidental: 'b', numAccidental: -1, octave: 3, sciPitch:'Bb3'}
parsePitch('Xb4')   => false
```
<a name="toMidi"></a>
## toMidi(sciPitch) ⇒ <code>Number</code>
What is the [midi number](http://newt.phys.unsw.edu.au/jw/notes.html) of this pitch?
[Enharmonic](https://en.wikipedia.org/wiki/Enharmonic) notes will return the same
midi number.

**Kind**: global function  
**Returns**: <code>Number</code> - the midi number for this pitch. C4 is 60.  
**Throws**:

- Will throw an error if string is not a valid pitch


| Param | Type | Description |
| --- | --- | --- |
| sciPitch | <code>String</code> | a pitch in scientific pitch notation. |

**Example**  
```js
toMidi('C4')    => 60
toMidi('B#3')   => 60
toMidi('Bb3')   => 58
toMidi('A#3')   => 58
```
