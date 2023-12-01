# Switches

> On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label. Switches take on the same visual properties of the radio button.

- Module **@rmwc/switch**
- Import styles:
  - Using CSS Loader
    - import **'@rmwc/switch/styles';**
  - Or include stylesheets
    - **'@material/switch/dist/mdc.switch.css'**;
    - **'@material/form-field/dist/mdc.form-field.css'**;
    - **'@material/ripple/dist/mdc.ripple.css'**;
- MDC Docs: [https://material.io/develop/web/components/input-controls/switches/](https://material.io/develop/web/components/input-controls/switches/)

Switches are identical in function to the Checkbox component, they just present a different UI / UX paradigm.

Uncontrolled

```js

<Switch defaultChecked label\="Pizza" />


```

Controlled

```js

function Example() {

  const \[checked, setChecked\] \= React.useState(false);

  return (

    <Switch

      checked\={checked}

      onClick\={(evt) \=> setChecked((c) \=> !c)}

      label\="Cookies"

    />

  );

}


```

Label as Child

```js

<Switch\>Icecream</Switch\>


```

Disabled

```js

<\>

  <Switch disabled label\="Disabled" />

  <Switch disabled defaultChecked label\="Disabled" />

</\>


```

## Switch