# Redux Decompostion

Projets

1.  Shopping Cart
2.  Todos
3.

# 1 Créer des composants normaux

# 2 Créer des constantes d'action

Des constantes ES6 exportées

```
    export const SIMPLE_ADD_ACTION = "SIMPLE_ADD_ACTION";
    export const SIMPLE_REMOVE_ACTION = "SIMPLE_REMOVE_ACTION";
```

# 3 Créer des actions

Des Arrow Fonction ES6 exportées
Elles servents à dispatcher des actions dans les reducers

```
   export const SimpleRemoveAction = () => dispatch => {
    dispatch({ type: SIMPLE_REMOVE_ACTION, payload: 2 });
   };

    export const SimpleAddAction = () => dispatch => {
        dispatch({ type: SIMPLE_ADD_ACTION, payload: 1 });
    };
```

# 4 Créer des reducers

Des Arrow Fonction ES6 exportées
Elles servents à traiter selon les actions dispatchées le nouveau state à partir du state précédent

Reducers = reduce(statePrecedent, action)

```
export const SimpleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIMPLE_RESET:
      return { ...state, ...{ nb: 0 } };
    case SIMPLE_ADD_ACTION:
      return { ...state, ...{ nb: state.nb + action.payload } };
    case SIMPLE_REMOVE_ACTION:
      return { ...state, ...{ nb: state.nb - action.payload } };
    default:
      return state;
  }
};
```

# 5 Créer des composants containers

2 fonctions pour connecter un composant container à redux:

```
    const mapStateToProps = (state) => {}
    const mapStateToProps = (state, ownProps) => {}
```

```
    class ListContainer extends Component {
        ...
    }

    ...

    // Qu'est ce qu'on extrait du state du store, disponible en props pour notre Container
    const mapStateToProps = state => ({
        nb: state.SimpleReducer.nb,
        visible: state.VisibleReducer.visible
    });

    // Qu'est ce qu'on met a disposition en terme d'action dans les props pour notre Container
    const mapDispatchToProps = dispatch => ({
        SimpleAddAction: () => dispatch(SimpleAddAction()),
        SimpleRemoveAction: () => dispatch(SimpleRemoveAction()),
        SimpleResetAction: () => dispatch(SimpleResetAction())
    });

    // on connecte le tous avec notre Container
    export default connect(
        mapStateToProps, // props
        mapDispatchToProps // actions in props
    )(ListContainer);
```

# 6 Appeler les composants normaux dans les containers

```

```

# 7 Bonus: Créer des Middlewares

```

```
