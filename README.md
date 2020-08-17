# Regular Expressions

<b>Notes:</b>
<br/>

Simple Patterns:
<pre>
/rahul/  - matches the first occuring string ‘rahul’, case-sensitive
/rahul/g - matches all instances of ‘rahul’
/rahul/i  - this is to make it case insensitive

g - global
i - case insensitive
</pre>

Character sets:
<pre>
These are used to match different characters in a single position

/[rab1]rahul/ - matches ‘rrahul’, ‘arahul’, ‘brahul’,  ‘1rahul’
/[^rab1]rahul/ - matches everything except r,a,b,1 as first character followed by ‘rahul’
</pre>

Range:
<pre>
/[a-z]/ - matches an occurrence of all letters from a to z
/[a-z]/i  or /[a-zA-Z]/ - matches an occurrence of all alphabets lower or upper case
/[0-9]/ matches an occurrence of all digits
</pre>

Repeating characters:
<pre>
/[0-9]/+ matches any string with 1 or more numbers in sequence
/[0-9]{9}/ matches  any string with 9 digits placed next to each other
/[0-9]{5,8}/ matches  any string with 5 to 8 digits placed next to each other
/[0-9]{5,}/ matches  any string with at least 5 digits placed next to each other
</pre>

Meta characters:
<pre>
\d digits - same as /[0-9]/
\w any word character(a-z, A-Z, 0-9, _)
\s whitespace character(space and tab)
\t tab only
</pre>

Special characters:
<pre>
+ one or more quantifier
? Zero or one quantifier
* Zero or more quantifier
. Any character whatsoever(except new line)
\ escape character(used to match any special character by prefixing it with \)
[] character set
[^] negate symbol in character set
</pre>

Starting and ending patterns
<pre>
/^[a-z]{5}$/ matches only if the string has 5 letter word exactly

Alternate characters:
() - used to evaluate sub regex separately

p|tyre matches ‘p’ or ‘tyre’
(p|t)yre matches ‘pyre’ or ‘tyre’
</pre>
