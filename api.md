## Classes
<dl>
<dt><a href="#Key">Key</a></dt>
<dd></dd>
<dt><a href="#Pitch">Pitch</a></dt>
<dd></dd>
</dl>
## Functions
<dl>
<dt><a href="#modeIntervals">modeIntervals(modeName)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>returns the intervals that define the scale degrees of a given mode</p>
</dd>
<dt><a href="#scaleSet">scaleSet(tonic, mode)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>given a pitch string and scale mode, build a pitch class scale from that pitch</p>
</dd>
<dt><a href="#scale">scale(tonic, mode)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>given a pitch string and scale mode, build a scale from that pitch</p>
</dd>
<dt><a href="#intervalQuality">intervalQuality(sciPitch1, sciPitch2)</a> ⇒ <code>String</code></dt>
<dd><p>the interval quality between two pitch strings</p>
</dd>
<dt><a href="#intervalSize">intervalSize(sciPitch1, sciPitch2)</a> ⇒ <code>Number</code></dt>
<dd><p>the generic interval size between two pitch strings, disregarding accidentals</p>
</dd>
<dt><a href="#interval">interval(sciPitch1, sciPitch2)</a> ⇒ <code>String</code></dt>
<dd><p>the interval between two pitch strings</p>
</dd>
<dt><a href="#parseInterval">parseInterval(interval)</a> ⇒ <code>Object</code> | <code>false</code></dt>
<dd><p>parses an interval string or number and return its properties in an object or
return false if the string or number is not valid</p>
</dd>
<dt><a href="#parsePitch">parsePitch(sciPitch)</a> ⇒ <code>object</code> | <code>false</code></dt>
<dd><p>parses a pitch string and return its components in an object or
false if the string is not valid</p>
</dd>
<dt><a href="#plusInterval">plusInterval(sciPitch, interval)</a> ⇒ <code>String</code> | <code>function</code></dt>
<dd><p>given pitch string plus given interval string equals new pitch string</p>
<p>Optionally, give only one parameter and get back a function with that parameter
set as the default.</p>
</dd>
<dt><a href="#semitonesBetween">semitonesBetween(sciPitch1, sciPitch2)</a> ⇒ <code>Number</code></dt>
<dd><p>the number of semitones between these two pitch strings</p>
</dd>
<dt><a href="#simplifyIntervalSize">simplifyIntervalSize(intervalSize)</a> ⇒ <code>Number</code></dt>
<dd><p>simplify compound intervals to within the range of 1-7. Works for
negative intervals as well.</p>
</dd>
<dt><a href="#toMidi">toMidi(sciPitch)</a> ⇒ <code>Number</code></dt>
<dd><p>the <a href="http://newt.phys.unsw.edu.au/jw/notes.html">midi number</a> of this pitch string</p>
</dd>
<dt><a href="#clone">clone(obj)</a> ⇒ <code>object</code> | <code>array</code></dt>
<dd><p>helper function to clone a simple object/array made up of primitives.
Will not work if the object or array contains non-primitives.</p>
</dd>
</dl>
<a name="Key"></a>
## Key
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| tonic | <code>[Pitch](#Pitch)</code> | the tonic of this scale. Although all Pitch instances have an octave number, it is not used in the Key methods. |
| modeName | <code>string</code> | a string representing the mode name. If custom mode is provided, defaults to 'custom-scale' |
| mode | <code>Array.&lt;string&gt;</code> | an array of interval strings representing the interval each scale degree is from tonic |
| scale | <code>Array.&lt;string&gt;</code> | an array of pitch class strings |


* [Key](#Key)
  * [new Key(tonic, mode)](#new_Key_new)
  * [.toString()](#Key+toString) ⇒ <code>String</code>
  * [.pitchAtDegree(degree)](#Key+pitchAtDegree) ⇒ <code>string</code>

<a name="new_Key_new"></a>
### new Key(tonic, mode)
Creates a new key. Note that most Key methods use pitch classes without reguards
to octave number.


| Param | Type | Description |
| --- | --- | --- |
| tonic | <code>[Pitch](#Pitch)</code> &#124; <code>string</code> | the [tonic](@link https://en.wikipedia.org/wiki/Tonic_(music)) of this scale. Octave number may be provided, but do not affect the Key methods. |
| mode | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | a string representing a mode name (minor, major, dorian) or an array of interval strings representing the interval each scale degree is from tonic |

<a name="Key+toString"></a>
### key.toString() ⇒ <code>String</code>
**Kind**: instance method of <code>[Key](#Key)</code>  
**Returns**: <code>String</code> - the tonic + the modeName ('Bb major')  
<a name="Key+pitchAtDegree"></a>
### key.pitchAtDegree(degree) ⇒ <code>string</code>
returns the pitch class at the requested scale degree

**Kind**: instance method of <code>[Key](#Key)</code>  
**Returns**: <code>string</code> - a pitch class string  

| Param | Type | Description |
| --- | --- | --- |
| degree | <code>number</code> | the desired scale degree of this scale (an integer > 0) |

**Example**  
```js
var a_major = new Key('A3', 'major')
a_major.scaleDegree(3)   => 'C#'
a_major.scaleDegree(10)  => 'C#'
```
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
  * [.valueOf()](#Pitch+valueOf) ⇒ <code>Number</code>
  * [.equals(that)](#Pitch+equals) ⇒ <code>Boolean</code>
  * [.isEnharmonic(that)](#Pitch+isEnharmonic) ⇒ <code>Boolean</code>
  * [.sciPitch()](#Pitch+sciPitch) ⇒ <code>String</code>
  * [.letter()](#Pitch+letter) ⇒ <code>String</code>
  * [.accidental()](#Pitch+accidental) ⇒ <code>String</code>
  * [.octave()](#Pitch+octave) ⇒ <code>Number</code>
  * [.pitchClass()](#Pitch+pitchClass) ⇒ <code>String</code>
  * [.numAccidental()](#Pitch+numAccidental) ⇒ <code>Number</code>
  * [.midi()](#Pitch+midi) ⇒ <code>Number</code>
  * [.semitonesTo(that)](#Pitch+semitonesTo) ⇒ <code>Number</code>
  * [.intervalSize(that)](#Pitch+intervalSize) ⇒ <code>Number</code>
  * [.simpleIntervalSize(that)](#Pitch+simpleIntervalSize) ⇒ <code>Number</code>
  * [.interval(that)](#Pitch+interval) ⇒ <code>String</code>
  * [.simpleInterval(that)](#Pitch+simpleInterval) ⇒ <code>String</code>
  * [.plusInterval(interval)](#Pitch+plusInterval) ⇒ <code>[Pitch](#Pitch)</code>

<a name="new_Pitch_new"></a>
### new Pitch(sciPitch)
Creates a new immutable Pitch or if given an existing Pitch, returns it.

**Throws**:

- Will throw an error if string is not a valid pitch


| Param | Type | Description |
| --- | --- | --- |
| sciPitch | <code>string</code> &#124; <code>[Pitch](#Pitch)</code> | a pitch string in scientific pitch notation or a Pitch. |

**Example**  
```js
var p = new Pitch('Bb3')
p.name               => 'Bb3'
// if you forget the 'new' keyword, the constructor will call it for you
var p2 = Pitch('C4')
p2 instanceof Pitch  => true
// if given a Pitch as its argument, the same Pitch will be returned
var p3 = Pitch(p2)
p2 === p3            => true
// this can be used to write functions which accept pitch strings or Pitches as a parameter
```
<a name="Pitch+toString"></a>
### pitch.toString() ⇒ <code>String</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>String</code> - string in scientfic pitch notation  
<a name="Pitch+valueOf"></a>
### pitch.valueOf() ⇒ <code>Number</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - the midi number of this pitch, so enharmonic notes will be equal  
**See**: [pitch.midi()](#Pitch+midi)  
<a name="Pitch+equals"></a>
### pitch.equals(that) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Boolean</code> - is this pitch spelled the same as that pitch?  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>String</code> | a Pitch or a pitch string |

<a name="Pitch+isEnharmonic"></a>
### pitch.isEnharmonic(that) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Boolean</code> - does this pitch sound identical to that pitch?  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>String</code> | a Pitch or a pitch string |

<a name="Pitch+sciPitch"></a>
### pitch.sciPitch() ⇒ <code>String</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>String</code> - in [scientfic pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation)
(same as pitch.name)  
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
same as [pitch.sciPitch()](#Pitch+sciPitch) but without octave number.  
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
<a name="Pitch+semitonesTo"></a>
### pitch.semitonesTo(that) ⇒ <code>Number</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - how many half steps are there between these pitches?  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>String</code> | a Pitch or a pitch string |

<a name="Pitch+intervalSize"></a>
### pitch.intervalSize(that) ⇒ <code>Number</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - the interval size between these pitches  
**See**: [intervalSize](#intervalSize)  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>String</code> | a Pitch or a pitch string |

<a name="Pitch+simpleIntervalSize"></a>
### pitch.simpleIntervalSize(that) ⇒ <code>Number</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - the simple interval size between these pitches in range [1,7]  
**See**: [simple](#intervalSize.simple)  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>String</code> | a Pitch or a pitch string |

<a name="Pitch+interval"></a>
### pitch.interval(that) ⇒ <code>String</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>String</code> - the interval between these pitches  
**See**: [interval](#interval)  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>String</code> | a Pitch or a pitch string |

<a name="Pitch+simpleInterval"></a>
### pitch.simpleInterval(that) ⇒ <code>String</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>String</code> - the simple interval between these pitches  
**See**: [simple](#interval.simple)  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>String</code> | a Pitch or a pitch string |

<a name="Pitch+plusInterval"></a>
### pitch.plusInterval(interval) ⇒ <code>[Pitch](#Pitch)</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>[Pitch](#Pitch)</code> - the resulting Pitch  
**See**: [plusInterval](#plusInterval)  

| Param | Type | Description |
| --- | --- | --- |
| interval | <code>String</code> &#124; <code>Number</code> | an interval string or number with or without quality. If   interval quality is not provided, accidentals on this Pitch will be ignored. |

**Example**  
```js
var pitch_C4 = new Pitch('C4')
plusInterval(pitch_C4, 10)     => Pitch: E5
plusInterval(pitch_C4, -10)    => Pitch: A2
plusInterval(pitch_C4, 'm10')  => Pitch: Eb5
plusInterval(pitch_C4, '-d7')  => Pitch: D#3
```
<a name="modeIntervals"></a>
## modeIntervals(modeName) ⇒ <code>Array.&lt;string&gt;</code>
returns the intervals that define the scale degrees of a given mode

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - an array of interval strings representing the
interval each scale degree is from tonic, always starting with 'P1' for tonic  

| Param | Type | Description |
| --- | --- | --- |
| modeName | <code>&#x27;major&#x27;</code> &#124; <code>&#x27;minor&#x27;</code> &#124; <code>&#x27;ionian&#x27;</code> &#124; <code>&#x27;dorian&#x27;</code> &#124; <code>&#x27;phrygian&#x27;</code> &#124; <code>&#x27;lydian&#x27;</code> &#124; <code>&#x27;mixolydian&#x27;</code> &#124; <code>&#x27;aeolian&#x27;</code> &#124; <code>&#x27;locrian&#x27;</code> | a mode name |

**Example**  
```js
modeIntervals('major')  => ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7']
modeIntervals('dorian') => ['P1', 'M2', 'm3', 'P4', 'P5', 'M6', 'm7']
```
<a name="scaleSet"></a>
## scaleSet(tonic, mode) ⇒ <code>Array.&lt;string&gt;</code>
given a pitch string and scale mode, build a pitch class scale from that pitch

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - an array of pitch class strings  
**See**: for a similar function which uses octave numbers, see [scale](#scale)  

| Param | Type | Description |
| --- | --- | --- |
| tonic | <code>string</code> | the [tonic](@link https://en.wikipedia.org/wiki/Tonic_(music)) of this scale. If octave number is provided, it will be ignored. |
| mode | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | a string representing a mode name (minor, major, dorian) or an array of interval strings representing the interval each scale degree is from tonic |

**Example**  
```js
scale('Eb4', 'major')
=> ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D']
```
<a name="scale"></a>
## scale(tonic, mode) ⇒ <code>Array.&lt;string&gt;</code>
given a pitch string and scale mode, build a scale from that pitch

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - an array of pitch strings  

| Param | Type | Description |
| --- | --- | --- |
| tonic | <code>string</code> | the [tonic](@link https://en.wikipedia.org/wiki/Tonic_(music)) of this scale |
| mode | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | a string representing a mode name (minor, major, dorian) or an array of interval strings representing the interval each scale degree is from tonic |

**Example**  
```js
scale('Eb4', 'major')
=> ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5']
```
<a name="intervalQuality"></a>
## intervalQuality(sciPitch1, sciPitch2) ⇒ <code>String</code>
the interval quality between two pitch strings

**Kind**: global function  
**Returns**: <code>String</code> - a character representing the interval between the two pitches:
- 'P' = perfect
- 'm' = minor
- 'M' = major
- 'd' = diminished
- 'A' = augmented  
**Throws**:

- an error if either string is not a valid pitch


| Param | Type | Description |
| --- | --- | --- |
| sciPitch1 | <code>String</code> | a pitch in scientific pitch notation. |
| sciPitch2 | <code>String</code> | a pitch in scientific pitch notation. |

**Example**  
```js
intervalQuality('C4', 'E4')    => 'M'
intervalQuality('E4', 'Eb4')   => 'm'
intervalQuality('C4', 'F4')    => 'P'
intervalQuality('C4', 'F#4')   => 'A'
intervalQuality('B3', 'Ab4')   => 'd'
```
<a name="intervalSize"></a>
## intervalSize(sciPitch1, sciPitch2) ⇒ <code>Number</code>
the generic interval size between two pitch strings, disregarding accidentals

**Kind**: global function  
**Returns**: <code>Number</code> - the absolute interval size between the two pitches. Always positive, even if
the first argument is higher than the second.  
**Throws**:

- an error if string is not a valid pitch

**See**: [simple](#intervalSize.simple) for returning the simple interval size  

| Param | Type | Description |
| --- | --- | --- |
| sciPitch1 | <code>String</code> | a pitch in scientific pitch notation. |
| sciPitch2 | <code>String</code> | a pitch in scientific pitch notation. |

**Example**  
```js
intervalSize('C4', 'E4')    => 3
intervalSize('E4', 'C4')    => 3
intervalSize('C4', 'E5')    => 10
intervalSize('C4', 'Eb5')   => 10
intervalSize('C5', 'C5')    => 1
```
<a name="intervalSize.simple"></a>
### intervalSize.simple(sciPitch1, sciPitch2) ⇒ <code>Number</code>
the generic simple interval size (1-7) between two pitch strings, disregarding accidentals

**Kind**: static method of <code>[intervalSize](#intervalSize)</code>  
**Returns**: <code>Number</code> - the simple interval size between the two pitches in range [1, 7].
Contrary to standard practice, an octave is considered compound and reduces to 1.  
**Throws**:

- an error if string is not a valid pitch


| Param | Type | Description |
| --- | --- | --- |
| sciPitch1 | <code>String</code> | a pitch in scientific pitch notation. |
| sciPitch2 | <code>String</code> | a pitch in scientific pitch notation. |

**Example**  
```js
intervalSize.simple('C4', 'E4')    => 3
intervalSize.simple('C4', 'E5')    => 3
intervalSize.simple('C1', 'E9')    => 3
```
<a name="interval"></a>
## interval(sciPitch1, sciPitch2) ⇒ <code>String</code>
the interval between two pitch strings

**Kind**: global function  
**Returns**: <code>String</code> - the interval between the two pitches  
**Throws**:

- an error if either string is not a valid pitch

**See**: [simple](#interval.simple) for returning the simple interval  

| Param | Type | Description |
| --- | --- | --- |
| sciPitch1 | <code>String</code> | a pitch in scientific pitch notation. |
| sciPitch2 | <code>String</code> | a pitch in scientific pitch notation. |

**Example**  
```js
interval('C4', 'E4')    => 'M3'
interval('E4', 'Eb4')   => 'm3'
interval('C4', 'F4')    => 'P4'
interval('C4', 'F#4')   => 'A4'
interval('B3', 'Ab4')   => 'd7'
```
<a name="interval.simple"></a>
### interval.simple(sciPitch1, sciPitch2) ⇒ <code>Number</code>
the simple interval between two pitch strings

**Kind**: static method of <code>[interval](#interval)</code>  
**Returns**: <code>Number</code> - the simple interval between the two pitches.
Contrary to standard practice, an octave is considered compound and reduces to 1 as in [simple](#intervalSize.simple)  
**Throws**:

- an error if string is not a valid pitch


| Param | Type | Description |
| --- | --- | --- |
| sciPitch1 | <code>String</code> | a pitch in scientific pitch notation. |
| sciPitch2 | <code>String</code> | a pitch in scientific pitch notation. |

**Example**  
```js
interval.simple('C4', 'E4')    => 'M3'
interval.simple('C4', 'E5')    => 'M3'
interval.simple('C1', 'E9')    => 'M3'
```
<a name="parseInterval"></a>
## parseInterval(interval) ⇒ <code>Object</code> &#124; <code>false</code>
parses an interval string or number and return its properties in an object or
return false if the string or number is not valid

**Kind**: global function  
**Returns**: <code>Object</code> &#124; <code>false</code> - False if invalid interval else an object
with the following properties:
- interval: string
- direction: number -1 or 1
- quality: string of 'm', 'M', 'P', 'd', or 'A' OR null if not given
- size: number, size of the interval, never negative
- simpleSize: number in range [1,7]
- perfectable: boolean (if false, this is an imperfect interval)
- octaves: number of octave changes. Will be >= 0.
- halfsteps: number|undefined if given quality, number of halfsteps this interval translates to  

| Param | Type | Description |
| --- | --- | --- |
| interval | <code>String</code> &#124; <code>Number</code> | an interval string with interval quality or a number representing only interval size. Both types of input may be signed ('-P5' or -5) to indicate a descending interval. |

**Example**  
```js
parseInterval('-M6')  => {interval: '-M6', direction: -1, quality: 'M', size: 6, simpleSize: 6,
                          perfectable: false, octaves: 0, halfsteps: 9}
parseInterval(12)     => {interval: '12', direction: 1, quality: null, size: 12, simpleSize: 5,
                          perfectable: true, octaves 1}
parseInterval('M5')   => false
```
<a name="parsePitch"></a>
## parsePitch(sciPitch) ⇒ <code>object</code> &#124; <code>false</code>
parses a pitch string and return its components in an object or
false if the string is not valid

**Kind**: global function  
**Returns**: <code>object</code> &#124; <code>false</code> - False if invalid pitch string or an object
with the following properties:
- letter: string
- accidental: string
- numAccidental: number of accidentals [-2, 2], positive for sharps, negative for flats
- octave: integer (if not provided, defaults to 4)
- sciPitch: string  

| Param | Type | Description |
| --- | --- | --- |
| sciPitch | <code>string</code> | a pitch in scientific pitch notation |

**Example**  
```js
parsePitch('Bb3')   => {letter: 'B', accidental: 'b', numAccidental: -1, octave: 3, sciPitch:'Bb3'}
parsePitch('Xb4')   => false
```
<a name="plusInterval"></a>
## plusInterval(sciPitch, interval) ⇒ <code>String</code> &#124; <code>function</code>
given pitch string plus given interval string equals new pitch string

Optionally, give only one parameter and get back a function with that parameter
set as the default.

**Kind**: global function  
**Returns**: <code>String</code> &#124; <code>function</code> - the resulting pitch string, or if given only one argument, returns
a function with the given argument set as a default.  
**Throws**:

- an error if pitch string or interval string is not valid


| Param | Type | Description |
| --- | --- | --- |
| sciPitch | <code>String</code> | a pitch in scientific pitch notation. |
| interval | <code>String</code> &#124; <code>Number</code> | an interval string or number with or without quality. If quality                                   is not provided, accidentals on given pitch will be ignored. |

**Example**  
```js
plusInterval('C4', 10)     => 'E5'
plusInterval('C4', -10)    => 'A2'
plusInterval('C4', 'm10')  => 'Eb5'
plusInterval('C4', '-d7')  => 'D#3'
var majorscale = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7', 'P8']
majorscale.map(plusInterval('Eb4'))
=> ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5', 'Eb5']
majorscale.map(plusInterval('Eb4')).map(plusInterval('-m9'))
=> ['D3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'C#4', 'D4']
```
<a name="semitonesBetween"></a>
## semitonesBetween(sciPitch1, sciPitch2) ⇒ <code>Number</code>
the number of semitones between these two pitch strings

**Kind**: global function  
**Returns**: <code>Number</code> - the semitones between these two pitch strings.  
**Throws**:

- Will throw an error if string is not a valid pitch


| Param | Type | Description |
| --- | --- | --- |
| sciPitch1 | <code>String</code> | a pitch in scientific pitch notation. |
| sciPitch2 | <code>String</code> | a pitch in scientific pitch notation. |

**Example**  
```js
semitonesBetween('C4', 'Db4')   => 1
semitonesBetween('C4', 'B#3')   => 0
semitonesBetween('C4', 'C5')    => 12
```
<a name="simplifyIntervalSize"></a>
## simplifyIntervalSize(intervalSize) ⇒ <code>Number</code>
simplify compound intervals to within the range of 1-7. Works for
negative intervals as well.

**Kind**: global function  
**Returns**: <code>Number</code> - the simplified interval  
**Throws**:

- Will throw an error if intervalSize is 0


| Param | Type | Description |
| --- | --- | --- |
| intervalSize | <code>Number</code> | any valid interval number |

**Example**  
```js
simplifyIntervalSize(10)   => 3
simplifyIntervalSize(-12)  => -5
simplifyIntervalSize(-4)   => -4
simplifyIntervalSize(8)    => 1
```
<a name="toMidi"></a>
## toMidi(sciPitch) ⇒ <code>Number</code>
the [midi number](http://newt.phys.unsw.edu.au/jw/notes.html) of this pitch string

**Kind**: global function  
**Returns**: <code>Number</code> - the midi number for this pitch. C4 is 60.
[Enharmonic](https://en.wikipedia.org/wiki/Enharmonic) notes will return the same
midi number.  
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
<a name="clone"></a>
## clone(obj) ⇒ <code>object</code> &#124; <code>array</code>
helper function to clone a simple object/array made up of primitives.
Will not work if the object or array contains non-primitives.

**Kind**: global function  
**Returns**: <code>object</code> &#124; <code>array</code> - a new clone of the provided object or array  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> &#124; <code>array</code> | an object array made up only of primitives |

