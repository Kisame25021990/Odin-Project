## Listes

Il existe quatre types de données de collection en Python :

- **Liste** : une collection ordonnée et modifiable. Accepte les doublons.
- **Tuple** : une collection ordonnée et non modifiable (immuable). Accepte les doublons.
- **Ensemble (Set)** : une collection non ordonnée, non indexée et non modifiable, mais on peut y ajouter de nouveaux éléments. Les doublons ne sont pas autorisés.
- **Dictionnaire (Dictionary)** : une collection non ordonnée, modifiable et indexée. Pas de doublons.

Une liste est une collection de différents types de données, ordonnée et modifiable (mutable). Une liste peut être vide ou contenir des éléments de différents types.

### Comment créer une liste

En Python, on peut créer une liste de deux façons :

- En utilisant la fonction intégrée `list()`

```py
# syntax
lst = list()
```

```py
empty_list = list() # this is an empty list, no item in the list
print(len(empty_list)) # 0
```

- En utilisant les crochets, []

```py
# syntax
lst = []
```

```py
empty_list = [] # this is an empty list, no item in the list
print(len(empty_list)) # 0
```

Listes avec valeurs initiales. On utilise _len()_ pour connaître la longueur d'une liste.

```py
fruits = ['banana', 'orange', 'mango', 'lemon']                     # list of fruits
vegetables = ['Tomato', 'Potato', 'Cabbage','Onion', 'Carrot']      # list of vegetables
animal_products = ['milk', 'meat', 'butter', 'yoghurt']             # list of animal products
web_techs = ['HTML', 'CSS', 'JS', 'React','Redux', 'Node', 'MongDB'] # list of web technologies
countries = ['Finland', 'Estonia', 'Denmark', 'Sweden', 'Norway'] 

# Print the lists and its length
print('Fruits:', fruits)
print('Number of fruits:', len(fruits))
print('Vegetables:', vegetables)
print('Number of vegetables:', len(vegetables))
print('Animal products:',animal_products)
print('Number of animal products:', len(animal_products))
print('Web technologies:', web_techs)
print('Number of web technologies:', len(web_techs))
print('Countries:', countries)
print('Number of countries:', len(countries))
```

```sh
output
Fruits: ['banana', 'orange', 'mango', 'lemon']
Number of fruits: 4
Vegetables: ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
Number of vegetables: 5
Animal products: ['milk', 'meat', 'butter', 'yoghurt']
Number of animal products: 4
Web technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
Number of web technologies: 7
Countries: ['Finland', 'Estonia', 'Denmark', 'Sweden', 'Norway']
Number of countries: 5
```

- Les listes peuvent contenir des éléments de différents types

```py
 lst = ['Asabeneh', 250, True, {'country':'Finland', 'city':'Helsinki'}] # list containing different data types
```

### Accéder aux éléments d'une liste par indice positif

On accède à chaque élément d'une liste par son indice. L'indice d'une liste commence à 0. L'image ci-dessous montre clairement où l'indice commence.

![Indice de liste](../assets/images/list_index.png)

```py
fruits = ['banana', 'orange', 'mango', 'lemon']
first_fruit = fruits[0] # we are accessing the first item using its index
print(first_fruit)      # banana
second_fruit = fruits[1]
print(second_fruit)     # orange
last_fruit = fruits[3]
print(last_fruit) # lemon
# Last index
last_index = len(fruits) - 1
last_fruit = fruits[last_index]
```

### Accéder aux éléments d'une liste par indice négatif

L'indice négatif signifie que l'on commence par la fin : -1 correspond au dernier élément, -2 à l'avant-dernier, etc.

![Indice négatif de liste](../assets/images/list_negative_indexing.png)

```py
fruits = ['banana', 'orange', 'mango', 'lemon']
first_fruit = fruits[-4]
last_fruit = fruits[-1]
second_last = fruits[-2]
print(first_fruit)      # banana
print(last_fruit)       # lemon
print(second_last)      # mango
```

### Dépaquetage d'éléments d'une liste

```py
lst = ['item1','item2','item3', 'item4', 'item5']
first_item, second_item, third_item, *rest = lst
print(first_item)     # item1
print(second_item)    # item2
print(third_item)     # item3
print(rest)           # ['item4', 'item5']

```

```py
# First Example
fruits = ['banana', 'orange', 'mango', 'lemon','lime','apple']
first_fruit, second_fruit, third_fruit, *rest = fruits 
print(first_fruit)     # banana
print(second_fruit)    # orange
print(third_fruit)     # mango
print(rest)           # ['lemon','lime','apple']
# Second Example about unpacking list
first, second, third,*rest, tenth = [1,2,3,4,5,6,7,8,9,10]
print(first)          # 1
print(second)         # 2
print(third)          # 3
print(rest)           # [4,5,6,7,8,9]
print(tenth)          # 10
# Third Example about unpacking list
countries = ['Germany', 'France','Belgium','Sweden','Denmark','Finland','Norway','Iceland','Estonia']
gr, fr, bg, sw, *scandic, es = countries
print(gr) 
print(fr)
print(bg)
print(sw)
print(scandic)
print(es)
```

