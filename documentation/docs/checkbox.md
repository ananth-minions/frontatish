---
id: checkbox
title: CheckBox
sidebar_label: CheckBox
---

Checkbox component makes easy to turn and option on and off,which can be usefull to make ui for giving user an option to choose on something. On the lower level it uses [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)

<div className="image-horizontal-preview">
    <figure>
      <img src="/frontatish/img/checkbox_1.png" alt="checkbox" />
    </figure>
    <figure>
      <img src="/frontatish/img/checkbox_2.png" alt="checkbox" />
    </figure>
</div>

## Usage

```jsx
// react base imports

import { Checkbox } from 'frontatish';

<CheckBox isDark={true} checked={true} containerStyle={{ marginRight: 20 }} />;
```

## Props

### checkColor

Color of check icon inside the checkbox,you can pass whatever color you like and control the overall checkbox style by using [containerStyle](#containerstyle)

|           Type            |        Default         |       Required        |
| :-----------------------: | :--------------------: | :-------------------: |
| string <img width="500"/> | None<img width="500"/> | No <img width="500"/> |

### checked

checked will be a state variable which hold the state of the checkbox,on which checkbox will decide when to show check icon and when to not

|            Type            |         Default          |       Required        |
| :------------------------: | :----------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

### size

you can control the size of the checkbox and the icon inside by using this props

|                   Type                    |         Default         |       Required        |
| :---------------------------------------: | :---------------------: | :-------------------: |
| enum('sm', 'md', 'lg') <img width="500"/> | 'sm' <img width="500"/> | No <img width="500"/> |

### disabled

disabled make sure if its true then user won't be able to click it and the onPress would not get called

|            Type            |         Default          |       Required        |
| :------------------------: | :----------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

### containerStyle

A react native style object which gives flexibility to alter the styles of checkbox container

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | none <img width="500"/> | No <img width="500"/> |
