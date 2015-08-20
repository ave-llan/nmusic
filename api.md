## Classes
<dl>
<dt><a href="#Pitch">Pitch</a></dt>
<dd></dd>
</dl>
## Functions
<dl>
<dt><a href="#parsePitch">parsePitch(sciPitch)</a> ⇒ <code>object</code> | <code>false</code></dt>
<dd><p>Parse a pitch string and return its properties</p>
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
  * [.halfSteps()](#Pitch+halfSteps) ⇒ <code>Number</code>

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
<a name="Pitch+halfSteps"></a>
### pitch.halfSteps() ⇒ <code>Number</code>
returns the number of accidentals on this letter:
positive for sharps, negative for flats.

**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - how many half steps from its letter  
**Example**  
```js
var p = new Pitch('Abb3')
p.halfSteps() => -2
```
<a name="parsePitch"></a>
## parsePitch(sciPitch) ⇒ <code>object</code> &#124; <code>false</code>
Parse a pitch string and return its properties

**Kind**: global function  
**Returns**: <code>object</code> &#124; <code>false</code> - False if invalid pitch string or an object with the following properties:
- letter: string
- accidental: string
- octave: integer
- sciPitch: string  

| Param | Type | Description |
| --- | --- | --- |
| sciPitch | <code>string</code> | a pitch in scientific pitch notation |

**Example**  
```js
parsePitch('Bb3')   => {letter: 'B', accidental: 'b', octave: 3, sciPitch:'Bb3'} 
```
