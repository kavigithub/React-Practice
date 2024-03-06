text to speech, screen reader
disabilities different (like visibility, deaf: audio infomation)
Proper heading structure(H1, h2, h3, h4)...it helps to understand to formate of info
Link text is very important (like not us read more, click me);
we use proper discription like sing up for registation
add alt attribute in image element addd proper information about image
web focus is cleary visible like button focus, link focus
Add caption and title to videos to accessible
use tab keys to navigate
Shift + tabs to go backwords
focus on box focus ring
by default keyboard built in usage: button and link, while others might you add
screen reader
Use Aria : Identify a required tool with aria-required property.
Using screen reader (is also web accessibility)
Avoid using role=presentation if the content has no semantic meaning.
Make sure that all interactive elements have labels or instructions near them.
If an element can be expanded/collapsed , provide a way to do so via aria-  
Eslint-plugin-jsx-a11y eslint plugin to add accessibility check directly in you JSX

Web Accessibility 4 principle
1. Perceivable : Open , clearn recongnizable, visible (all user can undersand)
    -Text Alternatives: provide image or graphical knows use (alt attribute on image element or we can add aria-labelledby="description-label" and then you create same id element
    eg. <img src="dianosoure.png" aria-labelledby="diano-label" />
    <p  id="diano-label">This is dianosourse picture</p>
    or
    <figure>
    <img src="diansource.jpg"  alt="This is dianosourse picture"   aria-labelledby="img-diano"/>
    <figcaption id="img-diano">Diasource picture description</figcaption>
    </figure>
    - Time base media
        - Audio , Podcast, video, audio video forward...zoom,adjust vaolume,  backword, 
    - Adapdable : any formate(mobile, tab, rwd)   
    - Form should easily show the error and success msg
    2. Operable : User should be able to interact with app / website without keyboards, mouse, touch etc. User must be able to operate the interface
       Use arrow key to move through fields, enter to submit forms, space bar to select radio buttons, checkboxes
       Use arrow key to navigate through web page
       Provide label for each input field
       eg :Input type = "text", "email","
3. Understandable:   Content should be readable and self descriptive
                      Use semantic tag (eg: nav, article, main ...)
4. Robust : site should work across various devices, screen readers, assistive technologies
            Responsive design.
4. Robust  : All features should work consistently regardless of user's abilities.

Tools used to test web accessibility
Wave Accessibility Tool
Lighthouse Audit (Google Chrome Dev Tools)

Keyboard Trap:
    When a user interact with a webpage by pressing the Tab key, they move their focus from one control  to another. If there are too many controls without When a user cannot navigate outside of an element using
When a website only works with mouse, but not with keyboard, it called Keyboard trap. 
textarea and media are main culprints for this.
To avoid keyboard trap, we need to make sure that users can use keyboard to operate our webpage.
    We can set tabindex attribute on every interactive element


Tabindex attribute:
- If a element does not have a tabindex attribute, it will be ignored by the browser .
- If a element has a tabindex attribute, it will get focus when navigated via the        Tab key.
- The value of tabindex determines the order     of which elements receive focus when the Tab     key is pressed.
 - If two elements have the same tabindex value, their order is determined by the order they appear in the markup.

 Flasing and seizures:
    Some color combinations may cause flasing effect and seizure in some people.
     So we should avoid using colors like red, white, yellow etc. as background.


Web Assibility
It helps to accessibility of web to disabilities people.
eg..alert popup, modles, seelct from opetions, popup
Don't over use it, you should only use WAI-ARIA when you need to
ALways try to use semantic elements

Features of ARIA (always use semantic elements)
Roles, Properties, States, name
// ✅ Good: using aria-labelledby when text
// is visible on screen
<nav aria-labelledby="nav-title">
  <h2 id='nav-title'>Related Content</h2>
  <ul>
    ...List on links here...
  </ul>
</nav>

name: A label and identifier for element. It is used by screen reader to announce an element
aria-label: It is used to override element name and replacing it with name given by you.
<button aria-label="close"> X </button>  // This button will be announced as close instead of  saying button
Not
<button> X </button>   // This button will be announced as  button instead of saying close

aria-labelledby: It is used to override the element name and replace it with the content of another element. ari-labelledby is set to the id of another element.
<nav aria-labelledby="nav-title">
  <h2 id='nav-title'>Related Content</h2>
  <ul>
    ...List on links here...
  </ul>
</nav>

aria-labelledby: Identifies the element that labels the object. Useful when one or more IDS refer to the same labeled
aria-labelledby: Identifies the element that provides a verbose description of the object.
aria-describedby: Identifies the element that provides a brief definition description of the object.
aria-required: Indicates that user input is required before a form can be submitted.
aria-invalid: Indicates that the value
aria-hidden:  If true, content is not visible or available to assistive technologies e.g., screen readers. expand and collpase functionality
