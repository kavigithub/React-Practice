# When we handled <input /> <select /> <textarea /> The built-in browser component, And they become uncontrolled when trying to manage data on it.

# In a controlled component react, state handles all the form data, whereas, in an uncontrolled component, the HTML form element data is managed by only the DOM by using useRef.


# In controlled component state getting refresh but in uncontrolled component state in not refresh as we are getting the value from DOM or we Using react 'ref' we can hold the instances of the HTML element in their .current property. Later using .current, we can get the value of input elements using the .value property.

# If you want to control this checkbox , input, or radio with a state variable, specify an onChange handler this besically controlled on these uncontrolled form elements.

# It is a must to use react state in a controlled component to handle the dynamic form data. It is optional for the uncontrolled component to have a state, but it must use react Ref.

# Hence the value of the input field is controlled using the react state. The single source of truth for the input element is React state. Therefore, the above component is a controlled component.

# To render a controlled input, pass the value prop to it (or checked for checkboxes and radios). React will force the input to always have the value you passed. Usually, you would do this by declaring a state variable:

# Benefit
# Controlled component react provides validation benefits on every keystroke of the user.
. You can perform validation on the input data only after the form is submitted in the uncontrolled components in react.

# An input like <input /> is uncontrolled. Even if you pass an initial value like <input defaultValue="Initial text" />, your JSX only specifies the initial value. 
To control what happens when the input changes, specify a handler function onInput as in <input onInput={this.handleChange} />. The
handler will be called every time the user types something into the input. */
eg
// ✅ Good: controlled input with onChange
<input value={something} onChange={e => setSomething(e.target.value)} />
// ✅ Good: controlled checkbox with onChange
<input type="checkbox" checked={something} onChange={e => setSomething(e.target.checked)} />
// ✅ Good: readonly controlled input without on change
<input type="checkbox" checked={something} readOnly={true} />


# In React, Controlled components refer to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves.

# React supports controlled and uncontrolled components in react, which are used to render form elements of the HTML document.They differ in the way they access the form data from the HTML document.



Refrence Link is
<https://www.scaler.com/topics/react/controlled-and-uncontrolled-components-in-react/>
<https://www.altogic.com/blog/difference-between-controlled-and-uncontrolled-component />
<https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable>