### Découper des éléments d'une liste

- **Indice positif** : on peut spécifier une plage d'indices positifs en indiquant le début, la fin et le pas. La valeur renvoyée est une nouvelle liste (valeurs par défaut : début = 0, fin = len(lst) - 1, pas = 1).

```py
fruits = ['banana', 'orange', 'mango', 'lemon']
all_fruits = fruits[0:4] # it returns all the fruits
# this will also give the same result as the one above
all_fruits = fruits[0:] # if we don't set where to stop it takes all the rest
orange_and_mango = fruits[1:3] # it does not include the first index
orange_mango_lemon = fruits[1:]
orange_and_lemon = fruits[::2] # here we used a 3rd argument, step. It will take every 2cnd item - ['banana', 'mango']
```

- **Indice négatif** : on peut spécifier une plage d'indices négatifs.

```py
fruits = ['banana', 'orange', 'mango', 'lemon']
all_fruits = fruits[-4:] # it returns all the fruits
orange_and_mango = fruits[-3:-1] # it does not include the last index,['orange', 'mango']
orange_mango_lemon = fruits[-3:] # this will give starting from -3 to the end,['orange', 'mango', 'lemon']
reverse_fruits = fruits[::-1] # a negative step will take the list in reverse order,['lemon', 'mango', 'orange', 'banana']
```

### Modifier une liste

Une liste est une collection ordonnée d'éléments modifiable (mutable). Modifions la liste de fruits.

```py
fruits = ['banana', 'orange', 'mango', 'lemon']
fruits[0] = 'avocado'
print(fruits)       #  ['avocado', 'orange', 'mango', 'lemon']
fruits[1] = 'apple'
print(fruits)       #  ['avocado', 'apple', 'mango', 'lemon']
last_index = len(fruits) - 1
fruits[last_index] = 'lime'
print(fruits)        #  ['avocado', 'apple', 'mango', 'lime']
```

### Vérifier la présence d'un élément

On vérifie si un élément est membre d'une liste avec l'opérateur *in*.

```py
fruits = ['banana', 'orange', 'mango', 'lemon']
does_exist = 'banana' in fruits
print(does_exist)  # True
does_exist = 'lime' in fruits
print(does_exist)  # False
```

### Ajouter des éléments à une liste

Pour ajouter un élément à la fin d'une liste existante, on utilise la méthode *append()*.

```py
# syntax
lst = list()
lst.append(item)
```

```py
fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.append('apple')
print(fruits)           # ['banana', 'orange', 'mango', 'lemon', 'apple']
fruits.append('lime')   # ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']
print(fruits)
```

### Insérer des éléments dans une liste

On peut utiliser la méthode *insert()* pour insérer un élément à un indice précis dans une liste. Les autres éléments sont décalés vers la droite. La méthode *insert()* prend deux arguments : l'indice et l'élément à insérer.

```py
# syntax
lst = ['item1', 'item2']
lst.insert(index, item)
```

```py
fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.insert(2, 'apple') # insert apple between orange and mango
print(fruits)           # ['banana', 'orange', 'apple', 'mango', 'lemon']
fruits.insert(3, 'lime')   # ['banana', 'orange', 'apple', 'lime', 'mango', 'lemon']
print(fruits)
```

### Supprimer des éléments d'une liste

La méthode `remove()` supprime un élément spécifié de la liste.

```py
# syntax
lst = ['item1', 'item2']
lst.remove(item)
```

```py
fruits = ['banana', 'orange', 'mango', 'lemon', 'banana']
fruits.remove('banana')
print(fruits)  # ['orange', 'mango', 'lemon', 'banana'] - this method removes the first occurrence of the item in the list
fruits.remove('lemon')
print(fruits)  # ['orange', 'mango', 'banana']
```

### Supprimer avec Pop

