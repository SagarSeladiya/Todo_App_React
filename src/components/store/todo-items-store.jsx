import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext([]);

const AllItemsReducer = (currentAllItems, action) => {
  let newAllItems = currentAllItems;
  if (action.type === "NEW_ITEM") {
    newAllItems = [
      ...currentAllItems,
      { name: action.payload.itemName, date: action.payload.dueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newAllItems = currentAllItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newAllItems;
};

const AllItemsContextProvider = ({ children }) => {
  const [allItems, dispatchAllItems] = useReducer(AllItemsReducer, []);

  const addNewItem = (itemName, dueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        dueDate,
      },
    };
    dispatchAllItems(newItemAction);
    // const newItems = [...allItems, { name: itemName, date: dueDate }];
    // setAllItems(newItems);
  };

  const deleteItem = (itemName) => {
    // const updatedItems = allItems.filter((item) => item.name !== itemName);
    // setAllItems(updatedItems);
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchAllItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider value={{ allItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default AllItemsContextProvider;
