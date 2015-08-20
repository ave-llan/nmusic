<a name="parsePitch"></a>
## parsePitch(sciPitch) ⇒ <code>object</code> &#124; <code>false</code>
Parse a pitch string and return its properties

**Kind**: global function  
**Returns**: <code>object</code> &#124; <code>false</code> - - False if invalid pitch string or an object with the following properties:
- .letter: string
- .accidental: string
- .octave: integer
- .sciPitch: full scientific pitch with valid format  

| Param | Type | Description |
| --- | --- | --- |
| sciPitch | <code>string</code> | a pitch in scientific pitch notation |

**Example**  
```js
parsePitch('Bb3')   => {letter: 'B', accidental: 'b', octave: 3, sciPitch:'Bb3'} 
```