La méthode *pop()* supprime l'élément à l'indice spécifié (ou le dernier élément si aucun indice n'est donné).

```py
# syntax
lst = ['item1', 'item2']
lst.pop()       # last item
lst.pop(index)
```

```py
fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.pop()
print(fruits)       # ['banana', 'orange', 'mango']

fruits.pop(0)
print(fruits)       # ['orange', 'mango']
```

### Supprimer avec Del

Le mot-clé *del* supprime l'élément à l'indice spécifié et peut aussi supprimer une plage d'éléments. Il peut aussi supprimer complètement la liste.

```py
# syntax
lst = ['item1', 'item2']
del lst[index] # only a single item
del lst        # to delete the list completely
```

```py
fruits = ['banana', 'orange', 'mango', 'lemon', 'kiwi', 'lime']
del fruits[0]
print(fruits)       # ['orange', 'mango', 'lemon', 'kiwi', 'lime']
del fruits[1]
print(fruits)       # ['orange', 'lemon', 'kiwi', 'lime']
del fruits[1:3]     # this deletes items between given indexes, so it does not delete the item with index 3!
print(fruits)       # ['orange', 'lime']
del fruits
print(fruits)       # This should give: NameError: name 'fruits' is not defined
```

### Vider une liste

La méthode *clear()* vide la liste.

```py
# syntax
lst = ['item1', 'item2']
lst.clear()
```

```py
fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.clear()
print(fruits)       # []
```

### Copier une liste

On peut copier une liste en la réaffectant à une nouvelle variable : `list2 = list1`. Mais `list2` est alors une référence de `list1` : toute modification dans `list2` modifie aussi `list1` d'origine. Pour éviter cela, on utilise _copy()_.

```py
# syntax
lst = ['item1', 'item2']
lst_copy = lst.copy()
```

```py
fruits = ['banana', 'orange', 'mango', 'lemon']
fruits_copy = fruits.copy()
print(fruits_copy)       # ['banana', 'orange', 'mango', 'lemon']
```

### Concaténer des listes

Il y a plusieurs façons de joindre (concaténer) deux listes ou plus en Python.

- **Opérateur +**

```py
# syntax
list3 = list1 + list2
```

```py
positive_numbers = [1, 2, 3, 4, 5]
zero = [0]
negative_numbers = [-5,-4,-3,-2,-1]
integers = negative_numbers + zero + positive_numbers
print(integers) # [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
fruits = ['banana', 'orange', 'mango', 'lemon']
vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
fruits_and_vegetables = fruits + vegetables
print(fruits_and_vegetables ) # ['banana', 'orange', 'mango', 'lemon', 'Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
```

- **Concaténation avec `extend()`**
  La méthode *extend()* permet d'ajouter une liste à une autre.

```py
# syntax
list1 = ['item1', 'item2']
list2 = ['item3', 'item4', 'item5']
list1.extend(list2) # ['item1', 'item2', 'item3', 'item4', 'item5']
```

```py
num1 = [0, 1, 2, 3]
num2= [4, 5, 6]
num1.extend(num2)
print('Numbers:', num1) # Numbers: [0, 1, 2, 3, 4, 5, 6]
negative_numbers = [-5,-4,-3,-2,-1]
positive_numbers = [1, 2, 3,4,5]
zero = [0]

negative_numbers.extend(zero)
negative_numbers.extend(positive_numbers)
print('Integers:', negative_numbers) # Integers: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
fruits = ['banana', 'orange', 'mango', 'lemon']
vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
fruits.extend(vegetables)
print('Fruits and vegetables:', fruits ) # Fruits and vegetables: ['banana', 'orange', 'mango', 'lemon', 'Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
```

### Compter les occurrences

La méthode *count()* renvoie le nombre de fois qu'un élément apparaît dans une liste.

```py
# syntax
lst = ['item1', 'item2']
lst.count(item)
```

```py
fruits = ['banana', 'orange', 'mango', 'lemon']
print(fruits.count('orange'))   # 1
ages = [22, 19, 24, 25, 26, 24, 25, 24]
print(ages.count(24))           # 3
```

### Trouver l'indice d'un élément

La méthode *index()* renvoie l'indice d'un élément dans la liste.

```py
# syntax
lst = ['item1', 'item2']
lst.index(item)
```

```py
fruits = ['banana', 'orange', 'mango', 'lemon']
print(fruits.index('orange'))   # 1
ages = [22, 19, 24, 25, 26, 24, 25, 24]
print(ages.index(24))           # 2, the first occurrence
```

### Inverser une liste

La méthode *reverse()* inverse l'ordre d'une liste.

```py
# syntax
lst = ['item1', 'item2']
lst.reverse()

```

```py
fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.reverse()
print(fruits) # ['lemon', 'mango', 'orange', 'banana']
ages = [22, 19, 24, 25, 26, 24, 25, 24]
ages.reverse()
print(ages) # [24, 25, 24, 26, 25, 24, 19, 22]
```

### Trier une liste

Pour trier une liste, on peut utiliser la méthode _sort()_ ou la fonction intégrée _sorted()_. La méthode _sort()_ réordonne les éléments de la liste dans l'ordre croissant et modifie la liste d'origine. Si l'argument reverse de _sort()_ est true, la liste est triée dans l'ordre décroissant.

- `sort()` : modifie la liste d'origine

  ```py
  # syntaxe
  lst = ['item1', 'item2']
  lst.sort()                # croissant
  lst.sort(reverse=True)    # décroissant
  ```

  **Exemple :**

  ```py
  fruits = ['banana', 'orange', 'mango', 'lemon']
  fruits.sort()
  print(fruits)             # tri alphabétique, ['banana', 'lemon', 'mango', 'orange']
  fruits.sort(reverse=True)
  print(fruits) # ['orange', 'mango', 'lemon', 'banana']
  ages = [22, 19, 24, 25, 26, 24, 25, 24]
  ages.sort()
  print(ages) #  [19, 22, 24, 24, 24, 25, 25, 26]
 
  ages.sort(reverse=True)
  print(ages) #  [26, 25, 25, 24, 24, 24, 22, 19]
  ```

  `sorted()` : renvoie la liste triée sans modifier la liste d'origine.
  **Exemple :**

  ```py
  fruits = ['banana', 'orange', 'mango', 'lemon']
  print(sorted(fruits))   # ['banana', 'lemon', 'mango', 'orange']
  # Ordre inverse
  fruits = ['banana', 'orange', 'mango', 'lemon']
  fruits = sorted(fruits,reverse=True)
  print(fruits)     # ['orange', 'mango', 'lemon', 'banana']
  ```

🌕 Vous êtes appliqué et vous avez déjà accompli beaucoup de choses. Vous venez de terminer le défi du Jour 5 et vous êtes cinq pas de plus sur la voie de la grandeur. Faites maintenant quelques exercices pour votre cerveau et vos muscles.

## 💻 Exercices : Jour 5

### Exercices : Niveau 1

1. Déclarez une liste vide.
2. Déclarez une liste avec plus de 5 éléments.
3. Trouvez la longueur de votre liste.
4. Obtenez le premier élément, l'élément du milieu et le dernier élément de la liste.
5. Déclarez une liste appelée `mixed_data_types` contenant (votre nom, âge, taille, situation matrimoniale, adresse).
6. Déclarez une variable liste nommée `it_companies` et assignez-lui les valeurs initiales Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon.
7. Affichez la liste en utilisant _print()_.
8. Affichez le nombre d'entreprises dans la liste.
9. Affichez la première, celle du milieu et la dernière entreprise.
10. Affichez la liste après avoir modifié l'une des entreprises.
11. Ajoutez une entreprise IT à `it_companies`.
12. Insérez une entreprise IT au milieu de la liste.
13. Changez l'un des noms de `it_companies` en majuscules (IBM exclu !).
14. Joignez les `it_companies` avec une chaîne `'#;&nbsp; '`.
15. Vérifiez si une certaine entreprise existe dans la liste `it_companies`.
16. Triez la liste avec la méthode `sort()`.
17. Inversez la liste dans l'ordre décroissant avec la méthode `reverse()`.
18. Découpez les 3 premières entreprises de la liste.
19. Découpez les 3 dernières entreprises de la liste.
20. Découpez l'entreprise du milieu (ou les entreprises du milieu) de la liste.
21. Supprimez la première entreprise IT de la liste.
22. Supprimez l'entreprise du milieu (ou les entreprises du milieu) de la liste.
23. Supprimez la dernière entreprise IT de la liste.
24. Supprimez toutes les entreprises IT de la liste.
25. Détruisez la liste des entreprises IT.
26. Joignez les listes suivantes :

    ```py
    front_end = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    back_end = ['Node','Express', 'MongoDB']
    ```

27. Après avoir joint les listes à la question 26, copiez la liste jointe et assignez-la à une variable `full_stack`, puis insérez Python et SQL après Redux.

### Exercices : Niveau 2

1. Voici une liste de 10 âges d'étudiants :

```sh
ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
```

- Triez la liste et trouvez l'âge minimum et maximum.
- Ajoutez à nouveau l'âge minimum et l'âge maximum à la liste.
- Trouvez l'âge médian (un élément du milieu ou deux éléments du milieu divisés par deux).
- Trouvez l'âge moyen (somme de tous les éléments divisée par leur nombre).
- Trouvez l'étendue des âges (max moins min).
- Comparez la valeur de (min - moyenne) et (max - moyenne), en utilisant _abs()_.

2. Trouvez le(s) pays du milieu dans la [liste des pays](https://github.com/Asabeneh/30-Days-Of-Python/tree/master/data/countries.py).
3. Divisez la liste des pays en deux listes égales ; si le nombre est impair, un pays de plus pour la première moitié.
4. `['China', 'Russia', 'USA', 'Finland', 'Sweden', 'Norway', 'Denmark']`. Dépaquetez les trois premiers pays et le reste comme pays scandinaves.

🎉 FÉLICITATIONS ! 🎉
