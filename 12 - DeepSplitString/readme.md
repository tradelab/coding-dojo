## Kata: Deep Split String

### Description:

Le but de ce kata est de découper des chaines de caractères en fonction du caractère `space`: ` `
Une fois découpé, les "mots" doivent être regroupés et former un object JS en fonction de leur position.

**Input**
```javascript
const items = ['FR APNX Display', 'FR APNX TrueView', 'FR DV360 Display'];
```
**Output**
```javascript
const nestedItems = [
  {
    name: 'FR',
    children: [
      {
        name: 'APNX',
        children: [
          {
            name: 'Display',
          },
          {
            name: 'TrueView'
          }
        ]
      },
      {
        name: 'DV360',
        children: [
          {
            name: 'Display'
          }
        ]
      }
    ]
  }
]
```

**Sample**
